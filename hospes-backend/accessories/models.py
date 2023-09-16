from django.db import models

# Create your models here.

# class Config(models.Model):
#     config_id = models.AutoField(primary_key=True)
#     config_name = models.CharField(max_length=500, unique=True)

#     def __str__(self):
#         return self.config_name
    

# class ConfigSet(models.Model):
#     config_set_id = models.AutoField(primary_key=True)
#     config_id = models.ForeignKey(Config, on_delete=models.CASCADE)
#     config_value = models.CharField(max_length=500)

#     def __str__(self):
#         return self.config_value

# class Account(models.Model):
#     first_name = models.CharField(max_length=50)
#     last_name = models.CharField(max_length=50)
#     username = models.CharField(max_length=50)
#     password = models.CharField(max_length=50)

# class Photos(models.Model):
#     host_profile = models.ForeignKey(HostProfile, on_delete=models.CASCADE)
#     profile_photo = models.ImageField(max_length=50)
#     home_photo = models.ImageField(max_length=50)