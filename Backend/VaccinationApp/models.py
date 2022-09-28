from django.db import models


# Create your models here.

class Patients(models.Model):
    Id = models.AutoField(primary_key=True)
    FirstName = models.CharField(blank=False, max_length=500)
    LastName = models.CharField(blank=False, max_length=500)
    Date = models.DateField(blank=False)
    Address = models.CharField(blank=False, max_length=500)
    City = models.CharField(blank=False, max_length=500)
    ZipCode = models.CharField(max_length=500)
    LandLine = models.IntegerField(blank=False)
    NumberPhone = models.IntegerField(blank=False)
    Covid = models.BooleanField(blank=False)
    Diabetes = models.BooleanField(blank=False)
    CardioVascular = models.BooleanField(blank=False)
    Allergies = models.BooleanField(blank=False)
    OtherCondition = models.BooleanField(blank=False)




