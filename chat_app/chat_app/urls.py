from django.contrib import admin
from django.urls import path, include

urlpatterns = [
    path('', include('frontend.urls')),
    path('', include('Frontend_server.urls')),
    path('chat/', include('chat.urls')),
]
