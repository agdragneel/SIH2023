from rest_framework import serializers
from home.models import *
from django.contrib.auth import get_user_model

class RegSerializer(serializers.ModelSerializer):
    class Meta:
        model = Reg
        fields = '__all__'
class ProgressSerializer(serializers.ModelSerializer):
    class Meta:
        model = Progress
        fields = '__all__'

User=get_user_model()

class UserSerializer(serializers.ModelSerializer):
        class Meta:
            model = User
            fields=('id','username')

class VideosSerializer(serializers.ModelSerializer):
        class Meta:
            model=Videos
            fields=('cap','vid_link','title','subject','vclass','desc')

class StudMatSerializer(serializers.ModelSerializer):
        class Meta:
            model=StudMat
            fields=('title','subject','vclass','desc','link')

class StudExSerializer(serializers.ModelSerializer):
        class Meta:
            model=StudEx
            fields=('title','subject','vclass','desc','link')

class TestQuestionsSerializer(serializers.ModelSerializer):
        class Meta:
            model=TestQuestions
            fields='__all__'
class FeedbackSerializer(serializers.ModelSerializer):
         class Meta:
            model = Feedback
            fields = ('id', 'student', 'text', 'created_at')

class TestQuestionsSerializer(serializers.ModelSerializer):
        class Meta:
            model = TestQuestions
            fields='__all__'

class CommentSerializer(serializers.ModelSerializer):
        class Meta:
            model=Comment
            fields='__all__'
