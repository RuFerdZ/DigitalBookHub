import os

from django.db import models
from django.utils.deconstruct import deconstructible
from users.models import Profile
import uuid


@deconstructible
class GenerateBookImagePath(object):
    """
        This class is used to generate the book image path and book document path
    """

    def __int__(self, path):
        pass

    def __call__(self, instance, filename):
        extension = filename.split('.')[-1]
        file_path = f'books/{instance.title}-{instance.id}.{extension}'
        return os.path.join(file_path)


book_image_path = GenerateBookImagePath()
book_location_path = GenerateBookImagePath()


# stores different categories of books
class Category(models.Model):
    id = models.BigAutoField(primary_key=True)
    category_name = models.CharField(max_length=50, unique=True)

    # to add custom plural name in admin panel
    class Meta:
        verbose_name = 'Category'
        verbose_name_plural = 'Categories'

    def __str__(self):
        return self.category_name


# stores different authors of books
class Author(models.Model):
    id = models.BigAutoField(primary_key=True)
    name = models.CharField(max_length=100, unique=True)
    created_date = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.name


# stores the books
class Book(models.Model):
    id = models.UUIDField(primary_key=True, default=uuid.uuid4, editable=False)
    title = models.CharField(max_length=100)
    no_of_pages = models.IntegerField()
    image = models.FileField(upload_to=book_image_path, null=True, blank=True)
    isbn = models.CharField(max_length=13)
    description = models.TextField()
    published_date = models.DateField()
    publisher = models.CharField(max_length=100)
    language = models.CharField(max_length=50)
    file = models.FileField(upload_to=book_location_path, null=True, blank=True)
    uploaded_date = models.DateTimeField(auto_now_add=True)
    uploader = models.ForeignKey('users.Profile', on_delete=models.SET_NULL, null=True, blank=True,
                                 related_name='books')
    category = models.ForeignKey('books.Category', on_delete=models.SET_NULL, null=True, blank=True,
                                 related_name='books')
    author = models.ForeignKey('books.Author', on_delete=models.CASCADE, related_name='books')

    def __str__(self):
        return self.title + " - " + self.author.name
