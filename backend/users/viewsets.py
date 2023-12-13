from django.contrib.auth.models import User
from rest_framework import viewsets, mixins, filters
from django_filters.rest_framework import DjangoFilterBackend

from .serializers import UserSerializer, ProfileSerializer
from .permissions import IsUserOwnerOrReadOnly, IsProfileOwnerOrReadOnly
from .models import Profile


# model view set provides CRUD functionality for the User model by default
class UserViewSet(viewsets.ModelViewSet):
    queryset = User.objects.all()
    serializer_class = UserSerializer
    permission_classes = [IsUserOwnerOrReadOnly]

    def get_queryset(self):
        qs = super(UserViewSet, self).get_queryset()
        username = self.request.query_params.get('search')
        if username:
            qs = qs.filter(username=username)
        return qs


class ProfileViewSet(viewsets.GenericViewSet, mixins.RetrieveModelMixin, mixins.UpdateModelMixin):
    queryset = Profile.objects.all()
    serializer_class = ProfileSerializer
    permission_classes = [IsProfileOwnerOrReadOnly]


