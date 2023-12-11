from django.db import models
from django.utils.deconstruct import deconstructible
import uuid


@deconstructible
class GenerateBookImagePath(object):
    """
        This class is used to generate the avatar path for the user
    """

    def __int__(self):
        pass

    def __call__(self, instance, filename):
        extension = filename.split('.')[-1]
        path = f'media/books/{instance.name}.{extension}'
        return path


book_image_path = GenerateBookImagePath()


# enum for category
class Category(models.Model):
    category_name = models.CharField(max_length=50)

    class Meta:
        verbose_name = 'Category'
        verbose_name_plural = 'Categories'


class Author(models.Model):
    # incrementing id is automatically created
    name = models.CharField(max_length=100)
    date_of_birth = models.DateField()

    def __str__(self):
        return self.name


class Book(models.Model):
    id = models.UUIDField(primary_key=True, default=uuid.uuid4, editable=False)
    title = models.CharField(max_length=100)
    author = models.ForeignKey(Author, on_delete=models.CASCADE)
    no_of_pages = models.IntegerField()
    image = models.FileField(upload_to=book_image_path, null=True, blank=True)
    category = models.ForeignKey(Category, on_delete=models.SET_NULL, null=True, blank=True)
    isbn = models.CharField(max_length=13)
    description = models.TextField()
    published_date = models.DateField()
    publisher = models.CharField(max_length=100)
    language = models.CharField(max_length=50)
    url = models.TextField()
    uploaded_date = models.DateTimeField(auto_now_add=True)
    uploader = models.OneToOneField('users.Profile', on_delete=models.SET_NULL, null=True, blank=True,
                                    related_name='uploaded_by')

    def __str__(self):
        return self.title
