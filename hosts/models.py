from django.db import models

class Config(models.Model):
    config_id = models.AutoField(primary_key=True)
    config_name = models.CharField(max_length=500, unique=True)

    def __str__(self):
        return self.config_name
    

class ConfigSet(models.Model):
    config_set_id = models.AutoField(primary_key=True)
    config_id = models.ForeignKey(Config, on_delete=models.CASCADE)
    config_value = models.CharField(max_length=500)

    def __str__(self):
        return self.config_value

# class Account(models.Model):
#     first_name = models.CharField(max_length=50)
#     last_name = models.CharField(max_length=50)
#     username = models.CharField(max_length=50)
#     password = models.CharField(max_length=50)

# class HostProfile(models.Model):
#     host_account = models.OneToOneField(HostAccount, on_delete=models.CASCADE)
#     location = models.IntegerField(null=True, blank=True)
#     origin_country = models.IntegerField(null=True, blank=True)
#     language = models.IntegerField(null=True, blank=True)
#     dietary_restrictions = models.CharField(max_length=50)
#     price = models.FloatField(null=True, blank=True)
#     profile_photo = models.ImageField(max_length=50)
#     home_photo_id = models.IntegerField(null=True, blank=True)
#     availability = models.JSONField(default=dict, null=True, blank=True)
#     capacity = models.IntegerField(null=True, blank=True)
#     description = models.CharField(max_length=50)

# class Photos(models.Model):
#     host_profile = models.ForeignKey(HostProfile, on_delete=models.CASCADE)
#     photo = models.ImageField(max_length=50)



