from django.contrib.auth.views import (
    PasswordResetView,
    LoginView,
    PasswordChangeView,
    PasswordResetConfirmView,
    LogoutView
)
from django.contrib.auth import login
from django.shortcuts import render, redirect
from django.urls import reverse_lazy

from .forms import CreationForm
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
            new_user = form.save()
            username = form.cleaned_data.get('username')
            messages.success(request, f'Account created for (username)')
            return redirect('')#redirection to an url patten maybe homepage
    else:
        form = UserCreationForm()
    return render(request, 'users/register.html', {'form': form})


class Login(LoginView):
    template_name = 'users/authForm.html'
    redirect_authenticator_user = True


class Logout(LogoutView):
    next_page = reverse_lazy('index')
    










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



