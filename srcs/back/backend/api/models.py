from django.db import models
from django.contrib.auth.models import User

# Create your models here.

class Note(models.Model):
    title = models.CharField(max_length=100)
    content = models.TextField()
    created_at = models.DateTimeField(auto_now_add=True)
    author = models.ForeignKey(User, on_delete=models.CASCADE, related_name="notes")#pour savoir a qui est la note (un lien), le "on_delete=models.CASCADE" c'est pour supprimer tout les notes appartenant a cet user quand ce dernier sera supprimer

    def __str__(self):
        return self.title
