from django.shortcuts import render
from rest_framework import viewsets
from .serializers import crudSerializer
from .models import crud
# Create your views here.

class CrudView(viewsets.ModelViewSet):
    serializer_class = crudSerializer
    queryset = crud.objects.all()