from accounts.models import User
from accounts.serializer import LoginSerializer, UserSerializerData
from accounts.utils import get_user_token
from django.conf import settings
from django.contrib.auth import authenticate
from django.core.mail import send_mail
from django.template.loader import render_to_string
from rest_framework.response import Response
from rest_framework.decorators import action
from rest_framework import viewsets, permissions, status
from rest_framework.response import Response
import logging

logger = logging.getLogger(__name__)


class UserViewSet(viewsets.ViewSet):
    permission_classes = [
        permissions.AllowAny
    ]

    def list(self, request):
        logged_in_user = request.user
        if logged_in_user.is_superuser:
            user = User.objects.all()
            serializer = UserSerializerData(user, many=True)
            logger.info("[Get all users] %s", serializer.data)
            return Response(serializer.data, status=status.HTTP_200_OK)
        else:
            logger.error("[Get all users] Not allowed")
            return Response(status=status.HTTP_401_UNAUTHORIZED)

    @action(detail=False, methods=['POST'], name='Signup')
    def signup(self, request):
        try:
            user_data = request.data
            serializer = UserSerializerData(data=user_data)
            if not serializer.is_valid():
                logger.error("[Signup] %s", serializer.errors)
                return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
            serializer.save()
            token = get_user_token(serializer.instance)
            logger.info(
                "[Signup] User Created Successfully with email %s.", request.data['email'])
            return Response({'token': token, 'is_superuser': serializer.instance.is_superuser}, status=status.HTTP_200_OK)
        except Exception as e:
            logger.error("[Signup] %s", str(e))
            return Response(str(e), status=status.HTTP_400_BAD_REQUEST)

    @action(detail=False, methods=['POST'], name='Login')
    def login(self, request):
        try:
            user_data = request.data
            serializer = LoginSerializer(data=user_data)
            if not serializer.is_valid():
                logger.error("[Login] %s", serializer.errors)
                return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

            email = serializer.validated_data['email']
            password = serializer.validated_data['password']
            user = authenticate(email=email, password=password)

            if user is None or not user.is_active:
                return Response({'error': 'Invalid credentials'}, status=status.HTTP_401_UNAUTHORIZED)

            token = get_user_token(user)
            access_token = str(token)
            logger.info(
                "[Login] User Logged In Successfully with email %s.", email)
            return Response({'token': access_token, 'is_superuser': user.is_superuser}, status=status.HTTP_200_OK)

        except Exception as e:
            logger.error("[Login] %s", str(e))
            return Response(str(e), status=status.HTTP_400_BAD_REQUEST)

    @action(detail=False, methods=['POST'], name='Reset Password')
    def reset_password(self, request):
        email = request.data.get('email')
        frontend_url = settings.FRONTEND.get('URL')
        if not email:
            # Return an error
            logger.error("[Reset Password] Email Not Found in request.")
            return Response({'detail': 'Email is required.'}, status=status.HTTP_400_BAD_REQUEST)

        try:
            user = User.objects.get(email=email)
            logger.info("[Reset Password] User Found with email %s.", email)
        except User.DoesNotExist:
            logger.error(
                "[Reset Password] User with this email does not exist.")
            return Response({'detail': 'User with this email does not exist.'}, status=status.HTTP_404_NOT_FOUND)

        reset_url = f"{frontend_url}/{user.pk}"

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
        logger.info(
            "[Reset Password] Password reset email sent to %s.", user.email)

        return Response({'detail': 'Password reset email has been sent.'}, status=status.HTTP_200_OK)

    @action(detail=False, methods=['POST'], name='Change Password')
    def change_password(self, request, pk=None):
        password = request.data.get('password')
        if not password:
            # Return an error
            logger.error("[Change Password] Password Not Found in request.")
            return Response({'detail': 'Password is required.'}, status=status.HTTP_400_BAD_REQUEST)

        try:
            user = User.objects.get(id=pk)
            logger.info("[Change Password] User Found with id %s.", pk)
        except User.DoesNotExist:
            logger.error("[Change Password] User with this id does not exist.")
            return Response({'detail': 'User with this id does not exist.'}, status=status.HTTP_404_NOT_FOUND)

        user.set_password(password)
        user.save()
        logger.info(
            "[Change Password] Password Changed Successfully for user with id %s.", pk)
        return Response({'detail': 'Password changed successfully! Please Login Again.'}, status=status.HTTP_200_OK)
