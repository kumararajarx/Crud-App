from django.db import models

# Create your models here.

from django.db import models

class crud(models.Model):
    storeName = models.CharField(max_length=120)
    desc = models.TextField()
    status = models.BooleanField(default=False)

    def _str_(self):
        return self.storeName

