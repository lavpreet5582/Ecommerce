from rest_framework import viewsets, permissions, status
from rest_framework.response import Response
from django.contrib.auth import authenticate
from rest_framework.decorators import action
from accounts.utils import get_user_token
from rest_framework import status
from rest_framework.response import Response
from rest_framework import viewsets, status
from rest_framework.response import Response
from django.contrib.auth.tokens import default_token_generator
from django.contrib.auth import get_user_model
from django.utils.http import urlsafe_base64_encode, urlsafe_base64_decode
from django.utils.encoding import force_bytes, force_str
from django.core.mail import send_mail
from django.contrib.sites.shortcuts import get_current_site
from django.template.loader import render_to_string
from django.urls import reverse

from accounts.models import User
from accounts.serializer import LoginSerializer, UserSerializerData


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
        else:
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
        email = request.data.get('email')
        if not email:
            return Response({'detail': 'Email is required.'}, status=status.HTTP_400_BAD_REQUEST)

        try:
            user = User.objects.get(email=email)
        except User.DoesNotExist:
            return Response({'detail': 'User with this email does not exist.'}, status=status.HTTP_404_NOT_FOUND)

        # Generate a reset token and UID
        # token = default_token_generator.make_token(user)
        # uid = urlsafe_base64_encode(force_bytes(user.pk))

        # Build the reset URL
        # current_site = get_current_site(request)
        # reset_url = reverse('password_reset_confirm', kwargs={
        #                     'uidb64': uid, 'token': token})
        # reset_url = f'http://{current_site.domain}{reset_url}'
        reset_url = f"http://localhost:3000/change-password/{user.pk}"

        # Send the reset email
        subject = 'Password Reset'
        context = {
            'user': user,
            'site_name': 'Shopify',  # Replace with your actual site name
            # Replace with the actual reset URL
            'reset_url': reset_url,
        }

        message = render_to_string('password_reset_email.html', context)
        from_email = 'lsv2885655@gmail.com'  # Replace with your email address
        send_mail(subject, message, from_email, [user.email])

        return Response({'detail': 'Password reset email has been sent.'}, status=status.HTTP_200_OK)


    @action(detail=False, methods=['POST'], name='Change Password')
    def change_password(self, request, pk=None):
        password = request.data.get('password')
        if not password:
            return Response({'detail': 'Password is required.'}, status=status.HTTP_400_BAD_REQUEST)

        try:
            user = User.objects.get(id=pk)
        except User.DoesNotExist:
            return Response({'detail': 'User with this id does not exist.'}, status=status.HTTP_404_NOT_FOUND)

        user.set_password(password)
        user.save()

        return Response({'detail': 'Password changed successfully.'}, status=status.HTTP_200_OK)