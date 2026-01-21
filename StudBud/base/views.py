from django.shortcuts import redirect, render
from .models import Room, Topic, Message
from .models import User
from django.contrib.auth import authenticate, login, logout
from django.db.models import Q
from django.contrib.auth.decorators import login_required
from .forms import RoomForm, TopicForm, UserCreationForm
from django.contrib import messages
from django.http import HttpResponse

# Create your views here.
def loginPage(request):
    page = 'login'
    if request.user.is_authenticated:
        return redirect('home')
    if request.method == 'POST':
        print(request.POST)
        username = request.POST.get('username')
        password = request.POST.get('password')
        try:
            user = User.objects.get(username=username)
            print(user)
        except:
            messages.error(request, 'User does not exits')
            
        user = authenticate(request, username=username, password=password)
        
        if user is not None:
            user.username = user.username.lower()
            login(request, user)
            return redirect('home')
        else:
            messages.error(request, 'Username Or Password does not exists')
    context = {'page' : page}
    return render(request, 'base/login_register.html', context)

@login_required(login_url='login')
def logoutUser(request):
    logout(request)
    return redirect('home')

def registerUser(request):
    form = UserCreationForm() 

    if request.method == 'POST':
        form = UserCreationForm(request.POST, request.FILES)
        if form.is_valid():
            # 1. Create the user instance but DO NOT save to DB yet
            user = form.save(commit=False)
            
            # 2. Convert username to lowercase (optional but good practice)
            user.username = user.username.lower()
            
            # 3. Hash the password! This encrypts "" -> "pbkdf2_sha256..."
            user.set_password(user.password)
            
            # 4. Now save the final object to the database
            user.save()
            
            login(request, user)
            return redirect('home')
        else:
            messages.error(request, 'An error occurred during registration')

    context = {'form': form}
    return render(request, 'base/login_register.html', context)


def room(request, pk):
    room = Room.objects.get(id=pk)
    if request.method == "POST" :
        message = Message.objects.create(
            user = request.user,
            room = room,
            body = request.POST.get('body')
        )
        
        return redirect('room', pk=room.id)
    
    conversation = room.message_set.all().order_by("-updated")
    participants = room.participants.all()
    context = {'room': room, 'conversation' : conversation, 'participants' : participants}
    return render(request, 'base/room.html', context)

def home(request):
    q = request.GET.get('q') if request.GET.get('q') != None else ''
    topics = Topic.objects.all()
    rooms = Room.objects.filter(
        Q(topic__name__icontains=q) | 
        Q(name__icontains=q) |
        Q(description__icontains=q))
    
    room_count = rooms.count()
    activities = Message.objects.filter(
        Q(room__topic__name__icontains=q) |
        Q(room__name__icontains=q)).order_by('-updated')

    context = {'rooms': rooms, 'topics': topics, 'room_count': room_count,
               'activities': activities}
    return render(request, 'base/home.html', context)

@login_required(login_url='login')
def createRoom(request):
    form = RoomForm()
    if request.method == 'POST':
        form = RoomForm(request.POST)
        if form.is_valid():
            form.instance.host = request.user
            form.save()
            return redirect('home')
    
    context = {'form' : form}
    return render(request, 'base/room_form.html', context)

@login_required(login_url='login')
def createTopic(request):
    form = TopicForm()
    if request.method == 'POST':
        form = TopicForm(request.POST)
        if form.is_valid():
            form.save()
            return redirect('home')
        
    context = {'form' : form}
    return render(request, 'base/topic_form.html', context)

@login_required(login_url='login')
def updateRoom(request, pk):
    room = Room.objects.get(id=pk)
    form = RoomForm(instance=room)
    
    if request.user != room.host:
        return redirect('home')
    
    if request.method == 'POST':
        form = RoomForm(request.POST, instance=room)
        if form.is_valid():
            form.save()
            return redirect('home')
    context = {'form' : form}
    return render(request, 'base/room_form.html', context)

@login_required(login_url='login')
def deleteRoom(request, pk):
    room = Room.objects.get(id=pk)
    if request.method == 'POST':
        room.delete()
        return redirect('home')
    return render(request, 'base/delete.html', {'obj': room})

@login_required(login_url='login')
def deleteMessage(request, pk):
    convo = Message.objects.get(id=pk)
    if request.user != convo.user:
        return HttpResponse('You are not the owner of this message')

    if request.method == 'POST':
        convo.delete()
        return redirect('home')

    return render(request, 'base/delete.html', {'obj': convo})

def updateMessage(request, pk):
    convo = Message.objects.get(id=pk)
    if request.user != convo.user:
        return HttpResponse('You are not the owner of this message')

    if request.method == 'POST':
        convo.body = request.POST.get('body')
        convo.save()
        return redirect('home')
    return render(request, 'base/update-message.html', {'obj': convo})


def userProfile(request, pk):
    user = User.objects.get(id=pk)
    rooms = user.room_set.all()
    topics = Topic.objects.all()
    activities = Message.objects.filter(user=user).order_by('-updated')
    context = {'user' : user, 'rooms': rooms, 'topics': topics, 'activities': activities}
    return render(request, 'base/profile.html', context)

def addTopic(request):
    if request.method == 'POST':
        topic_name = request.POST.get('name')
        Topic.objects.create(name=topic_name)
        return redirect('home')
    return render(request, 'base/topic_form.html')