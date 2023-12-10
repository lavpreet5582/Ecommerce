from django.urls import path
from products.views import CategoryAdminViewset, ProductAdminViewset, ProductsViewset
from rest_framework import routers

router = routers.SimpleRouter()
router.register(r'admin-products', ProductAdminViewset, basename='products-admin')
router.register(r'admin-categories', CategoryAdminViewset, basename='categories-admin')
router.register(r'products', ProductsViewset, basename='products')


urlpatterns = router.urls