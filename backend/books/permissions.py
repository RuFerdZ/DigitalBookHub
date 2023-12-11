from rest_framework import permissions


class IsBookUploader(permissions.BasePermission):

    # check if the user is authenticated
    def has_permission(self, request, view):
        if request.method in permissions.SAFE_METHODS:
            return True
        if not request.user.is_anonymous:
            return True
        return False

    # check if the user is the uploader of the book
    def has_object_permission(self, request, view, obj):
        if request.method in permissions.SAFE_METHODS:
            return True
        return request.user.profile == obj.uploader
