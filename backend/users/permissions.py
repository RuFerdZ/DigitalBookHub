from rest_framework import permissions


class IsUserOwnerOrReadOnly(permissions.BasePermission):
    """
    Custom permission to only allow owners of a user object to edit it.
    Else they can only read it.
    """

    # this method is called when the permission class is called in the view
    def has_permission(self, request, view):
        return True

    # this method is called when the permission class is called in the view
    def has_object_permission(self, request, view, obj):
        # Read permissions are allowed to any request, so we'll always allow GET, HEAD or OPTIONS requests.
        if request.method in permissions.SAFE_METHODS:
            return True

        # Write permissions are only allowed to the owner of the object.
        if not request.user.is_anonymous:
            return obj == request.user

        return False


class IsProfileOwnerOrReadOnly(permissions.BasePermission):
    """
        Custom permission to only allow owners of a profile to edit it.
        Else they can only read it.
    """

    # this method is called when the permission class is called in the view
    def has_permission(self, request, view):
        return True

    # this method is called when the permission class is called in the view
    def has_object_permission(self, request, view, obj):
        # Read permissions are allowed to any request, so we'll always allow GET, HEAD or OPTIONS requests.
        if request.method in permissions.SAFE_METHODS:
            return True

        # Write permissions are only allowed to the owner of the object.
        if not request.user.is_anonymous:
            return obj == request.user.profile

        return False
