# Generated by Django 3.2 on 2023-12-11 08:32

import books.models
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('books', '0016_alter_book_image'),
    ]

    operations = [
        migrations.AlterField(
            model_name='book',
            name='file',
            field=models.FileField(blank=True, max_length=1000, null=True, upload_to=books.models.GenerateBookImagePath()),
        ),
    ]
