# Generated by Django 3.0.5 on 2020-04-21 16:01

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='crud',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('storeName', models.CharField(max_length=120)),
                ('desc', models.TextField()),
                ('status', models.BooleanField(default=False)),
            ],
        ),
    ]
