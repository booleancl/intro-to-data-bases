---
layout: default
title: "Inicio"
nav_order: 0
---

# Plantilla para documentación de procesos y cursos 

Esta plantilla contiene un proyecto Jekyll usando remote-themes
más las modificaciones para cumplir con los lineamientos de estilo 
corporativo de Boolean.

Su objetivo es ayudar a generar sitios responsivos, simples e informativos sobre laboratorios y procesos.

## Deploy de un nuevo sitio

Crear un repositorio privado en Github desde la Organización usando éste repositorio como plantilla (ver siguiente imágen).

![imagen de creación de un nuevo sito usando el template](/docs/images/creare-repo-from-template.png)

Clonar el repo a tu entorno local y ajustar las variables globales en el archivo `_config.yml`.

Agregar el contenido de las unidades y secciones dentro de la carpeta `/docs`.

Seguir la convención de nombres, usando `00-nombre-de-la-unidad.md` para los archivos en la carpeta docs.

Pushear y [configurar Github Pages](https://docs.github.com/en/pages/getting-started-with-github-pages/configuring-a-publishing-source-for-your-github-pages-site)

## Más información

Para revisar todas las funcionalidades de formateo y estructura de documentos ver:

- [Jekyll jus te docs](https://pmarsceill.github.io/just-the-docs/)
- [crear referencias bibliográficas](https://stackoverflow.com/questions/26587527/cite-a-paper-using-github-markdown-syntax)
- [agregar custom id en markdown](https://stackoverflow.com/questions/14732028/add-id-or-class-to-markdown-element/68433248#68433248)




