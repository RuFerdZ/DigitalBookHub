from rest_framework import routers
from .viewsets import BookViewSet, AuthorViewSet, CategoryViewSet

app_name = 'books'

router = routers.DefaultRouter()

# register book, author and category routes
router.register(r'book', BookViewSet, basename='book')
router.register(r'author', AuthorViewSet, basename='author')
router.register(r'category', CategoryViewSet, basename='category')
