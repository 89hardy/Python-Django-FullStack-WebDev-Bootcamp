from django.shortcuts import render
from django.http import HttpResponse
# Create your views here.

def index(request):
    # return HttpResponse("Hello World!")
    my_dict = {'insert_me':"Hello! I'm coming from first_app/index.html"}
    return render(request, 'first_app/index.html', context=my_dict)