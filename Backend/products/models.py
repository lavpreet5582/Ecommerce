from django.db import models

# Create your models here.

class TimeStampedModel(models.Model):
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

class Product(TimeStampedModel):
    title = models.CharField(max_length=255, unique=True, db_index=True)
    price = models.IntegerField()
    description = models.TextField()
    category = models.ForeignKey('Categories', on_delete=models.CASCADE, related_name='products')
    image = models.ImageField(upload_to='products/static/images', blank=True, null=True, default=None)
    quantity_in_stock = models.IntegerField(default=0)

    def __str__(self):
        return self.title

    class Meta:
        verbose_name_plural = 'Products'

class Categories(TimeStampedModel):
    name = models.CharField(max_length=200)
    code = models.CharField(max_length=200, unique=True)

    def __str__(self):
        return self.name

    class Meta:
        verbose_name_plural = 'Categories'
