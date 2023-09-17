from django.contrib import admin
from django.urls import path,include
from home import views
from home.views import *
admin.site.site_header = "UMSRA Admin"
admin.site.site_title = "UMSRA Admin Portal"
admin.site.index_title = "Welcome to UMSRA Researcher Portal"
urlpatterns = [
    path("lkg-science-course",views.courses,name='lkg-science'),
    path("lkg-english-course",views.courses,name='lkg-english'),
    path("i-math-course",views.courses,name='i-math'),
    path("i-science-course",views.courses,name='i-science'),
    path("i-social-studies-course",views.courses,name='i-social-studies'),
    path("ii-math-course",views.courses,name='ii-math'),
    path("ii-science-course",views.courses,name='ii-science'),
    path("ii-social-studies-course",views.courses,name='ii-social-studies'),
    path("iii-math-course",views.courses,name='iii-math'),
    path("iii-science-course",views.courses,name='iii-science'),
    path("iii-social-studies-course",views.courses,name='iii-social-studies'),
    path("iii-history",views.courses,name='iii-history'),
    path("",views.home,name='home'),
    path('rest/',RegView.as_view(),name="anything"),
    path("login",views.login_view,name='login_view'),
    path("signup",views.signup,name='signup'),
    path("faq",views.faq,name='faq'),
    path("course",views.courses,name="course"),
    path("logout",views.logout_view,name="logout"),
    path('currentuser/', views.LoggedInUserView.as_view(), name='currentuser'),
    path('videoapi/',VideosView.as_view(),name="Vedio"),
    path('studmatapi/',StudMatView.as_view(),name="mats"),
    path('studexapi/',StudExView.as_view(),name="exerc"),
    path("lkg-math-course",views.courses,name='lkgmath'),
    path("v-history-course",views.courses,name='V-HISTORY'),
    path("v-social-studies-course",views.courses,name='V-SOCIAL'),
    path("v-math-course",views.courses,name='V-math'),
    path("v-science-course",views.courses,name='V-science'),
    path("iv-history-course",views.courses,name='IV-HISTORY'),
    path("iv-social-studies-course",views.courses,name='IV-SOCIAL'),
    path("iv-math-course",views.courses,name='IV-math'),
    path("iv-science-course",views.courses,name='IV-science'),
    path("profile",views.profile,name='profile'),
    

    
]