# Generated by Django 3.2 on 2023-12-11 03:19

import books.models
from django.db import migrations, models
import django.db.models.deletion
import uuid


class Migration(migrations.Migration):

    initial = True

    dependencies = [
        ('users', '0002_profile_avatar'),
    ]

    operations = [
        migrations.CreateModel(
            name='Author',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=100)),
                ('date_of_birth', models.DateField()),
            ],
        ),
        migrations.CreateModel(
            name='Book',
            fields=[
                ('id', models.UUIDField(default=uuid.uuid4, editable=False, primary_key=True, serialize=False)),
                ('title', models.CharField(max_length=100)),
                ('no_of_pages', models.IntegerField()),
                ('image', models.FileField(blank=True, null=True, upload_to=books.models.GenerateBookImagePath())),
                ('category', models.CharField(choices=[('Fiction', 'Fiction'), ('Non-Fiction', 'Non Fiction'), ('Science', 'Science'), ('History', 'History'), ('Biography', 'Biography'), ('Drama', 'Drama'), ('Mystery', 'Mystery'), ('Romance', 'Romance'), ('Horror', 'Horror'), ('Comedy', 'Comedy')], default='Fiction', max_length=50)),
                ('isbn', models.CharField(max_length=13)),
                ('description', models.TextField()),
                ('published_date', models.DateField()),
                ('publisher', models.CharField(max_length=100)),
                ('language', models.CharField(max_length=50)),
                ('url', models.TextField()),
                ('uploaded_date', models.DateTimeField(auto_now_add=True)),
                ('author', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='books.author')),
                ('uploader', models.OneToOneField(blank=True, null=True, on_delete=django.db.models.deletion.SET_NULL, related_name='uploaded_by', to='users.profile')),
            ],
        ),
    ]