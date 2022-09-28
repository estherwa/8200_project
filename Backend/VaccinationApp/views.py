from django.shortcuts import render

from django.views.decorators.csrf import csrf_exempt
from rest_framework.parsers import JSONParser
from django.http.response import JsonResponse
from VaccinationApp.models import Patients
from VaccinationApp.serializers import PatientsSerializer


@csrf_exempt
def patientApi(request, id=0):
    if request.method == 'GET':
        patients = Patients.objects.all()
        patient_serializer = PatientsSerializer(patients, many=True)
        return JsonResponse(patient_serializer.data, safe=False)
    elif request.method == 'POST':
        patient_data = JSONParser().parse(request)
        patient_serializer = PatientsSerializer(data=patient_data)
        if patient_serializer.is_valid():
            patient_serializer.save()
            return JsonResponse("Added Successfully", safe=False)
        return JsonResponse("Failed to Add", safe=False)
