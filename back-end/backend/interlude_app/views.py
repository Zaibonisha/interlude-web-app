from . models import *
from rest_framework.response import Response
from rest_framework.decorators import api_view,permission_classes
from interlude_app.serializers import RegistraionSerializer
from rest_framework import status
from rest_framework.permissions import AllowAny,IsAuthenticated
from django.contrib.auth import logout
from rest_framework.authtoken.views import obtain_auth_token

# Create your views here.
@api_view(['POST'],)
@permission_classes([AllowAny],)
def registration_view(request):

    if request.method == 'POST':
        serializer = RegistraionSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        else:
            return Response(serializer.errors)


@api_view(['POST'],)
@permission_classes([IsAuthenticated],)
def logout_view(request):
    
    if request.method == 'POST':
        request.user.auth_token.delete()
        return Response('User Logged out successfully' , status=status.HTTP_200_OK)
