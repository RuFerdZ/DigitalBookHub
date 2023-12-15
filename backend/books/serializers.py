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
        author = self.context['request'].data.get('author_name')
        # check if author name is present on the Author object.name
        if Author.objects.filter(name=author).exists():
            book.author = Author.objects.get(name=author)
        else:
            # if author name is not present then create a new author object
            new_author = Author.objects.create(name=author)
            book.author = new_author
        book.save()
        return book

    class Meta:
        model = Book
        fields = ['url', 'id', 'title', 'author', 'no_of_pages', 'image', 'category', 'isbn', 'description',
                  'published_date', 'publisher', 'language', 'file', 'uploaded_date', 'uploader', 'author_name']
        read_only_fields = ['uploaded_date', 'uploader']
