from django.db import models
from django.contrib.auth.models import AbstractUser
from django.conf import settings

media_root = settings.MEDIA_ROOT

class CustomUser(AbstractUser):
    # first_name = models.CharField(max_length=200)
    # last_name = models.CharField(max_length=200)
    # username = models.CharField(max_length=200)
    # password = models.CharField(max_length=200)
    USER_TYPES = (
        ('guest', 'Guest'),
        ('host', 'Host'),  
    )
    user_type = models.CharField(max_length=10, choices=USER_TYPES, null = True, blank = True)
    
    def __str__(self):
        return self.username

def user_directory_path(instance, filename):
    return 'BASE_DIR/media/{0}/{1}'.format(instance.user_id, filename)

class Photos(models.Model):
    USER_TYPES = (
        ('guest', 'Guest'),
        ('host', 'Host'),  
    )
    PHOTO_TYPES = (
        ('profile', 'Profile'),
        ('home', 'Home'),  
    )
    user_id = models.ForeignKey(User, on_delete=models.CASCADE)
    user_type = models.CharField(max_length=10, choices=USER_TYPES)
    photo_type = models.CharField(max_length=20, choices=PHOTO_TYPES)
    photo = models.ImageField(upload_to=user_directory_path)

    def __str__(self):
        return f"{self.user.username}'s {self.photo_type} photo"