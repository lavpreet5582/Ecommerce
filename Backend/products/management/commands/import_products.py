from django.core.management.base import BaseCommand
from products.models import Product, Categories
import requests


class Command(BaseCommand):
    help = "Helps to import products"

    def handle(self, *args, **options):
        try:
            data = requests.get('https://fakestoreapi.com/products')
            data = data.json()
            for product in data:
                category = Categories.objects.filter(code=product['category']).last()
                data_dict = {
                    "title": product['title'],
                    "price": product['price'],
                    "description": product['description'],
                    "image": product['image'],
                    "category": category
                }
                Product.objects.create(**data_dict)

            print('products imported')
        except Exception as e:
            print(str(e))
