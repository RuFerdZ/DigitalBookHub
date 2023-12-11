import os
from django.db import models
from django.contrib.auth.models import User
from django.utils.deconstruct import deconstructible


@deconstructible
class GenerateAvatarPath(object):
    """
        This class is used to generate the avatar path for the user
    """

    def __int__(self):
        pass

    def __call__(self, instance, filename):
        extension = filename.split('.')[-1]
        path = f'media/avatars/{instance.user.username}.{extension}'
        return os.path.join(path)


avatar_path = GenerateAvatarPath()


class Profile(models.Model):
    id = models.BigAutoField(primary_key=True)
    user = models.OneToOneField(User, on_delete=models.CASCADE)  # delete profile if user is deleted
    avatar = models.FileField(upload_to=avatar_path, null=True, blank=True)

    def __str__(self):
        return f"{self.user.username}"
