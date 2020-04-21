from django.contrib import admin

# Register your models here.

from django.contrib import admin
from.models import crud

class crudAdmin(admin.ModelAdmin):
    list_display = ('storeName', 'desc', 'status')


admin.site.register(crud, crudAdmin)