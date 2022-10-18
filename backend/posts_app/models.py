from concurrent.futures.process import _WorkItem
from enum import auto
from random import choices
from unicodedata import category
from django.db import models

class Post(models.Model):
    WORK = 'Work'
    PERSONAL = 'Personal'
    SPORTS = 'Sports'
    CATEGORY = [(WORK, 'Work'), (PERSONAL, 'Personal'), (SPORTS, 'Sports')]
    category = models.CharField(max_length=10, choices=CATEGORY)
    name = models.CharField(max_length=25)
    content = models.TextField()
    created_date = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return f'{self.name}'
