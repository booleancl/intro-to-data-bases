---
layout: default
title: "Modelado de bases de datos relacionales"
nav_order: 1
---

# Modelado de bases de datos relacionales
{: .no_toc }

<details open markdown="block">
  <summary>
    Contenidos
  </summary>
  {: .text-delta }
1. TOC
{:toc}

</details>


## Diseño de bases de datos

El diseño de bases de datos es algo que requiere de experiencia y conocer las posibilidades que los RDBMS nos entregan para organizar la información (tipos de datos disponibles, restricciones,índices, entre otros). De todas formas existen una serie de pasos que podemos seguir para aproximarnos a un diseño que nos permita cumplir con la finalidad de la base de datos.

Un buen diseño de base de datos puede facilitar mucho la implementación de aplicaciones o generación de reportes a partir de los datos almacenados, mientras que un mal diseño puede entorpecer mucho la obtención de información útil a partir de los datos. Es por esto que es importante invertir tiempo en diseñar un buen esquema de bases de datos.

Hoy, cuando todas las aplicaciones y soluciones tecnológicas deben estar preparadas para afrontar el cambio, se han desarrollado metodologías que permiten ir evolucionando el diseño en la medida que las necesidades cambian. En general se puede ir modelando la base de datos con archivos gestionados con sistemas de control de versiones que permiten guardar toda la evolución de la base de datos desde su concepción hasta las ultimas modificaciones que se van agregando en la medida que la solución agrega nuevas funcionalidades. En los laboratorios tomaremos este enfoque, generando scripts ordenados que introducen cambios paulatinos, reversibles y discretos. A estos archivos se les conoce con el nombre de *migraciones*. Hablaremos más de las *migraciones* en los siguientes laboratorios.

### Diseño conceptual: Entidades y acciones
  
Pensar en qué información se desea obtener de los datos y hablar con las personas que más conocen el problema. Tener una buena idea de qué preguntas se quieren responder con la base de datos, realizar bocetos de los informes que se quieren obtener y examinar los documentos físicos (facturas, ordenes de compra, fichas clínicas, etc) que se usan o usaban para resolver el problema con anterioridad. Examinar otras bases de datos similares también es de gran ayuda.

En esta etapa trabajaremos principalmente con entidades o las *cosas* que modela nuestra base de datos y como estas entidades *operan* entre ellas. Por ejemplo: *Un usuario crea un tweet* o *Un estudiante obtiene una calificación en un curso*. Esto lo representaremos con diagramas simples a nivel de boceto, pero permite identificar a los actores principales y las acciones que generan datos.

### Determinar las Tablas

En general cada entidad del problema tendrá su propia tabla. Existen convenciones simples que nos pueden acercar bastante a un buen diseño de una tabla: Los nombres de las tablas deben ser en **plural**, ya que su propósito es albergar *varios* registros del mismo tipo. Las tablas intermedias (para relacionar tres o más tablas) también deberían tener nombres semanticos en lo posible por ejemplo en lugar de tener la tabla **Doctores-pacientes** tener la tabla **Consultas**.

### Determinar los Campos

Los nombres de los capos deben estar bien definidos y tener un significado intrínseco, es decir, no utilizar nombres de campos del tipo **dirección 1** o **dirección 2**, sino que **Dirección de facturación** o **Dirección de despacho**. Otra regla es evitar campos que son el resultado de operar otros campos.

### Determinar las relaciones entre tablas (cardinalidad)

Es muy común encontrar relaciones del tipo 1-1, 1-N y N a N entre nuestras entidades que podemos reflejar en las bases de datos mediante llaves primarias y llaves foraneas. Es muy importante pensar bien el tipo de relaciones existentes entre las entidades y revisar que nuestro esquema puede soportar esas relaciones.

### Identificar las llaves primarias y foráneas

Una vez identificadas las relaciones entre las entidades debemos identificar los campos que serán de nexo entre las tablas.

### Agregar y probar


## Diseño Conceptual

## Diseño lógico y diagrame entidad relación

## Diseño físico

## Normalización y desnormalización
