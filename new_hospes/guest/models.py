from django.db import models
from PIL import Image
from django.conf import settings

media_root = settings.MEDIA_ROOT
# from django.contrib.auth import get_user_model

# User = get_user_model()

class GuestProfile(models.Model):
    # guest_account = models.OneToOneField(User, on_delete=models.CASCADE)
    profile_picture = models.ImageField(null=True, blank=True, upload_to="media_root/guests/")
    property_picture = models.ImageField(null=True, blank=True, upload_to="media_root/guests/")

    age = models.IntegerField(null=True, blank=True)
    gender = models.IntegerField(null=True, blank=True)
    location = models.IntegerField(null=True, blank=True)
    origin_country = models.IntegerField(null=True, blank=True)
    language = models.IntegerField(null=True, blank=True)
    dietary_restrictions = models.IntegerField(null=True, blank=True)

    budget = models.FloatField(null=True, blank=True)
    target_dates = models.JSONField(default=dict, null=True, blank=True)
    num_guests = models.IntegerField(null=True, blank=True)
    description = models.CharField(max_length=2000)
    rating = models.IntegerField(null=True, blank=True)

