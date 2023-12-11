from rest_framework import viewsets, mixins, filters
from django_filters.rest_framework import DjangoFilterBackend

from .serializers import CategorySerializer, AuthorSerializer, BookSerializer
from .permissions import IsBookUploader
from .models import Category, Author, Book


# model view set provides CRUD functionality for the User model by default
class CategoryViewSet(viewsets.GenericViewSet, mixins.RetrieveModelMixin):
    queryset = Category.objects.all()
    serializer_class = CategorySerializer


class AuthorViewSet(viewsets.GenericViewSet, mixins.RetrieveModelMixin):
    queryset = Author.objects.all()
    serializer_class = AuthorSerializer


class BookViewSet(viewsets.ModelViewSet):
    queryset = Book.objects.all()
    serializer_class = BookSerializer
    permission_classes = [IsBookUploader]
    filter_backends = [filters.SearchFilter, DjangoFilterBackend]
    search_fields = ['title', 'isbn', 'publisher', 'language']
    filterset_fields = ['category', 'author', 'uploader']




