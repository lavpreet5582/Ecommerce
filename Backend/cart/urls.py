from django.urls import path
from cart.views import CartViewset
from rest_framework import routers

router = routers.SimpleRouter()
router.register(r'carts', CartViewset, basename='carts')


urlpatterns = router.urls