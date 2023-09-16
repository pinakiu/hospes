# from django.http.response import Http404
# from rest_framework import viewsets 
from django.http import JsonResponse
from .models import Config
from .serializers import ConfigSerializer
from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework import status


@api_view(['GET', 'POST'])
def getConfig(request):

    if request.method == 'GET':
        config = Config.objects.all()
        serializer = ConfigSerializer(config, many=True)
        # return JsonResponse(serializer.data, safe=False)
        return JsonResponse({"drinks": serializer.data})
        #returns {"drinks": [{id: key:}, {id:, key: }]}
    
    if request.method == 'POST':
        serializer = ConfigSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)



    # queryset = Config.objects.all()
    # serializer_class = ConfigSerializer


