# from django.db import models
# # from django.contrib.auth import get_user_model

# # User = get_user_model()

# class GuestProfile(models.Model):
#     # guest_account = models.OneToOneField(User, on_delete=models.CASCADE)
#     LOCATION_TYPES = (
#         ('USA', 'USA'),
#         ('Canada', 'Canada'),
#         ('Mexico', 'Mexico'),
#         ('South America', 'South America'),
#         ('Europe', 'Europe'),
#         ('Africa', 'Africa'),
#         ('Asia', 'Asia'),
#         ('Australia', 'Australia'),
#         ('Other', 'Other')
#     )
#     location = models.CharField(choices='LOCATION_TYPES', max_length=100, null=True, blank=True)
#     ORIGIN_COUNTRIES = (
#         ('India', 'India'),
#         ('China', 'China'),
#         ('Japan', 'Japan'),
#         ('Turkey', 'Turkey'),
#         ('France', 'France'),
#         ('Turkmenistan', 'Turkmenistan'),
#     )
#     origin_country = models.CharField(choices='ORIGIN_COUNTRIES', null=True, blank=True)
#     # LANGUAGES = (
#     #     ('English', 'English'),
#     #     ('Hindi', 'Hindi'),
#     #     ('Mandarin', 'Mandarin'),
#     #     ('Russian', 'Russian'),
#     #     ('French', 'French'),
#     # )
#     language = models.CharField(max_length=50, null=True, blank=True)
#     dietary_restrictions = models.CharField(max_length=50)
#     target_price = models.FloatField(null=True, blank=True)
#     profile_photo = models.ImageField(max_length=50)
#     target_dates = models.JSONField(default=dict, null=True, blank=True)
#     description = models.CharField(max_length=2000)

