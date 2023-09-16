from rest_framework import serializers
from .models import Config, ConfigSet

class ConfigSerializer(serializers.ModelSerializer):
    class Meta:
        model = Config
        fields = ['config_id', 'config_name']

class ConfigSetSerializer(serializers.ModelSerializer):
    class Meta:
        model = ConfigSet
        fields = ['config_set_id', 'config_id', 'config_value']