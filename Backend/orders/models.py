from django.db import models

from products.models import TimeStampedModel

# Create your models here.


class Order(TimeStampedModel):
    ORDER_CHOICES = (
        ('1', 'Pending'),
        ('2', 'Processing'),
        ('3', 'Refunded'),
        ('4', 'Returned'),
        ('5', 'Shipped'),
        ('6', 'Cancelled'),
    )
    user = models.ForeignKey(
        'accounts.User', on_delete=models.CASCADE, related_name='orders')
    order_items = models.ManyToManyField(
        'products.Product', through='OrderItem')
    status = models.CharField(max_length=1, choices=ORDER_CHOICES, default='1')
    total_amount = models.DecimalField(max_digits=10, decimal_places=2)

    def __str__(self):
        return self.user.get_username()

    class Meta:
        verbose_name_plural = 'Orders'


class OrderItem(models.Model):
    order = models.ForeignKey(
        'orders.Order', on_delete=models.CASCADE, related_name='order_item')
    product = models.ForeignKey(
        'products.Product', on_delete=models.CASCADE, related_name='order_item')
    quantity = models.IntegerField()
    amount = models.DecimalField(max_digits=10, decimal_places=2)

    def __str__(self):
        return self.product.title

    class Meta:
        verbose_name_plural = 'Order Items'
