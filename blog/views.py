from blog.models import Autor
from rest_framework import viewsets
from serializers import UserSerializer

class UserViewSet(viewsets.ModelViewSet):
	queryset = Autor.objects.all()
	serializer_class = UserSerializer
