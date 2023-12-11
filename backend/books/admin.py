from django.contrib import admin
from .models import Category, Author, Book


class CategoryAdmin(admin.ModelAdmin):
    readonly_fields = ('id',)


class AuthorAdmin(admin.ModelAdmin):
    readonly_fields = ('id',)


class BookAdmin(admin.ModelAdmin):
    readonly_fields = ('id',)


# Register your models here.
admin.site.register(Category, CategoryAdmin)
admin.site.register(Author, AuthorAdmin)
admin.site.register(Book, BookAdmin)
