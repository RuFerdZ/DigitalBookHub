from django.contrib.auth.models import User
from rest_framework import serializers
from .models import Profile
from books.serializers import BookSerializer


class ProfileSerializer(serializers.ModelSerializer):

    user = serializers.HyperlinkedRelatedField(read_only=True, many=False, view_name='user-detail')
    books = BookSerializer(many=True, read_only=True)

    class Meta:
        model = Profile
        fields = ['url', 'id', 'user', 'avatar', 'books']


class UserSerializer(serializers.ModelSerializer):
    password = serializers.CharField(write_only=True,  # write_only means it will not be returned in the response
                                     required=False)  # required=False means it is not required when creating a new user
    old_password = serializers.CharField(write_only=True,
                                         required=False)  # write_only means it will not be returned in the response
    username = serializers.CharField(read_only=True)
    profile = ProfileSerializer(read_only=True)

    def validate(self, attrs):
        request_method = self.context['request'].method
        password = attrs.get('password')
        if request_method == 'POST' and password is None:
            raise serializers.ValidationError({"info": "Password is required"})
        elif request_method == 'PUT' or request_method == 'PATCH':
            old_password = attrs.get('old_password', None)
            if password is not None and old_password is None:
                raise serializers.ValidationError({"info": "Old password is required"})
        return attrs

    def create(self, validated_data):
        password = validated_data.pop('password')  # pop the password from the validated data
        user = User.objects.create(**validated_data)  # create the user with the validated data
        user.username = validated_data['email']  # set the username to the email
        user.set_password(password)  # set the password with hashing
        user.save()  # save the user
        return user

    def update(self, instance, validated_data):
        try:
            user = instance
            user.username = validated_data['email']  # set the username to the email
            if 'password' in validated_data:
                password = validated_data.pop('password')
                old_password = validated_data.pop('old_password')

                # check if the old password is correct
                if user.check_password(old_password):
                    user.set_password(password)
                else:
                    raise Exception("Old password is incorrect")
                user.save()
        except Exception as e:
            raise serializers.ValidationError(str(e))
        return super(UserSerializer, self).update(instance, validated_data)

    class Meta:
        model = User
        fields = ['url', 'id', 'username', 'email', 'first_name', 'last_name', 'password', 'old_password', "profile"]
