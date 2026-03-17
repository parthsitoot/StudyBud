from urllib.parse import quote

from django.contrib.auth import get_user_model
from django.contrib.auth import authenticate, login, logout
from django.db.models import Q
from django.http import JsonResponse
from django.shortcuts import get_object_or_404, render
from django.views.decorators.csrf import ensure_csrf_cookie
from django.views.decorators.http import require_GET, require_POST

from .forms import RoomForm, TopicForm, UserCreationForm, UserProfileForm
from .models import Message, Room, Topic

User = get_user_model()


def json_error(message, status=400, errors=None):
    payload = {'ok': False, 'message': message}
    if errors:
        payload['errors'] = errors
    return JsonResponse(payload, status=status)


def form_errors(form):
    return {
        field: [str(error) for error in errors]
        for field, errors in form.errors.items()
    }


def fallback_avatar(seed):
    initial = (seed or '?')[:1].upper()
    svg = f"""
    <svg xmlns="http://www.w3.org/2000/svg" width="160" height="160" viewBox="0 0 160 160">
        <defs>
            <linearGradient id="bg" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stop-color="#ff9a62" />
                <stop offset="100%" stop-color="#f23f79" />
            </linearGradient>
        </defs>
        <rect width="160" height="160" rx="44" fill="url(#bg)" />
        <text x="50%" y="56%" text-anchor="middle" fill="#fff8f1" font-size="74" font-family="Georgia, serif">{initial}</text>
    </svg>
    """
    return f"data:image/svg+xml,{quote(svg.strip())}"


def avatar_url_for(user):
    if getattr(user, 'avatar', None):
        try:
            if user.avatar.name:
                return user.avatar.url
        except (ValueError, FileNotFoundError):
            pass
    return fallback_avatar(user.username or user.name or 'S')


def serialize_user(user, request):
    if not user:
        return None
    return {
        'id': user.id,
        'username': user.username,
        'name': user.name or user.username,
        'bio': user.bio or '',
        'email': user.email if request.user.is_authenticated and request.user.id == user.id else '',
        'avatarUrl': avatar_url_for(user),
        'isCurrentUser': request.user.is_authenticated and request.user.id == user.id,
    }


def serialize_topic(topic):
    return {
        'id': topic.id,
        'name': topic.name,
        'roomCount': topic.room_set.count(),
    }


def serialize_room(room, request):
    return {
        'id': room.id,
        'name': room.name,
        'description': room.description or '',
        'topic': serialize_topic(room.topic) if room.topic else None,
        'host': serialize_user(room.host, request) if room.host else None,
        'messageCount': room.message_set.count(),
        'participantCount': room.participants.count(),
        'updatedAt': room.updated.isoformat(),
        'createdAt': room.created.isoformat(),
        'canEdit': request.user.is_authenticated and room.host_id == request.user.id,
    }


def serialize_message(message, request):
    return {
        'id': message.id,
        'body': message.body,
        'updatedAt': message.updated.isoformat(),
        'createdAt': message.created.isoformat(),
        'user': serialize_user(message.user, request),
        'canEdit': request.user.is_authenticated and message.user_id == request.user.id,
    }


def serialize_activity(message, request):
    return {
        'id': message.id,
        'body': message.body,
        'createdAt': message.created.isoformat(),
        'updatedAt': message.updated.isoformat(),
        'room': {
            'id': message.room_id,
            'name': message.room.name if message.room else 'Unknown room',
        },
        'user': serialize_user(message.user, request),
    }


def require_authenticated_user(request):
    if not request.user.is_authenticated:
        return json_error('Authentication required.', status=401)
    return None


@ensure_csrf_cookie
def app_shell(request, *args, **kwargs):
    return render(request, 'react_app.html')


@require_GET
def api_bootstrap(request):
    return JsonResponse({
        'ok': True,
        'currentUser': serialize_user(request.user, request) if request.user.is_authenticated else None,
    })


@require_GET
def api_home(request):
    query = request.GET.get('q', '').strip()
    topics = Topic.objects.all().order_by('name')
    rooms = Room.objects.select_related('host', 'topic').all()
    if query:
        rooms = rooms.filter(
            Q(topic__name__icontains=query)
            | Q(name__icontains=query)
            | Q(description__icontains=query)
        )

    activities = Message.objects.select_related('user', 'room').filter(
        Q(room__topic__name__icontains=query)
        | Q(room__name__icontains=query)
        | Q(body__icontains=query)
    ).order_by('-updated')[:12] if query else Message.objects.select_related('user', 'room').order_by('-updated')[:12]

    return JsonResponse({
        'ok': True,
        'query': query,
        'topics': [serialize_topic(topic) for topic in topics],
        'rooms': [serialize_room(room, request) for room in rooms],
        'activities': [serialize_activity(activity, request) for activity in activities],
        'stats': {
            'rooms': Room.objects.count(),
            'topics': Topic.objects.count(),
            'messages': Message.objects.count(),
            'members': User.objects.count(),
        },
    })


@require_GET
def api_room_detail(request, pk):
    room = get_object_or_404(Room.objects.select_related('host', 'topic'), id=pk)
    participants = room.participants.all()
    messages_qs = Message.objects.filter(room=room).select_related('user').order_by('created')

    return JsonResponse({
        'ok': True,
        'room': serialize_room(room, request),
        'participants': [serialize_user(user, request) for user in participants],
        'messages': [serialize_message(message, request) for message in messages_qs],
    })


@require_GET
def api_profile_detail(request, pk):
    profile_user = get_object_or_404(User, id=pk)
    rooms = Room.objects.select_related('host', 'topic').filter(host=profile_user)
    activities = Message.objects.select_related('user', 'room').filter(user=profile_user).order_by('-updated')[:20]

    return JsonResponse({
        'ok': True,
        'profile': serialize_user(profile_user, request),
        'rooms': [serialize_room(room, request) for room in rooms],
        'activities': [serialize_activity(activity, request) for activity in activities],
    })


@require_GET
def api_room_form_data(request, pk=None):
    room = None
    if pk is not None:
        room = get_object_or_404(Room, id=pk)

    return JsonResponse({
        'ok': True,
        'topics': [serialize_topic(topic) for topic in Topic.objects.all().order_by('name')],
        'room': serialize_room(room, request) if room else None,
    })


@require_GET
def api_profile_edit_data(request):
    auth_error = require_authenticated_user(request)
    if auth_error:
        return auth_error

    return JsonResponse({
        'ok': True,
        'profile': serialize_user(request.user, request),
    })


@require_POST
def api_login(request):
    username = request.POST.get('username', '').strip().lower()
    password = request.POST.get('password', '')
    user = authenticate(request, username=username, password=password)
    if user is None:
        return json_error('Username or password does not exist.', status=400)

    login(request, user)
    return JsonResponse({'ok': True, 'currentUser': serialize_user(user, request)})


@require_POST
def api_logout(request):
    if request.user.is_authenticated:
        logout(request)
    return JsonResponse({'ok': True})


@require_POST
def api_register(request):
    if request.user.is_authenticated:
        return json_error('You are already logged in.', status=400)

    form = UserCreationForm(request.POST, request.FILES)
    if not form.is_valid():
        return json_error('Please fix the highlighted errors.', status=400, errors=form_errors(form))

    user = form.save()
    login(request, user)
    return JsonResponse({'ok': True, 'currentUser': serialize_user(user, request)}, status=201)


@require_POST
def api_room_create(request):
    auth_error = require_authenticated_user(request)
    if auth_error:
        return auth_error

    form = RoomForm(request.POST)
    if not form.is_valid():
        return json_error('Please fix the room details.', status=400, errors=form_errors(form))

    room = form.save(commit=False)
    room.host = request.user
    room.save()
    return JsonResponse({'ok': True, 'room': serialize_room(room, request)}, status=201)


@require_POST
def api_room_update(request, pk):
    auth_error = require_authenticated_user(request)
    if auth_error:
        return auth_error

    room = get_object_or_404(Room, id=pk)
    if room.host_id != request.user.id:
        return json_error('You are not the owner of this room.', status=403)

    form = RoomForm(request.POST, instance=room)
    if not form.is_valid():
        return json_error('Please fix the room details.', status=400, errors=form_errors(form))

    room = form.save()
    return JsonResponse({'ok': True, 'room': serialize_room(room, request)})


@require_POST
def api_room_delete(request, pk):
    auth_error = require_authenticated_user(request)
    if auth_error:
        return auth_error

    room = get_object_or_404(Room, id=pk)
    if room.host_id != request.user.id:
        return json_error('You are not the owner of this room.', status=403)

    room.delete()
    return JsonResponse({'ok': True})


@require_POST
def api_topic_create(request):
    auth_error = require_authenticated_user(request)
    if auth_error:
        return auth_error

    form = TopicForm(request.POST)
    if not form.is_valid():
        return json_error('Please provide a topic name.', status=400, errors=form_errors(form))

    topic = form.save()
    return JsonResponse({'ok': True, 'topic': serialize_topic(topic)}, status=201)


@require_POST
def api_message_create(request, pk):
    auth_error = require_authenticated_user(request)
    if auth_error:
        return auth_error

    room = get_object_or_404(Room, id=pk)
    body = request.POST.get('body', '').strip()
    if not body:
        return json_error('Message body cannot be empty.', status=400)

    message = Message.objects.create(user=request.user, room=room, body=body)
    room.participants.add(request.user)
    return JsonResponse({'ok': True, 'message': serialize_message(message, request)}, status=201)


@require_POST
def api_message_update(request, pk):
    auth_error = require_authenticated_user(request)
    if auth_error:
        return auth_error

    message = get_object_or_404(Message, id=pk)
    if message.user_id != request.user.id:
        return json_error('You are not the owner of this message.', status=403)

    body = request.POST.get('body', '').strip()
    if not body:
        return json_error('Message body cannot be empty.', status=400)

    message.body = body
    message.save()
    return JsonResponse({'ok': True, 'message': serialize_message(message, request)})


@require_POST
def api_message_delete(request, pk):
    auth_error = require_authenticated_user(request)
    if auth_error:
        return auth_error

    message = get_object_or_404(Message, id=pk)
    if message.user_id != request.user.id:
        return json_error('You are not the owner of this message.', status=403)

    message.delete()
    return JsonResponse({'ok': True})


@require_POST
def api_profile_update(request, pk):
    auth_error = require_authenticated_user(request)
    if auth_error:
        return auth_error

    profile_user = get_object_or_404(User, id=pk)
    if profile_user.id != request.user.id:
        return json_error('You can only edit your own profile.', status=403)

    form = UserProfileForm(request.POST, request.FILES, instance=profile_user)
    if not form.is_valid():
        return json_error('Please fix the profile details.', status=400, errors=form_errors(form))

    profile_user = form.save()
    return JsonResponse({'ok': True, 'profile': serialize_user(profile_user, request)})
