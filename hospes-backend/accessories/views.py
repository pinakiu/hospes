
from django.shortcuts import render
# from django.http.response import Http404
# from rest_framework import viewsets 
from django.http import JsonResponse
from .models import Config
from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework import status
from .serializers import UserSerializer
# from .serializers import ConfigSerializer

@api_view(['POST'])
def register_user(request):
    if request.method == 'POST':
        serializer = UserSerializer(data = request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status = status.HTTP_201_CREATED)
        return Response(serializer.errors, status.HTTP_400_BAD_REQUEST)
    



@api_view(['GET', 'POST'])
def getConfig(request):

    if request.method == 'GET':
        config = Config.objects.all()
        serializer = ConfigSerializer(config, many=True)
        # return JsonResponse(serializer.data, safe=False)
        return Response(serializer.data)
        #returns {"drinks": [{id: key:}, {id:, key: }]}
    
    if request.method == 'POST':
        serializer = ConfigSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        
@api_view(['GET', 'PUT', 'DELETE'])
def getConfigDetail(request, id):

    try: 
        config = Config.objects.get(pk=id)
    except Config.DoesNotExist:
        return Response(status=status.HTTP_404_NOT_FOUND)

    if request.method == 'GET':
        serializer = ConfigSerializer(config)
        return Response(serializer.data)
    elif request.method == 'PUT':
        serializer = ConfigSerializer(config, data = request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        return Response(serializer.errors, status = status.HTTP_400_BAD_REQUEST)
    elif request.method == 'DELETE':
        config.delete()
        return Response(status=status.HTTP_204_NO_CONTENT)
    
    



    # queryset = Config.objects.all()
    # serializer_class = ConfigSerializer

