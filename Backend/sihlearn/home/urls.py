from django.contrib import admin
from django.urls import path,include
from home import views
from home.views import RegView
admin.site.site_header = "UMSRA Admin"
admin.site.site_title = "UMSRA Admin Portal"
admin.site.index_title = "Welcome to UMSRA Researcher Portal"
urlpatterns = [
    path("",views.home,name='home'),
    path('rest/',RegView.as_view(),name="anything"),
    path("login",views.login_view,name='login_view'),
    path("signup",views.signup,name='signup'),
    path("faq",views.faq,name='faq'),
    path("course",views.courses,name="course"),
    path("logout",views.logout_view,name="logout"),
    path('currentuser/', views.LoggedInUserView.as_view(), name='currentuser'),
]