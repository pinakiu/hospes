# from rest_framework.routers import DefaultRouter
from django.contrib import admin
from hosts import views 
from django.urls import path, include

urlpatterns = [
    path('getHosts/', views.getAllHosts),
    path('getHosts/<int:id>/', views.getHostDetail),

]