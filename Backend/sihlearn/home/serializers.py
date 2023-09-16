from rest_framework import serializers
from home.models import Reg
from django.contrib.auth import get_user_model

class RegSerializer(serializers.ModelSerializer):
    class Meta:
        model = Reg
        fields = '__all__'

User=get_user_model()

class UserSerializer(serializers.ModelSerializer):
        class Meta:
            model = User
            fields=('id','username')