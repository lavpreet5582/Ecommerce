from django.contrib import admin
from products.models import Product, Categories
# Register your models here.


class ProductAdmin(admin.ModelAdmin):
    readonly_fields = ('created_at', 'updated_at')
    list_display = ('title', 'price', 'category')  # Customize the fields displayed in the list view
    search_fields = ('title', 'price')  # Add search functionality based on these fields
    list_filter = ('category',)  # Add filters to the right sidebar

class CategoryAdmin(admin.ModelAdmin):
    readonly_fields = ('created_at', 'updated_at')
    list_display = ('name', 'code')
    search_fields = ('name', 'code')
    list_filter = ('code',)

admin.site.register(Product, ProductAdmin)
admin.site.register(Categories, CategoryAdmin)