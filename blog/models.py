from __future__ import unicode_literals

from django.db import models
from django.contrib.auth.models import User


class Autor(User):
	avatar = models.ImageField(blank=True, null=True)
	descricao = models.TextField()
	data_nasc = models.DateField()

	def __unicode__(self):
		return self.username

