from django.contrib import admin

from orders.models import Order, OrderItem

# Register your models here.

class OrderItemInline(admin.TabularInline):
    model = OrderItem

class OrderItemAdmin(admin.ModelAdmin):
    list_display = ('order', 'product', 'quantity', 'amount')
    search_fields = ('order', 'product')
    list_filter = ('product',)


class OrderAdmin(admin.ModelAdmin):
    inlines = [OrderItemInline]

    # def order_items_list(self, obj):
    #     return ", ".join([str(item) for item in obj.order_items.all()])

    # order_items_list.short_description = 'Order Items'
    list_display = ('user', 'status', 'total_amount',)
    search_fields = ('user', 'status')
    list_filter = ('user', 'status')

admin.site.register(OrderItem, OrderItemAdmin)
admin.site.register(Order, OrderAdmin)