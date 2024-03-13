from django.db import models
import time

# Create your models here.


class Message(models.Model):
    session = models.CharField(max_length=120)
    sender = models.CharField(max_length=120)
    body = models.TextField()

    def _str_(self):
        return f"{self.sender} | {self.body}"
