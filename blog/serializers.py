from rest_framework import serializers
from blog.models import Autor


class UserSerializer(serializers.HyperlinkedModelSerializer):
	class Meta:
		model = Autor
		fields = ('url', 'username', 'email', 'data_nasc', 'descricao', 'avatar')


