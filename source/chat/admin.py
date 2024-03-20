from django.contrib import admin
from .models import Message


class MessageAdmin(admin.ModelAdmin):
    list_display = ("session_id", "user", "message", "created_at")


admin.site.register(Message, MessageAdmin)
