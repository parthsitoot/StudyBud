from django import forms
from django.contrib.auth import get_user_model
from django.contrib.auth.forms import UserCreationForm as DjangoUserCreationForm
from django.forms import ModelForm

from .models import Room, Topic

User = get_user_model()

class RoomForm(ModelForm):
    class Meta:
        model = Room
        fields = ['topic', 'name', 'description']

class TopicForm(ModelForm):
    class Meta:
        model = Topic
        fields = ['name']


class UserCreationForm(DjangoUserCreationForm):
    name = forms.CharField(required=False)
    bio = forms.CharField(required=False, widget=forms.Textarea)
    avatar = forms.ImageField(required=False)
    email = forms.EmailField(required=True)

    class Meta(DjangoUserCreationForm.Meta):
        model = User
        fields = ['name', 'username', 'email', 'bio', 'avatar', 'password1', 'password2']

    def clean_username(self):
        return self.cleaned_data['username'].strip().lower()

    def clean_email(self):
        return self.cleaned_data['email'].strip().lower()

    def save(self, commit=True):
        user = super().save(commit=False)
        user.username = self.cleaned_data['username']
        user.email = self.cleaned_data['email']
        if commit:
            user.save()
        return user


class UserProfileForm(ModelForm):
    name = forms.CharField(required=False)
    bio = forms.CharField(required=False, widget=forms.Textarea)
    avatar = forms.ImageField(required=False)
    email = forms.EmailField(required=True)

    class Meta:
        model = User
        fields = ['name', 'username', 'email', 'bio', 'avatar']

    def clean_username(self):
        return self.cleaned_data['username'].strip().lower()

    def clean_email(self):
        return self.cleaned_data['email'].strip().lower()

    def save(self, commit=True):
        user = super().save(commit=False)
        user.username = self.cleaned_data['username']
        user.email = self.cleaned_data['email']
        if commit:
            user.save()
        return user
