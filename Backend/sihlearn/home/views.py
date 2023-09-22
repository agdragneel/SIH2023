

from django.shortcuts import render,HttpResponse,redirect
from django.contrib.auth.models import User
from django.contrib.auth import authenticate,logout,login
from django.contrib import messages
from django.contrib.auth.models import User
from django.contrib.auth import get_user_model
from home.models import Reg,Videos,Progress
from rest_framework.views import APIView
from rest_framework.response import Response
from home.serializers import *
from rest_framework import status,generics 
from rest_framework import permissions

User=get_user_model()
class VideosView(APIView):
    def get(self,request):
        output=[{"cap":output.cap,"vid_link":output.vid_link,"title":output.title,"subject":output.subject,"vclass":output.vclass,"desc":output.desc}
        for output in Videos.objects.all()]
        return Response(output)

    def post(self,request):
        serializer=VideosSerializer(data=request.data)
        if serializer.is_valid(raise_exception=True):
            serializer.save()
            return Response(serializer.data)
            
class ProgressView(APIView):
    def get(self,request):
        output=[{"key":output.key,"username":output.username,"vclass":output.vclass,"percent":output.percent,}
        for output in Progress.objects.all()]
        return Response(output)

    def post(self,request):
        serializer=ProgressSerializer(data=request.data)
        if serializer.is_valid(raise_exception=True):
            serializer.save()
            return Response(serializer.data)
    def put(self, request, *args, **kwargs):
        # Get the 'key' and 'percent' data from the request
        key = request.data.get('key')
        percent = request.data.get('percent')
        vclass=request.data.get('vclass')
        username=request.data.get('username')

        # Check if 'key' and 'percent' are provided in the request
        if not key or percent is None:
            return Response({'message': 'Both "key" and "percent" must be provided'}, status=status.HTTP_400_BAD_REQUEST)

        try:
            # Get the progress record by 'key' (assuming 'key' is unique)
            progress = Progress.objects.get(key=key)
            # Update the 'percent' field
            progress.percent = percent
            progress.save()
            return Response({'message': 'Progress updated successfully'}, status=status.HTTP_200_OK)
        except Progress.DoesNotExist:
            return Response({'message': 'Progress record not found'}, status=status.HTTP_404_NOT_FOUND)


            
class StudExView(APIView):
    def get(self,request):
        output=[{"title":output.title,"subject":output.subject,"vclass":output.vclass,"desc":output.desc,"link":output.link}
        for output in StudEx.objects.all()]
        return Response(output)

    def post(self,request):
        serializer=StudExSerializer(data=request.data)
        if serializer.is_valid(raise_exception=True):
            serializer.save()
            return Response(serializer.data)   


class TestQuestionsAPIView(generics.ListCreateAPIView):
    queryset = TestQuestions.objects.all()
    serializer_class = TestQuestionsSerializer

class TestQuestionsDetailAPIView(generics.RetrieveUpdateDestroyAPIView):
    queryset = TestQuestions.objects.all()
    serializer_class = TestQuestionsSerializer

class StudMatView(APIView):
    def get(self,request):
        output=[{"title":output.title,"subject":output.subject,"vclass":output.vclass,"desc":output.desc,"link":output.link}
        for output in StudMat.objects.all()]
        return Response(output)

    def post(self,request):
        serializer=StudMatSerializer(data=request.data)
        if serializer.is_valid(raise_exception=True):
            serializer.save()
            return Response(serializer.data)    
        
class RegView(APIView):
    def get(self,request):
        output = [{"fname": output.fname,"mname": output.mname,"lname": output.lname,"username": output.username,"gender": output.gender,
        "date": output.date,"email": output.email,"password": output.password,"phn": output.phn,"guard_name": output.guard_name,"guard_phn": output.guard_phn,"guardianrelation": output.guardianrelation,"standard": output.standard,"edu_deets": output.edu_deets,"position": output.position}
        for output in Reg.objects.all()]
        return Response(output)

    def post(self,request):
        serializer=RegSerializer(data=request.data)
        if serializer.is_valid(raise_exception=True):
            serializer.save()
            return Response(serializer.data)


class LoggedInUserView(APIView):
    def get(self, request):
        serializer = UserSerializer(request.user)
        return Response(serializer.data)

    def post(self,request):
        serializer=UserSerializer(data=request.data)
        if serializer.is_valid(raise_exception=True):
            serializer.save()
            return Response(serializer.data)

        
def home(request):
    return render(request,'index.html')

def profile(request):
    return render(request,'index.html')

def materialupload(request):
    return render(request,'index.html')

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
            return redirect('/')
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


def courses(request):
    if request.user.is_authenticated:
        return render(request,'index.html')
    else:
        return redirect('/login')

def faq(request):
    print(request.user)
    return render(request,'index.html')
        

def logout_view(request):
    logout(request)
    return redirect('/')

class FeedbackView(generics.ListCreateAPIView):
    queryset = Feedback.objects.all()
    serializer_class = FeedbackSerializer
    permission_classes = [permissions.IsAuthenticated]  # Requires authentication

    def perform_create(self, serializer):
        # Automatically set the student field to the currently logged-in user
        serializer.save(student=self.request.user)


class CommentAPIView(generics.ListCreateAPIView):
    queryset = Comment.objects.all()
    serializer_class = CommentSerializer

class CompleteView(generics.ListCreateAPIView):
    queryset = Complete.objects.all()
    serializer_class = CompleteSerializer

    def create(self, request, *args, **kwargs):
        serializer = self.get_serializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


