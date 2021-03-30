from Frontend_server.models import app
from rest_framework import viewsets, permissions
from .serializers import AppSerializer

class AppViewSet(viewsets.ModelViewSet):
    queryset = app.objects.all()
    permission_classes = [
        permissions.AllowAny
    ]
    serializer_class = AppSerializer