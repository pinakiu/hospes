from django.db import models
# from django.contrib.auth.models import AbstractUser
from django.conf import settings

class Config(models.Model):
    config_id = models.AutoField(primary_key=True)
    config_name = models.CharField(max_length=5000, unique=True)

    def __str__(self):
        return self.config_name


class ConfigSet(models.Model):
    config_set_id = models.AutoField(primary_key=True)
    config_id = models.ForeignKey(Config, on_delete=models.CASCADE)
    config_value = models.CharField(max_length=5000)

    def __str__(self):
        return f"{self.config_id.config_name} {self.config_value}"