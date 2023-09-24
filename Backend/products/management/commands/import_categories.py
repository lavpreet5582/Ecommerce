from django.core.management.base import BaseCommand
from products.models import Categories
import requests


class Command(BaseCommand):
    help = "Helps to import categories"

    def handle(self, *args, **options):
        try:
            data = requests.get('https://fakestoreapi.com/products/categories')
            data = data.json()
            for category in data:
                code = category
                name = category.capitalize()
                Categories.objects.create(name=name, code=code)

            print('categories imported')
        except:
            pass
