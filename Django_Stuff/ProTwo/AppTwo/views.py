from django.shortcuts import render
from django.http import HttpResponse

# Create your views here.
def index(request):
    # return HttpResponse("<em>My Second App</em>")
    my_dict = {'insert_me':"I'm coming from ProTwo/help.html"}
    return render(request, 'ProTwo/help.html',context=my_dict)