from enum import auto
from django.db import models

class Category(models.Model):
    title = models.CharField(max_length=25)

    def __str__(self):
        return f'{self.title}'

class Post(models.Model):
    name = models.CharField(max_length=25)
    content = models.TextField()
    created_date = models.DateTimeField(auto_now_add=True)
    title = models.ForeignKey(Category, on_delete=models.CASCADE, related_name='posts')

    def __str__(self):
        return f'{self.name}'
