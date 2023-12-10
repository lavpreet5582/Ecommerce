from products.models import Categories, Product 
from rest_framework import serializers


class ProductSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = Product
        fields = ['title', 'price', 'description', 'category', 'image']


class ProductSerializerData(serializers.ModelSerializer):
    class Meta:
        model = Product
        fields = ['id', 'title', 'price', 'description', 'category', 'image']

    def create(self, validated_data):
        product = Product.objects.create(**validated_data)
        return product

    def update(self, instance, validated_data):
        instance.title = validated_data.get('title', instance.title)
        instance.price = validated_data.get('price', instance.price)
        instance.description = validated_data.get(
            'description', instance.description)
        instance.category = validated_data.get('category', instance.category)
        instance.image = validated_data.get('image', instance.image)
        instance.save()
        return instance


class CategorySerializerData(serializers.ModelSerializer):
    class Meta:
        model = Categories
        fields = ['id', 'name', 'code']

    def create(self, validated_data):
        category = Categories.objects.create(**validated_data)
        return category

    def update(self, instance, validated_data):
        instance.name = validated_data.get('name', instance.name)
        instance.code = validated_data.get('code', instance.code)
        instance.save()
        return instance

