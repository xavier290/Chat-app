from rest_framework import serializers
from Frontend_server.models import app

# serializer

class  AppSerializer(serializers.ModelSerializer):
    class Meta:
        model = app
        fields = '__all__'