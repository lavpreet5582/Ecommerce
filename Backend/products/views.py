from django.shortcuts import render
from rest_framework import viewsets, permissions, status
from products.serializers import *
from rest_framework.response import Response
from rest_framework.decorators import action

# Create your views here.


class ProductViewSet(viewsets.ViewSet):
    permission_classes = [
        permissions.IsAdminUser
    ]

    def list(self, request):
        products = Product.objects.all()
        serializer = ProductSerializerData(products, many=True)
        return Response(serializer.data, status=status.HTTP_200_OK)

    def create(self, request):
        try:
            product_data = request.data
            serializer = ProductSerializerData(data=product_data)
            if not serializer.is_valid():
                return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
            serializer.save()
            return Response({"message": "Product Added Successfully"}, status=status.HTTP_200_OK)
        except Exception as e:
            return Response(str(e), status=status.HTTP_400_BAD_REQUEST)

    def update(self, request, pk=None):
        try:
            product_data = request.data
            product = Product.objects.get(id=pk)
            serializer = ProductSerializerData(
                data=product_data, instance=product)
            if not serializer.is_valid():
                return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
            serializer.save()
            return Response({'message': "Product Updated Successfully"}, status=status.HTTP_200_OK)
        except Exception as e:
            return Response(str(e), status=status.HTTP_400_BAD_REQUEST)
        
    def retrieve(self, request, pk=None):
        try:
            product = Product.objects.get(id=pk)
            serializer = ProductSerializerData(product)
            return Response(serializer.data, status=status.HTTP_200_OK)
        except Exception as e:
            return Response(str(e), status=status.HTTP_400_BAD_REQUEST)
        
    def destroy(self, request, pk=None):
        try:
            product = Product.objects.get(id=pk)
            product.delete()
            return Response({'message': "Product Deleted Successfully"}, status=status.HTTP_200_OK)
        except Exception as e:
            return Response(str(e), status=status.HTTP_400_BAD_REQUEST)
