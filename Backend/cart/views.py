from django.shortcuts import render
from rest_framework import permissions, viewsets
from cart.models import CartItems
from cart.serializers import CartSerializer, CartSerializerData
from rest_framework.response import Response
from rest_framework import status
import logging

logger = logging.getLogger(__name__)
# Create your views here.

class CartViewset(viewsets.ViewSet):
    permission_classes = [
        permissions.IsAuthenticated
    ]

    def list(self, request):
        try:
            carts = CartItems.objects.filter(user=request.user)
            serializer = CartSerializerData(carts, many=True)
            logger.info("[Get all carts] Carts Found")
            return Response(serializer.data, status=status.HTTP_200_OK)
        except Exception as e:
            logger.error("[Get all carts] %s", str(e))
            return Response(str(e), status=status.HTTP_400_BAD_REQUEST)
        
    def create(self, request):
        try:
            cart_data = request.data
            cart_data['user'] = request.user.id
            serializer = CartSerializer(data=cart_data)
            if not serializer.is_valid():
                logger.error("[Create cart] %s", serializer.errors)
                return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
            serializer.save()
            logger.info("[Create cart] Cart Added Successfully %s", serializer.data)
            return Response({"message": "Cart Added Successfully"}, status=status.HTTP_200_OK)
        except Exception as e:
            logger.error("[Create cart] %s", str(e))
            return Response(str(e), status=status.HTTP_400_BAD_REQUEST)
    
    def destroy(self, request, pk=None):
        try:
            cart = CartItems.objects.get(id=pk)
            cart.delete()
            logger.info("[Delete cart] Cart Deleted Successfully")
            return Response({'message': "Cart Deleted Successfully"}, status=status.HTTP_200_OK)
        except Exception as e:
            logger.error("[Delete cart] %s", str(e))
            return Response(str(e), status=status.HTTP_400_BAD_REQUEST)
        
    def update(self, request, pk=None):
        try:
            cart = CartItems.objects.get(id=pk)
            serializer = CartSerializer(cart, data=request.data, partial=True)
            if not serializer.is_valid():
                logger.error("[Update cart] %s", serializer.errors)
                return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
            serializer.save()
            logger.info("[Update cart] Cart Updated Successfully %s", serializer.data)
            return Response({"message": "Cart Updated Successfully"}, status=status.HTTP_200_OK)
        except Exception as e:
            logger.error("[Update cart] %s", str(e))
            return Response(str(e), status=status.HTTP_400_BAD_REQUEST)