from django.contrib import admin
from .models import GuestProfile

models_list = [GuestProfile]
admin.site.register(models_list)

