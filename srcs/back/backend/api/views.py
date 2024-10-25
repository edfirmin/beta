from django.shortcuts import render
from django.contrib.auth.models import User
from rest_framework import generics
from .serializers import UserSerializer, NoteSerializer
from rest_framework.permissions import IsAuthenticated, AllowAny
from .models import Note
# Create your views here.

class CreatUserView(generics.CreateAPIView):
    queryset = User.objects.all()#pour regarder tout les objets de ma classe pour ne pas cree un user qui existe deja
    serializer_class = UserSerializer#dire a la "view" quel genre de donne on a besooin pour faire un nouveau user
    permission_classes = [AllowAny]#determine qui a le droit d'avoir accee a cette "view"

class NoteListCreat(generics.ListCreateAPIView):
    serializer_class = NoteSerializer
    permission_classes = [IsAuthenticated]

    def get_queryset(self):
        user = self.request.user
        return Note.objects.filter(author=user)
    
    def perform_create(self, serializer):
        if serializer.is_valid():
            serializer.save(author=self.request.user)
        else:
            print(serializer.errors)

class NoteDelete(generics.DestroyAPIView):
    serializer_class = NoteSerializer
    permission_classes = [IsAuthenticated]

    def get_queryset(self):#pour etre sur de pouvoir delete que les note qui sont au user en question
        user = self.request.user
        return Note.objects.filter(author=user)
 