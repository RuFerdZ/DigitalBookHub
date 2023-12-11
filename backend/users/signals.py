from django.contrib.auth.models import User
from django.db.models.signals import post_save, pre_save
from django.dispatch import receiver

from .models import Profile


# used to create a new profile automatically once a new user is created
@receiver(post_save, sender=User)
def create_profile(sender, instance, created, **kwargs):
    if created:
        Profile.objects.create(user=instance)
