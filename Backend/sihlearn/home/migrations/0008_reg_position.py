# Generated by Django 4.2.5 on 2023-09-17 15:47

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ("home", "0007_studex_studmat"),
    ]

    operations = [
        migrations.AddField(
            model_name="reg",
            name="position",
            field=models.CharField(default="student", max_length=100),
        ),
    ]