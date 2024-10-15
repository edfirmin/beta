from django.urls import path
from . import views


urlpatterns = [
    path('user/', views.ListUserView.as_view(), name='userlog'),
    path('creat/', views.CreatUserView.as_view(), name='creatuser'),
    path('<pk>/edit/', views.UpdateUserView.as_view(), name='edituser'),
]