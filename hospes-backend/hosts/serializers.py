from rest_framework import serializers
from .models import HostProfile

class HostProfileSerializer(serializers.ModelSerializer):
    class Meta:
        model = HostProfile
        fields = "__all__"

# class ConfigSetSerializer(serializers.ModelSerializer):
#     class Meta:
#         model = ConfigSet
#         fields = ['config_set_id', 'config_id', 'config_value']