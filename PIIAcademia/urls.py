from django.urls import path
from core.views import pagina_inicial
from core.views import render_page

urlpatterns = [
    path('', render_page, name='index'),
    path('about/', render_page, name='about'),
    path('pagina_inicial/', pagina_inicial, name='pagina_inicial'),
]