from rest_framework import routers
from .viewsets import UserViewSet, ProfileViewSet

app_name = 'users'

router = routers.DefaultRouter()

router.register(r'users', UserViewSet)
router.register(r'profiles', ProfileViewSet)
