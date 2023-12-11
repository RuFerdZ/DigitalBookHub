"""api URL Configuration

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/3.1/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""
from django.conf import settings
from django.contrib import admin
from django.urls import path, include
from django.conf.urls.static import static
from drf_yasg import openapi
from drf_yasg.views import get_schema_view as swagger_get_schema_view

from users import router as user_api_router
from books import router as book_api_router

schema_view = swagger_get_schema_view(
    openapi.Info(
        title="DigitalBookHub API",
        default_version='1.0.0',
        description="API documentation for DigitalBookHub"
    ),
    public=True
)

auth_urlpatterns = [
    path(r'', include('rest_framework_social_oauth2.urls')),
]

if settings.DEBUG:
    auth_urlpatterns.append(path(r'verify/', include('rest_framework.urls')))

api_urlpatterns = [
    path(r'auth/', include(auth_urlpatterns)),
    path(r'accounts/', include(user_api_router.router.urls)),
    path(r'books/', include(book_api_router.router.urls)),
]

urlpatterns = [
    path(r'admin/', admin.site.urls),
    path(r'api/', include(api_urlpatterns)),
]

urlpatterns += static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)

urlpatterns += [
    path(r'api/v1/swagger/', schema_view.with_ui('swagger', cache_timeout=0), name='schema-swagger-ui'),
    path(r'api/v1redoc/', schema_view.with_ui('redoc', cache_timeout=0), name='schema-redoc'),
]

