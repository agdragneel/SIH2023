from django.db import models
from phonenumber_field.modelfields import PhoneNumberField
# Create your models here.
class Reg(models.Model):
    fname=models.CharField(max_length=100, unique=True)
    mname=models.CharField(max_length=100)
    lname=models.CharField(max_length=100)
    username=models.CharField(max_length=100)
    gender=models.CharField(max_length=100)
    date=models.DateField()
    email=models.EmailField()
    password = models.CharField(max_length=20)
    
    phn= models.CharField(max_length=10)
    guard_name=models.CharField(max_length=100)
    guard_phn= models.CharField(max_length=10)
    guardianrelation=models.CharField(max_length=100)
    standard=models.CharField(max_length=20)
    edu_deets=models.TextField()
    position=models.CharField(max_length=100,default="student")

    def __str__(self):
        return ((self.username)+(self.lname))
    

class Videos(models.Model):
    cap = models.CharField(max_length=100)
    vid_link = models.URLField(max_length=200,default="https://youtu.be/0YHyALlmB8A?si=WRw2gLnPTm8acMEO")
    title=models.CharField(max_length=100,default=" ")
    subject=models.CharField(max_length=100,default=" ")
    vclass=models.CharField(max_length=100,default=" ")
    desc=models.TextField(default=" ")

    def __str__(self):
        return self.cap


class StudMat(models.Model):
    title=models.CharField(max_length=100,default="")
    subject=models.CharField(max_length=100,default=" ")
    vclass=models.CharField(max_length=100,default=" ")
    desc=models.TextField(default="")
    link=models.CharField(default="https://www.google.com/",max_length=200)
    def __str__(self):
        return self.title

class StudEx(models.Model):
    title=models.CharField(max_length=100,default="")
    subject=models.CharField(max_length=100,default=" ")
    vclass=models.CharField(max_length=100,default=" ")
    desc=models.TextField(default="")
    link=models.CharField(default="https://www.google.com/",max_length=200)
    def __str__(self):
        return self.title

class Progress(models.Model):
    key = models.CharField(max_length=100)
    percent = models.PositiveIntegerField(default=0)
    def __str__(self):
        return self.key