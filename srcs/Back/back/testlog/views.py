from django.shortcuts import render

# Create your views here.
from rest_framework.generics import ListAPIView, CreateAPIView, UpdateAPIView
from .models import user
from .serializers import userSerializer

class ListUserView(ListAPIView):
    queryset = user.objects.all()
    serializer_class = userSerializer

class CreatUserView(CreateAPIView):
    queryset = user.objects.all()
    serializer_class = userSerializer

class UpdateUserView(UpdateAPIView):
    queryset = user.objects.all()
    serializer_class = userSerializer