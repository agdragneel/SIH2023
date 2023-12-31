# Generated by Django 4.2.5 on 2023-09-21 02:12

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ("home", "0009_progress"),
    ]

    operations = [
        migrations.CreateModel(
            name="TestQuestions",
            fields=[
                (
                    "id",
                    models.BigAutoField(
                        auto_created=True,
                        primary_key=True,
                        serialize=False,
                        verbose_name="ID",
                    ),
                ),
                ("testname", models.CharField(max_length=255)),
                ("subject", models.CharField(default="", max_length=100)),
                ("vclass", models.CharField(default="", max_length=100)),
                ("quesdesc", models.TextField(default="")),
                ("option1", models.TextField(default="")),
                ("option2", models.TextField(default="")),
                ("option3", models.TextField(default="")),
                ("option4", models.TextField(default="")),
                ("correctoption", models.IntegerField(default=1)),
            ],
        ),
    ]
