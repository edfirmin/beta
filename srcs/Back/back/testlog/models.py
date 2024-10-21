from django.db import models

# Create your models here.

# class Default(models.Model):
#     img = models.URLField("https://slang.net/img/slang/lg/pp_4215.jpg")
class User(models.Model):
    login = models.CharField(max_length=20, unique=True)
    pseudo = models.CharField(max_length=20, unique=True)
    onligne = models.BooleanField(default=False)
    img = models.URLField(default="https://slang.net/img/slang/lg/pp_4215.jpg")
    #password = models.
