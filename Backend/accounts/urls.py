from django.urls import path, re_path
from accounts.views import UserViewSet
from rest_framework import routers


router = routers.SimpleRouter()
router.register(r'accounts', UserViewSet, basename='users')

urlpatterns = router.urls + [
    path('accounts/<int:pk>/change_password/', UserViewSet.as_view({'post': 'change_password'}), name='change-password'),
]