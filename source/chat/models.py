from django.db import models
from django.contrib.auth.models import User

# Create your models here.


class Message(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    session = models.CharField(max_length=120)
    message = models.TextField()
    response = models.TextField()
    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return f"{self.user.username}: {self.message}"