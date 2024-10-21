from django.shortcuts import render
from .models import User
# Create your views here.
def index(request):
    users = User.objects.all()
    # format_users = ["<li>{}</li>".format(usser.pseudo) for usser in users]
    # message = """<ul>{}</ul>""".format("\n".join(format_users))
    # if not users:
    #     message = "pas de personne trouver"
    if request.method == 'POST':
        login = request.POST.get('login')
        pseudo = request.POST.get('pseudo')
        img = request.POST.get('img')
        usr = User.objects.filter(login=login)
        if not usr.exists():
            if img == "":
                usr = User.objects.create(login=login, pseudo=pseudo)
            else:
                usr = User.objects.create(login=login, pseudo=pseudo, img=img)
    contexte ={'utils' : users}
    return render(request, 'testlog/index.html', contexte)