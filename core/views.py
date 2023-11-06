from django.shortcuts import render

def render_page(request, templates):
    context = {}
    for template in templates:
        context.update(render_to_string(template, context=context))
    return render(request, 'base.html', context=context)

def minha_visualizacao(request):
    templates = ['PaginaInicial.html', 'Paginabioimpedancia.html', 'Paginalogado.html', 'PaginaLogin.html', 'Adm.html', 'about.html', 'index.html']
    return render_page(templates, request=request)
