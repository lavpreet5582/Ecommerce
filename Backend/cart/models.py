from django.db import models
from products.models import TimeStampedModel
# Create your models here.


class CartItems(TimeStampedModel):
    user = models.ForeignKey(
        'accounts.User', on_delete=models.CASCADE, related_name='cart_items')
    products = models.ForeignKey(
        'products.Product', on_delete=models.CASCADE, related_name='cart_items')
    quantity = models.IntegerField()
    total_amount = models.DecimalField(max_digits=10, decimal_places=2, default=0)

    def save(self, *args, **kwargs):
        # Calculate total amount based on current quantity and unit price
        self.total_amount = self.quantity * self.products.price
        super().save(*args, **kwargs)

    def __str__(self):
        return self.products.title

    class Meta:
        verbose_name_plural = 'Cart Items'
