# Generated by Django 4.2.5 on 2023-09-16 07:08

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ("home", "0001_initial"),
    ]

    operations = [
        migrations.AlterField(
            model_name="reg", name="guard_phn", field=models.CharField(max_length=10),
        ),
        migrations.AlterField(
            model_name="reg", name="phn", field=models.CharField(max_length=10),
        ),
    ]