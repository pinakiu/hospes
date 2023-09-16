# from django.http.response import Http404
# from rest_framework import viewsets 
from django.http import JsonResponse
from .models import Config
from .serializers import ConfigSerializer

def getConfig(request):
    config = Config.objects.all()
    serializer = ConfigSerializer(config, many=True)
    # return JsonResponse(serializer.data, safe=False)
    return JsonResponse({"drinks": serializer.data})
    #returns {"drinks": [{id: key:}, {id:, key: }]}


    # queryset = Config.objects.all()
    # serializer_class = ConfigSerializer


