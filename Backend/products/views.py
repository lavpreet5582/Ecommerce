from rest_framework import viewsets, permissions, status
from products.serializers import *
from products.models import *
from rest_framework.response import Response
from rest_framework.decorators import action
import logging

logger = logging.getLogger(__name__)
# Create your views here.


class ProductAdminViewset(viewsets.ViewSet):
    permission_classes = [
        permissions.IsAdminUser
    ]

    def list(self, request):
        try:
            products = Product.objects.all()
            serializer = ProductSerializerData(products, many=True)
            logger.info("[Get all products] Products Found")
            return Response(serializer.data, status=status.HTTP_200_OK)
        except Exception as e:
            logger.error("[Get all products] %s", str(e))
            return Response(str(e), status=status.HTTP_400_BAD_REQUEST)

    def create(self, request):
        try:
            product_data = request.data
            serializer = ProductSerializerData(data=product_data)
            if not serializer.is_valid():
                logger.error("[Create product] %s", serializer.errors)
                return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
            serializer.save()
            logger.info("[Create product] Product Added Successfully %s", serializer.data)
            return Response({"message": "Product Added Successfully"}, status=status.HTTP_200_OK)
        except Exception as e:
            logger.error("[Create product] %s", str(e))
            return Response(str(e), status=status.HTTP_400_BAD_REQUEST)

    def update(self, request, pk=None):
        try:
            product_data = request.data
            product = Product.objects.get(id=pk)
            serializer = ProductSerializerData(
                data=product_data, instance=product)
            if not serializer.is_valid():
                logger.error("[Update product] %s", serializer.errors)
                return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
            serializer.save()
            logger.info("[Update product] Product Updated Successfully %s", serializer.data)
            return Response({'message': "Product Updated Successfully"}, status=status.HTTP_200_OK)
        except Exception as e:
            logger.error("[Update product] %s", str(e))
            return Response(str(e), status=status.HTTP_400_BAD_REQUEST)
        
    def retrieve(self, request, pk=None):
        try:
            product = Product.objects.get(id=pk)
            serializer = ProductSerializerData(product)
            logger.info("[Get product] Product Found with id %s", serializer.data)
            return Response(serializer.data, status=status.HTTP_200_OK)
        except Exception as e:
            logger.error("[Get product] %s", str(e))
            return Response(str(e), status=status.HTTP_400_BAD_REQUEST)
        
    def destroy(self, request, pk=None):
        try:
            product = Product.objects.get(id=pk)
            product.delete()
            logger.info("[Delete product] Product Deleted Successfully")
            return Response({'message': "Product Deleted Successfully"}, status=status.HTTP_200_OK)
        except Exception as e:
            logger.error("[Delete product] %s", str(e))
            return Response(str(e), status=status.HTTP_400_BAD_REQUEST)
        
class CategoryAdminViewset(viewsets.ViewSet):
    permission_classes = [
        permissions.IsAdminUser
    ]

    def list(self, request):
        try:
            categories = Categories.objects.all()
            serializer = CategorySerializerData(categories, many=True)
            logger.info("[Get all categories] Categories Found")
            return Response(serializer.data, status=status.HTTP_200_OK)
        except Exception as e:
            logger.error("[Get all categories] %s", str(e))
            return Response(str(e), status=status.HTTP_400_BAD_REQUEST)
        
    def create(self, request):
        try:
            category_data = request.data
            serializer = CategorySerializerData(data=category_data)
            if not serializer.is_valid():
                logger.error("[Create category] %s", serializer.errors)
                return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
            serializer.save()
            logger.info("[Create category] Category Added Successfully %s", serializer.data)
            return Response({"message": "Category Added Successfully"}, status=status.HTTP_200_OK)
        except Exception as e:
            logger.error("[Create category] %s", str(e))
            return Response(str(e), status=status.HTTP_400_BAD_REQUEST)
    
    def update(self, request, pk=None):
        try:
            category_data = request.data
            category = Categories.objects.get(id=pk)
            serializer = CategorySerializerData(
                data=category_data, instance=category)
            if not serializer.is_valid():
                logger.error("[Update category] %s", serializer.errors)
                return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
            serializer.save()
            logger.info("[Update category] Category Updated Successfully %s", serializer.data)
            return Response({'message': "Category Updated Successfully"}, status=status.HTTP_200_OK)
        except Exception as e:
            logger.error("[Update category] %s", str(e))
            return Response(str(e), status=status.HTTP_400_BAD_REQUEST)
        
    def retrieve(self, request, pk=None):
        try:
            category = Categories.objects.get(id=pk)
            serializer = CategorySerializerData(category)
            logger.info("[Get category] Category Found with id %s", serializer.data)
            return Response(serializer.data, status=status.HTTP_200_OK)
        except Exception as e:
            logger.error("[Get category] %s", str(e))
            return Response(str(e), status=status.HTTP_400_BAD_REQUEST)
    
    def destroy(self, request, pk=None):
        try:
            category = Categories.objects.get(id=pk)
            category.delete()
            logger.info("[Delete category] Category Deleted Successfully")
            return Response({'message': "Category Deleted Successfully"}, status=status.HTTP_200_OK)
        except Exception as e:
            logger.error("[Delete category] %s", str(e))
            return Response(str(e), status=status.HTTP_400_BAD_REQUEST)

class ProductsViewset(viewsets.ViewSet):
    permission_classes = [
        permissions.AllowAny
    ]

    def list(self, request):
        try:
            products = Product.objects.all()
            serializer = ProductSerializerData(products, many=True)
            logger.info("[Get all products] Products Found")
            return Response(serializer.data, status=status.HTTP_200_OK)
        except Exception as e:
            logger.error("[Get all products] %s", str(e))
            return Response(str(e), status=status.HTTP_400_BAD_REQUEST)

    def retrieve(self, request, pk=None):
        try:
            product = Product.objects.get(id=pk)
            serializer = ProductSerializerData(product)
            logger.info("[Get product] Product Found with id %s", serializer.data)
            return Response(serializer.data, status=status.HTTP_200_OK)
        except Exception as e:
            logger.error("[Get product] %s", str(e))
            return Response(str(e), status=status.HTTP_400_BAD_REQUEST)
        
    @action(detail=False, methods=['GET'], name='Get Categories')
    def get_categories(self, request):
        try:
            categories = Categories.objects.all()
            serializer = CategorySerializerData(categories, many=True)
            logger.info("[Get categories] Categories Found")
            return Response(serializer.data, status=status.HTTP_200_OK)
        except Exception as e:
            logger.error("[Get categories] %s", str(e))
            return Response(str(e), status=status.HTTP_400_BAD_REQUEST)

