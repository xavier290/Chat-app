from .models import User, Post, Project, Comment, Version, Tag
from rest_framework import serializers
from rest_framework.serializers import ModelSerializer
from django.views.generic import ListView
from django.contrib import messages
from .forms import UserRegisterForm 
from django.shortcuts import render, redirect

class UserSerializer(ModelSerializer):
    class Meta:
        model = User
        fields = "__all__"


class TextSerializer(ModelSerializer):
    class Meta: 
        model = Text
        fields = "__all__"



def register(request):
    if request.method = 'Post':
        form = UserCreationForm(request.Post)
        if form.is_valid():
            form.save()
            username = form.cleaned_data.get('username')
            messages.success(request, f'Account created for (username)')
            return redirect('')#redirection to an url patten maybe homepage
    else:
        form = UserCreationForm()
    return render(request, 'users/register.html', {'form': form})











"""
Comment Serializer
@api_view(['POST', ])
def api_create_Post_view(request):

account = Account.objects.get(pk=1)
comment_post = CommentPost(author=account)

if request.methode == 'POST':
    serializer = CommentPostSerializer(blog_post, data=request.data)
    
    if serializer.is_valid():
        serializer.save()
        return = Response(serializer.data, status.HTTP_201_CREATE) 
       
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


Comment Serializer
@api_view(['Delete', ])
def api_detail_Delete_view(request, slug):
account = Account.objects.delete(pk=1)
   post = Post(author=account)
"""



