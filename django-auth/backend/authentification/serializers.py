from rest_framework import serializers
from .models import CustomUser

class CustomUserSerializer(serializers.ModelSerializer):
    class Meta:
        model = CustomUser
        fields = ( 'password', 'username')  # Add other fields as needed
        extra_kwargs = {'password': {'write_only': True}}