# Generated by Django 4.2.5 on 2023-11-28 12:19

from django.conf import settings
from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    initial = True

    dependencies = [
        migrations.swappable_dependency(settings.AUTH_USER_MODEL),
        ('products', '0002_product_quantity_in_stock_alter_product_image'),
    ]

    operations = [
        migrations.CreateModel(
            name='CartItems',
            fields=[
                ('timestampedmodel_ptr', models.OneToOneField(auto_created=True, on_delete=django.db.models.deletion.CASCADE, parent_link=True, primary_key=True, serialize=False, to='products.timestampedmodel')),
                ('quantity', models.IntegerField()),
                ('total_amount', models.DecimalField(decimal_places=2, max_digits=10)),
                ('products', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='cart_items', to='products.product')),
                ('user', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='cart_items', to=settings.AUTH_USER_MODEL)),
            ],
            options={
                'verbose_name_plural': 'Cart Items',
            },
            bases=('products.timestampedmodel',),
        ),
    ]
