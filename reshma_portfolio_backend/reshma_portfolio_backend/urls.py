from django.urls import path
from . import views

urlpatterns = [
    path("ping/", views.test_ping),
    path("send-user-message/", views.send_user_message)
]
