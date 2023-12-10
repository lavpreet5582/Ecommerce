from django.contrib import admin

from cart.models import CartItems

# Register your models here.


class CartItemAdmin(admin.ModelAdmin):
    list_display = ('user', 'products', 'quantity', 'total_amount')
    search_fields = ('user', 'products')
    list_filter = ('products',)

admin.site.register(CartItems, CartItemAdmin)