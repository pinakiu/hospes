from django.urls import path
from .views import CreateUserView

from . import views
urlpatterns = [
    path('home/', views.HomeView.as_view(), name ='home'),
    path('logout/', views.LogoutView.as_view(), name ='logout'),
    path('api/create-user/', CreateUserView.as_view(), name='create-user'),
    path('login', views.LoginView.as_view(), name='login'),
]