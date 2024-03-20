from django.shortcuts import render, redirect
from django.http import JsonResponse

from django.contrib import auth
from django.contrib.auth.models import User
from django.utils import timezone
from rest_framework import viewsets

from .models import Message
from .serializers import MessageSerializer


class MessageViewSet(viewsets.ModelViewSet):
    serializer_class = MessageSerializer

    def get_queryset(self, session: str = None):
        # filter queryset based on logged in user
        return Message.objects.filter(session_id=session)

    def perform_create(self, serializer):
        # ensure current user is correctly populated on new objects
        serializer.save(session_id=self.request.session)


# Create your views here.
def chatbot(request):
    chats = Message.objects.filter(user=request.user)

    if request.method == "POST":
        # message = request.POST.get("message")
        # response = ask_openai(message)

        chat = Message(
            user=request.user,
            message=message,
            response=response,
            created_at=timezone.now(),
        )
        chat.save()
        return JsonResponse({"message": message, "response": response})
    return render(request, "chatbot.html", {"chats": chats})


def login(request):
    if request.method == "POST":
        username = request.POST["username"]
        password = request.POST["password"]
        user = auth.authenticate(request, username=username, password=password)
        if user is not None:
            auth.login(request, user)
            return redirect("chatbot")
        else:
            error_message = "Invalid username or password"
            return render(request, "login.html", {"error_message": error_message})
    else:
        return render(request, "login.html")


def register(request):
    if request.method == "POST":
        username = request.POST["username"]
        email = request.POST["email"]
        password1 = request.POST["password1"]
        password2 = request.POST["password2"]

        if password1 == password2:
            try:
                user = User.objects.create_user(username, email, password1)
                user.save()
                auth.login(request, user)
                return redirect("chatbot")
            except:
                error_message = "Error creating account"
                return render(
                    request, "register.html", {"error_message": error_message}
                )
        else:
            error_message = "Password dont match"
            return render(request, "register.html", {"error_message": error_message})
    return render(request, "register.html")


def logout(request):
    auth.logout(request)
    return redirect("login")
