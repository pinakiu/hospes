from django.contrib import admin
from django.urls import path, include

urlpatterns = [
    path('admin/', admin.site.urls),
    path('', include('accessories.urls')),
    path('hosts/', include('hosts.urls')),
    path('guests/', include('guests.urls')),
]
