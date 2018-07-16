from django.contrib import admin
from django.urls import path
from .views import (product_list,
                    product_create,
                    product_detail,
                    product_category,
                    product_update,
                    index_view,
                    contacts,
                    image_upload,
                    checkout,
                    gallery)

app_name = 'webapp'
urlpatterns = [
    path('admin/', admin.site.urls),

    path(r'', index_view, name='home'),

    path(r'add/', product_create, name='add'),
    path(r'products/', product_list, name='products'),
    path(r'products/checkout.html', checkout, name='checkout'),
    # path(r'(?P<cat>)/$', product_category, name='category'),
    path(r'products/?P<cat>/', product_category, name='category'),
    path(r'products/<int:pk>/', product_detail, name='detail'),
    path(r'products/<int:pk>/edit/', product_update, name='edit'),

    path(r'contacts/', contacts, name='contacts'),

    path(r'gallery/', gallery, name='gallery'),
    path(r'upload/', image_upload, name='upload'),
]
