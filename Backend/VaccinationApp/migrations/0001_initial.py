# Generated by Django 4.0.4 on 2022-05-30 11:27

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Patients',
            fields=[
                ('Id', models.AutoField(primary_key=True, serialize=False)),
                ('FirstName', models.CharField(max_length=500)),
                ('LastName', models.CharField(max_length=500)),
                ('Date', models.DateField()),
                ('Address', models.CharField(max_length=500)),
                ('City', models.CharField(max_length=500)),
                ('ZipCode', models.CharField(max_length=500)),
                ('LandLine', models.IntegerField()),
                ('NumberPhone', models.IntegerField()),
                ('Covid', models.BooleanField()),
                ('Diabetes', models.BooleanField()),
                ('CardioVascular', models.BooleanField()),
                ('Allergies', models.BooleanField()),
                ('OtherCondition', models.BooleanField()),
            ],
        ),
    ]
