from cart.models import CartItems
from rest_framework import serializers

class CartSerializer(serializers.ModelSerializer):
    class Meta:
        model = CartItems
        fields = ['id', 'user', 'products', 'quantity', 'total_amount']

class CartSerializerData(serializers.ModelSerializer):
    product_title = serializers.CharField(source='products.title', read_only=True)
    class Meta:
        model = CartItems
        fields = ['id', 'user', 'products', 'product_title', 'quantity', 'total_amount']