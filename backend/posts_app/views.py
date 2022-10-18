from rest_framework import viewsets
from rest_framework import filters
from .models import *
from .serializers import *

class PostViewSet(viewsets.ModelViewSet):
    search_fields = ['category', 'name']
    filter_backends = (filters.SearchFilter,)
    queryset = Post.objects.all()
    serializer_class = PostSerializer
