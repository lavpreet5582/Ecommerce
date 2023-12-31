# from allauth.account.forms import ResetPasswordForm
from rest_framework import status
# from allauth.account.views import PasswordResetView
from rest_framework.views import APIView
from rest_framework.response import Response
from django.contrib.auth.models import Group
from accounts.models import User
from rest_framework import serializers
from django.contrib.auth.forms import PasswordResetForm


class PasswordResetSerializer(serializers.Serializer):
    email = serializers.EmailField()

    def validate_email(self, value):
        """
        Validate that the email exists in the database.
        """
        data = {'email': value}
        form = PasswordResetForm(data=data)

        if form.is_valid():
            return value
        else:
            raise serializers.ValidationError("Invalid email address")


class UserSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = User
        fields = ['url', 'username', 'email', 'groups']


class GroupSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = Group
        fields = ['url', 'name']


class UserSerializerData(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ['email', 'password', 'first_name', 'last_name']
        extra_kwargs = {'password': {'write_only': True}}

    def create(self, validated_data):
        password = validated_data.pop('password')
        user = User.objects.create_user(password=password, **validated_data)
        return user


class LoginSerializer(serializers.Serializer):
    email = serializers.EmailField()
    password = serializers.CharField()


class PasswordResetSerializer(serializers.Serializer):
    email = serializers.EmailField()
