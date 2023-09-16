from rest_framework import serializers
from .models import HostProfile

class HostProfileSerializer(serializers.ModelSerializer):
    class Meta:
        model = HostProfile
        fields = "__all__"