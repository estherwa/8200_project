from rest_framework import serializers
from VaccinationApp.models import Patients


class PatientsSerializer(serializers.ModelSerializer):
    class Meta:
        model = Patients
        fields = ('Id',
                  'FirstName',
                  'LastName',
                  'Date',
                  'Address',
                  'City',
                  'ZipCode',
                  'LandLine',
                  'NumberPhone',
                  'Covid',
                  'Diabetes',
                  'CardioVascular',
                  'Allergies',
                  'OtherCondition')
