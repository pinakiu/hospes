from django.contrib import admin
from accessories import views 
from django.urls import path, include

urlpatterns = [
    path('getConfig/', views.getConfig),
    path('getConfig/<int:id>/', views.getConfigDetail),
]