from rest_framework import serializers
from .models import Book, Category, Author


class AuthorSerializer(serializers.ModelSerializer):
    class Meta:
        model = Author
        fields = ['url', 'id', 'name']


class CategorySerializer(serializers.ModelSerializer):
    class Meta:
        model = Category
        fields = ['url', 'id', 'category_name']


class BookSerializer(serializers.ModelSerializer):
    uploader = serializers.HyperlinkedRelatedField(read_only=True, many=False, view_name='profile-detail')

    def create(self, validated_data):
        book = Book.objects.create(**validated_data)
        book.uploader = self.context['request'].user.profile
        book.save()
        return book

    class Meta:
        model = Book
        fields = ['url', 'id', 'title', 'author', 'no_of_pages', 'image', 'category', 'isbn', 'description',
                  'published_date', 'publisher', 'language', 'file', 'uploaded_date', 'uploader', 'author_name']
        read_only_fields = ['uploaded_date', 'uploader']
