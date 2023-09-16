from django.contrib import admin
from .models import HostProfile

models_list = [HostProfile]
admin.site.register(models_list)

