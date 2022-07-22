from django.db import models
from django.utils import timezone

# Create your models here.

GENDER_CHOICES = (
    ('male','Male'),
    ('female', 'Female'),
)

MODE_CHOICES = (
    ('offline', 'Offline'),
    ('online', 'Online'),
)

class PackageInfo(models.Model):
    package = models.CharField(max_length=40, null=True)
    month = models.IntegerField(null=True)

class UserInfo(models.Model):
    userId = models.AutoField(primary_key=True)
    userName = models.CharField(max_length=200)
    userEmail = models.EmailField(max_length=500)
    birthday = models.DateField(null=True)
    contact = models.CharField(max_length=100, null=False)
    gender = models.CharField(max_length=25, choices=GENDER_CHOICES, default='male')
    address = models.CharField(max_length=500)
    city = models.CharField(max_length=100, default='Coimbatore', null=True)
    state = models.CharField(max_length=100, default='Tamil Nadu', null=True)
    pincode = models.CharField(max_length=8, null=False)
    occupation = models.CharField(max_length=50, null=False, default=None)
    workingHours = models.IntegerField()
    bloodGroup = models.CharField(max_length=10, default=None)
    sleepingTime = models.CharField(max_length=20, default=None)
    emergencyContact = models.CharField(max_length=100, null=False, default=None)
    trainingMode = models.CharField(max_length=20, choices=MODE_CHOICES, default='offline')
    isMember = models.BooleanField(default=False, null=True)
    height = models.CharField(max_length=25, null=False)
    weight = models.CharField(max_length=25, null=False)
    attendedGym = models.CharField(max_length=5, default="no")
    BPCheck = models.CharField(max_length=40, null=False, default=None, blank=True)
    question1 = models.CharField(max_length=5, default=None)
    question2 = models.CharField(max_length=5, default=None)
    question3 = models.CharField(max_length=5, default=None)
    smokingHabit = models.CharField(max_length=20, default=None)
    question4 = models.CharField(max_length=5, default=None)
    question5 = models.CharField(max_length=5, default=None)
    physicalActivity = models.CharField(max_length=25, default=None)
    exerciseFrequency = models.CharField(max_length=25, default=None)
    exerciseDuration = models.CharField(max_length=25, default=None)
    question6 = models.CharField(max_length=5, default=None)
    fitnessGoal = models.CharField(max_length=100, default=None) 
    memberId = models.CharField(max_length=20, null=True, unique=True)
    package = models.CharField(max_length=20, null=True)
    startDate = models.DateField(null=True, default=None)
    endDate = models.DateField(null=True)
    fees = models.IntegerField(null=False, default=None)
    BMI = models.CharField(max_length=10, null=True)
    profileImage = models.ImageField(upload_to='static/images_uploaded',null=True, blank=True)
    createdDate = models.DateTimeField(default=timezone.now)
