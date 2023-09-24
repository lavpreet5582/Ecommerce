from django.urls import path
from products.views import ProductViewSet
from rest_framework import routers

router = routers.SimpleRouter()
router.register(r'products', ProductViewSet, basename='products')

urlpatterns = router.urls