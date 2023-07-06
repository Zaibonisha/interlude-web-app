from django.contrib import admin
from django.urls import path, include
from rest_framework.authtoken.views import obtain_auth_token
from interlude_app.views import registration_view,logout_view,getuserinfo_view

urlpatterns = [
    path("login/", obtain_auth_token, name='login'),
    path("logout/", logout_view, name='logout'),
    path("register/", registration_view, name='register'),
    path("getuserinfo/", getuserinfo_view, name='get-user-info'),
]