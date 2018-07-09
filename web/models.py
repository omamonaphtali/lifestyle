from django.urls import reverse
from django.db import models
# from django.db.models import lookups
from django.db.models.signals import pre_save

from django.utils.text import slugify

# Create your models here.


def upload_location(instance, filename):
    return "%s/%s" % (instance.id, filename)


class Tag(models.Model):
    title = models.CharField(max_length=50, unique=True)
    description = models.TextField(null=True)

    def __str__(self):
        return self.title


class Product(models.Model):
    name = models.CharField(max_length=50)
    slug = models.SlugField(unique=True)
    image = models.ImageField(upload_to=upload_location,
                              null=True, blank=True,
                              height_field="height_field",
                              width_field="width_field")
    height_field = models.IntegerField(default=0)
    width_field = models.IntegerField(default=0)
    price = models.IntegerField(default=1500)
    tag = models.ForeignKey(Tag, null=True, on_delete='CASCADE')
    description = models.TextField(null=False, default='')
    updated = models.TimeField(auto_now=True, auto_now_add=False)
    timestamp = models.TimeField(auto_now=False, auto_now_add=True)
    # auto_now updates every time it is saved

    def __str__(self):
        return self.name

    def get_absolute_url(self):
        return reverse("products:detail", kwargs={"pk": self.id})
        # return "/posts/%s/" % self.id

    class Meta:
        ordering = ["-id", "-timestamp", "-updated"]


def create_slug(instance, new_slug=None):
    slug = slugify(instance.name)
    if new_slug is not None:
        slug = new_slug
    qs = Product.objects.filter(slug=slug).order_by("-id")
    exists = qs.exists()
    if exists:
        new_slug = "%s-%s" % (slug, qs.first().id)
        return create_slug(instance, new_slug=new_slug)
    return slug


def pre_save_post_receiver(sender, instance, *args, **kwargs):
    if not instance.slug:
        instance.slug = create_slug(instance)


pre_save.connect(pre_save_post_receiver, sender=Product)


class Review(models.Model):
    name = models.CharField(max_length=50, unique=True)
    product = models.ForeignKey(Product, on_delete='CASCADE')
    description = models.TextField(null=True)
    timestamp = models.DateTimeField(auto_now=False, auto_now_add=True)

    def __str__(self):
        return self.name


# class CategoryFilter(lookups):
#     lookup_name = 'cf'
#
#     def as_sql(self, compiler, connection):
#         lhs, lhs_params = self.process_lhs(compiler, connection)
#         rhs, rhs_params = self.process_rhs(compiler, connection)
#         params = lhs_params + rhs_params
#         return '%s <> %s' % (lhs, rhs), params
#
#     CategoryFilter.register_lookup(CategoryFilter)


class Photo(models.Model):
    name = models.CharField(max_length=50, default='image name')
    image = models.ImageField(upload_to=upload_location,
                              null=True, blank=True,
                              default='img.jpg')
    timestamp = models.DateTimeField(auto_now=False, auto_now_add=True)
    publish = models.BooleanField(default=False)

    def __str__(self):
        return self.name

    def get_absolute_url(self):
        return reverse("products:gallery", kwargs={"pk": self.id})

    class Meta:
        ordering = ["-id", "-timestamp"]
