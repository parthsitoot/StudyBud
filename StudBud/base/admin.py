from django.contrib import admin
from .models import Message
from .models import Topic
# Register your models here.

from .models import Room
admin.site.register(Room)
admin.site.register(Message)
admin.site.register(Topic)
