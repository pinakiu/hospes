# from rest_framework.routers import DefaultRouter
from django.contrib import admin
from guests import views 
from django.urls import path, include

urlpatterns = [
    # path('', include(router.urls)),
    path('getGuests/', views.getAllGuests),
    path('getGuest/<int:id>/', views.getGuestDetail),

]