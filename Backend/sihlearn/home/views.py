from django.shortcuts import render,HttpResponse,redirect
from django.contrib.auth.models import User
from django.contrib.auth import authenticate,logout,login
from django.contrib import messages
from django.contrib.auth.models import User
from home.models import Reg



def home(request):
    return render(request,'home.html')

def login_view(request):
    if request.method=="POST":
        username=request.POST.get('username')
        password=request.POST.get('password')
        user=authenticate(username=username,password=password)
        if user is not None:
            #Login done 
            login(request,user)
            messages.success(request, "Logged in successfully.")
            print("Logging in",request.user)
            return render(request,'home.html')
        else:
            #Login Not Done
            messages.error(request, "Log in failed. Incorrect Credentials.")
            return render(request,'login.html')

    return render(request,'login.html')

def signup(request):
    if(request.method=="POST"):
        fname=request.POST.get('first-name')
        mname=request.POST.get('middle-name')
        lname=request.POST.get('last-name')
        date=request.POST.get('dob')
        username=request.POST.get('username')
        gender=request.POST.get('gender')
        email=request.POST.get('email')
        passw=request.POST.get('password')
        passw1=request.POST.get('confirm-password')
        phn=request.POST.get('phone-number')
        gname=request.POST.get('guardian-name')
        gphn=request.POST.get('guardian-phone')
        rln=request.POST.get('relationship')
        std=request.POST.get('class')
        edudeets=request.POST.get('previous-education')
        mynewuser=User.objects.create_user(username,email,passw)  #User Creation
        mynewuser.save()  #UserSave
        userdata=Reg(fname=fname,mname=mname,lname=lname,username=username,gender=gender,date=date,email=email,password=passw,guard_name=gname,guardianrelation=rln,standard=std,edu_deets=edudeets,guard_phn=gphn,phn=phn)
        userdata.save()
        return render(request,'home.html')

    return render(request,'Reg.html')
# Create your views here.

def faq(request):
    print(request.user)
    return render(request,'faq.html')
    

def courses(request):
    if request.user.is_authenticated:
        return render(request,'index.html')
    else:
        return redirect('/login')
        

def logout_view(request):
    logout(request)
    return render(request,'home.html')