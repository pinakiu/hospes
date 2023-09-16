# from rest_framework.routers import DefaultRouter
from django.contrib import admin
from hosts import views 
from django.urls import path, include

# router = DefaultRouter()
# router.register(r'config', ConfigViewSet)

urlpatterns = [
    # path('', include(router.urls)),
    path('getAllHosts/', views.getAllHosts),
    path('getHostDetail/<int:id>/', views.getHostDetail),

]