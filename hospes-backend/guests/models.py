from django.db import models

# Create your models here.
# class GuestProfile(models.Model):
#     guest_account = models.OneToOneField(GuestAccount, on_delete=models.CASCADE)
#     location = models.IntegerField(null=True, blank=True)
#     origin_country = models.IntegerField(null=True, blank=True)
#     language = models.IntegerField(null=True, blank=True)
#     dietary_restrictions = models.CharField(max_length=50)
#     target_price = models.FloatField(null=True, blank=True)
#     profile_photo = models.ImageField(max_length=50)
#     target_dates = models.JSONField(default=dict, null=True, blank=True)
#     description = models.CharField(max_length=50)
