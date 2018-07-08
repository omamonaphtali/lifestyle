from django.contrib import admin

# Register your models here.
from .models import Product, Tag, Review, Photo

admin.site.register(Product)
admin.site.register(Tag)
admin.site.register(Review)
admin.site.register(Photo)
