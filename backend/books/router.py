from rest_framework import routers
from .viewsets import BookViewSet

app_name = 'books'

router = routers.DefaultRouter()

router.register(r'', BookViewSet)