# from django.http.response import Http404
# from rest_framework import viewsets 
from django.http import JsonResponse
from .models import HostProfile
from .serializers import HostProfileSerializer
from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework import status


@api_view(['GET', 'POST'])
def getAllHosts(request):

    if request.method == 'GET':
        Host = Host.objects.all()
        serializer = HostProfileSerializer(Host, many=True)
        # return JsonResponse(serializer.data, safe=False)
        return Response(serializer.data)
        #returns {"drinks": [{id: key:}, {id:, key: }]}
    
    if request.method == 'POST':
        serializer = HostProfileSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        
@api_view(['GET', 'PUT', 'DELETE'])
def getHostDetail(request, id):

    try: 
        Host = Host.objects.get(pk=id)
    except Host.DoesNotExist:
        return Response(status=status.HTTP_404_NOT_FOUND)

    if request.method == 'GET':
        serializer = HostProfileSerializer(Host)
        return Response(serializer.data)
    elif request.method == 'PUT':
        serializer = HostProfileSerializer(Host, data = request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        return Response(serializer.errors, status = status.HTTP_400_BAD_REQUEST)
    elif request.method == 'DELETE':
        Host.delete()
        return Response(status=status.HTTP_204_NO_CONTENT)
    
