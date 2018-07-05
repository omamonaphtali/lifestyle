from django.conf.urls import url
from .views import (product_list,
                    product_create,
                    product_detail,
                    product_category,
                    product_update,
                    index_view,
                    contacts,
                    gallery)

app_name = 'webapp'
urlpatterns = [
    url(r'', index_view, name='home'),
    url(r'add/', product_create, name='add'),
    url(r'products/', product_list, name='products'),
    url(r'(?P<cat>)/$', product_category, name='category'),
    url(r'(?P<pk>\d+)/$', product_detail, name='detail'),
    url(r'(?P<pk>\d+)/edit/$', product_update, name='edit'),
    url(r'contacts/', contacts, name='contacts'),
    url(r'gallery/', gallery, name='gallery'),
]
