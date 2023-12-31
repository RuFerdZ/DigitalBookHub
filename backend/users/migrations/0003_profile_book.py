# Generated by Django 3.2 on 2023-12-11 05:23

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('books', '0010_auto_20231211_0000'),
        ('users', '0002_profile_avatar'),
    ]

    operations = [
        migrations.AddField(
            model_name='profile',
            name='book',
            field=models.ManyToManyField(blank=True, related_name='book', to='books.Book'),
        ),
    ]
