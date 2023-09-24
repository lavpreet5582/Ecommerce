from django.urls import path
from accounts.views import UserViewSet
from rest_framework import routers

router = routers.SimpleRouter()
router.register(r'accounts', UserViewSet, basename='users')

urlpatterns = router.urls