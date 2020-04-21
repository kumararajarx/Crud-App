from rest_framework import serializers
from .models import crud

class crudSerializer(serializers.ModelSerializer):
    class Meta:
        model = crud 
        fields = ('id', 'storeName', 'desc', 'status')
