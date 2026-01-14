from django.shortcuts import redirect, render
from .models import Room, Topic, Message
from django.contrib.auth.models import User
from django.contrib.auth import authenticate, login, logout
from django.db.models import Q
from django.contrib.auth.decorators import login_required
from django.contrib.auth.forms import UserCreationForm
from .forms import RoomForm, TopicForm
from django.contrib import messages
from django.http import HttpResponse

# Create your views here.
def loginPage(request):
    page = 'login'
    
    if request.user.is_authenticated:
        return redirect('home')
    if request.method == 'POST':
        username = request.POST.get('username')
        password = request.POST.get('password')
        try:
            user = User.objects.get(username=username)
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


def logoutUser(request):
    logout(request)
    return redirect('home')

def registerUser(request):
    form = UserCreationForm()

    if request.method == 'POST':
        form = UserCreationForm(request.POST)
        print(form)
        if form.is_valid():
            user = form.save(commit=False)
            user.username = user.username.lower()
            user.save()
            login(request, user)
            return redirect('home')
        else:
            messages.error(request, 'An error occurred during registration')
            
    context = {'form' : form}
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
    conversation = room.message_set.all().order_by("-created")
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

    context = {'rooms': rooms, 'topics': topics, 'room_count': room_count}
    return render(request, 'base/home.html', context)

@login_required(login_url='login')
def createRoom(request):
    form = RoomForm()
    if request.method == 'POST':
        form = RoomForm(request.POST)
        if form.is_valid():
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

