from django.urls import re_path as url

from VaccinationApp import views

urlpatterns = [
    url(r'^patient$', views.patientApi),
    url(r'^patient/(/[0-9]+)$', views.patientApi),
]
