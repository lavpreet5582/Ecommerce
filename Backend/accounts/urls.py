from django.urls import path, re_path
from accounts.views import UserViewSet
from rest_framework import routers
from django.contrib.auth import views as auth_views


router = routers.SimpleRouter()
router.register(r'accounts', UserViewSet, basename='users')

urlpatterns = router.urls + [
    path('accounts/<int:pk>/change_password/', UserViewSet.as_view({'post': 'change_password'}), name='change-password'),
    # path('password-reset-complete/', auth_views.PasswordResetCompleteView.as_view(), name='password_reset_complete'),
    # re_path(r'^password-reset-confirm/(?P<uidb64>[0-9A-Za-z_\-]+)/(?P<token>.+)/$', auth_views.PasswordResetConfirmView.as_view(), name='password_reset_confirm')
]