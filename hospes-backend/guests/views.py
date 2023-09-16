from django.shortcuts import render
from django.http import JsonResponse
from .models import GuestProfile
from .serializers import GuestProfileSerializer
from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework import status

@api_view(['GET', 'POST'])
def getAllGuests(request):

    if request.method == 'GET':
        Guest = Guest.objects.all()
        serializer = GuestProfileSerializer(Guest, many=True)
        # return JsonResponse(serializer.data, safe=False)
        return Response(serializer.data)
        #returns {"drinks": [{id: key:}, {id:, key: }]}
    
    if request.method == 'POST':
        serializer = GuestProfileSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        
@api_view(['GET', 'PUT', 'DELETE'])
def getGuestDetail(request, id):

    try: 
        Guest = Guest.objects.get(pk=id)
    except Guest.DoesNotExist:
        return Response(status=status.HTTP_404_NOT_FOUND)

    if request.method == 'GET':
        serializer = GuestProfileSerializer(Guest)
        return Response(serializer.data)
    elif request.method == 'PUT':
        serializer = GuestProfileSerializer(Guest, data = request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        return Response(serializer.errors, status = status.HTTP_400_BAD_REQUEST)
    elif request.method == 'DELETE':
        Guest.delete()
        return Response(status=status.HTTP_204_NO_CONTENT)
    
