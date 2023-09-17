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

    def __str__(self):
        return ((self.username)+(self.lname))
    
class video(models.Model):
    cap=models.CharField(max_length=100)
    vid=models.FileField(("videos/%y"), upload_to=None, max_length=100)
    def __str__(self):
        return self.caption

    #all the best 
    #chup chudirbhai