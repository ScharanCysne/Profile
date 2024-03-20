from django.db import models


class Message(models.Model):
    user = models.CharField(max_length=120)
    session_id = models.CharField(max_length=120)
    message = models.TextField()
    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return f"{self.user}: {self.message}"
