from rest_framework import serializers
from .models import GuestProfile

class GuestProfileSerializer(serializers.ModelSerializer):
    class Meta:
        model = GuestProfile
        fields = "__all__"