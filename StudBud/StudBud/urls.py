from django.contrib import admin
from django.urls import path
from django.http import HttpResponse

def home(request):
    return HttpResponse("Welcome to home page")

urlpatterns = [
    path('admin/', admin.site.urls),
    path('', home, name='home'),
]
