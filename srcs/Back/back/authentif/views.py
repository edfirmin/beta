from django.shortcuts import render, redirect
from django.contrib.auth import login, authenticate, logout
from . import forms

# Create your views here.
def login_page(request):
    form = forms.LoginForm()
    message = ''
    if request.method == 'POST':
        form = forms.LoginForm(request.POST)
        if form.is_valid():
            username=form.cleaned_data.get('username')
            password=form.cleaned_data.get('password')
            user = authenticate(request, username=username, password=password)
            if user is not None:
                login(request, user)
                message = 'gg tes co'
            else:
                message = 'pas de po, les logs sont pas bon'
    return render(
        request, 'authentif/login.html', context={'form': form, 'message': message})

def logout_user(request):
    
    logout(request)
    return redirect('login')