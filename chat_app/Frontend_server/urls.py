from rest_framework import routers
from .api import AppViewSet

router = routers.DefaultRouter()
router.register('api/Frontend_server', AppViewSet, 'Frontend_server')

urlpatterns = router.urls