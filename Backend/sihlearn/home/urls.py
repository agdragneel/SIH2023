from django.contrib import admin
from django.urls import path,include
from home import views
admin.site.site_header = "UMSRA Admin"
admin.site.site_title = "UMSRA Admin Portal"
admin.site.index_title = "Welcome to UMSRA Researcher Portal"
urlpatterns = [
    path("",views.home,name='home'),
    path("login",views.login,name='login'),
    path("signup",views.signup,name='signup'),
    path("faq",views.faq,name='faq'),
    path("course",views.courses,name="course"),
]