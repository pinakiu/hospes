from rest_framework import serializers
from .models import User

class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ['first_name', 'last_name', 'username', 'password']
        extra_kwargs = {'password': {'write_only': True}}

        def create(self, validated_data):
            user = User(
                first_name = validated_data['first_name'],
                last_name = validated_data['last_name'],
                username=validated_data['username']
            )
            user.set_password(validated_data['password'])
            user.save()
            return user


class ConfigSerializer(serializers.ModelSerializer):
    class Meta:
        model = Config
        fields = ['config_id', 'config_name'] # "__all__"
