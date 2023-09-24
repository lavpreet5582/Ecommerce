from rest_framework import viewsets, permissions, status
from rest_framework.response import Response
from django.contrib.auth import authenticate
from rest_framework.decorators import action
from accounts.utils import get_user_token

from accounts.models import User
from accounts.serializer import LoginSerializer, PasswordResetSerializer, UserSerializerData
# from rest_framework.permissions import AllowAny, IsAuthenticated
# Create your views here.

class UserViewSet(viewsets.ViewSet):
    permission_classes = [
        permissions.AllowAny
    ]

    def list(self, request):
        logged_in_user = request.user
        if logged_in_user.is_superuser:
            user = User.objects.all()
            serializer = UserSerializerData(user, many=True)
            return Response(serializer.data, status=status.HTTP_200_OK)
        else :
            return Response(status=status.HTTP_401_UNAUTHORIZED)
        
    @action(detail=False, methods=['POST'], name='Signup')
    def signup(self, request):
        try:
            user_data = request.data
            serializer = UserSerializerData(data=user_data)
            if not serializer.is_valid():
                return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
            serializer.save()
            token = get_user_token(serializer.instance)
            return Response({'token': token}, status=status.HTTP_200_OK)
        except Exception as e:
            return Response(str(e), status=status.HTTP_400_BAD_REQUEST)
    
    @action(detail=False, methods=['POST'], name='Login')
    def login(self, request):
        try:
            user_data = request.data
            serializer = LoginSerializer(data=user_data)
            if not serializer.is_valid():
                return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

            email = serializer.validated_data['email']
            password = serializer.validated_data['password']
            user = authenticate(email=email, password=password)

            if user is None or not user.is_active:
                return Response({'error': 'Invalid credentials'}, status=status.HTTP_401_UNAUTHORIZED)

            token = get_user_token(user)
            access_token = str(token)
            return Response({'token': access_token}, status=status.HTTP_200_OK)
        
        except Exception as e:
            return Response(str(e), status=status.HTTP_400_BAD_REQUEST)

    @action(detail=False, methods=['POST'], name='Reset Password')
    def reset_password(self, request):
        serializer = PasswordResetSerializer(data=request.data, context={'request': request})
        if serializer.is_valid():
            # The serializer handles sending the password reset email.
            return Response({'message': 'Password reset email sent successfully.'}, status=200)
        return Response(serializer.errors, status=400)


    