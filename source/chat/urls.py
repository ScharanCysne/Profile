from django.urls import path
from rest_framework import routers

from . import views

router = routers.DefaultRouter()
router.register("messages", views.MessageViewSet, basename="Message")

urlpatterns = [
    path("", views.chatbot, name="chatbot"),
    path("login", views.login, name="login"),
    path("register", views.register, name="register"),
    path("logout", views.logout, name="logout"),
    *router.urls,
]
