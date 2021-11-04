---
layout: default
title: "Distintos datos, distintas bases, distintos usos"
nav_order: 1
---

# Introducción
{: .no_toc }

<details open markdown="block">
  <summary>
    Contenidos
  </summary>
  {: .text-delta }
1. TOC
{:toc}

</details>

---
Las bases de datos son las herramientas para almacenar y explotar los datos. Cada tipo de base de datos tiene su propia forma de ver el mundo y solucionar problemas de forma diferente [[1]](references#1){: #references-1 }. Algunas asegurando que las transacciones sean seguramente procesadas [[2]](references#2){: #references-2 } y otras enfocadas en velocidad para aplicaciones que comparten información en tiempo real como los video juegos o IoT [[3]](references#3){: #references-3 }. Incluso existen bases de datos para almacenar cierto tipo de información como geográfica o biológicas.

En este módulo exploraremos el mundo de los datos desde las bases de datos relacionales (RDB). Un enfoque que ha tenido éxito desde hace más de 40 años y que sigue en pleno apogeo. Es el modelo de bases de datos más frecuente con muchísimas aplicaciones en la práctica real. Compañías pequeñas y grandes hacen uso día a día de sistemas de base de datos relacionales (RDBMS). Este tipo de bases de datos utiliza un sistema basado en teoría de conjuntos implementado en tablas con filas y columnas de *tipado* obligatorio [[1]](references#1){: #references-1 }. Para interactuar con el sistema se utiliza el lenguaje de propósito específico SQL. Con SQL declararemos que operaciones efectuar sobre la base de datos. Estas operaciones (CRUD) pueden ser sobre datos u otros elementos del sistema como tablas, campos, usuarios o bases de datos completas. Es decir, un RDBMS puede albergar y gestionar cientos de bases de datos, usuarios y grupos. El RDBMS es una aplicación sofisticada comparable a un sistema operativo y se caracterizan por garantizar la durabilidad consistencia de la información.

Los sistemas de bases de datos relacionales se caracterizan por seguir un enfoque que requiere primero el diseño de la base de datos antes de ingresar la información [[1]](references#1){: #references-1 }. En otras palabras, primero debe estar definido el "esquema" antes de ingresar la información

Utilizaremos PostgreSQL como RDBMS para aprender los principales conceptos relacionados a las bases de datos relacionales. PostgreSQL o Postgres es un motor de bases de datos relacional muy soficticado con funcionalidades avanzadas que incluso superan a otras soluciones privadas.


## Dato
Hecho que puede ser registrado y que tiene valor implícito[[4]](references#4){: #references-4 }.
## Tabla
Conjunto de registros utilizando filas y columnas. Las columnas tienen un nombre y un tipo. Las tablas tienen un número predefinido de columnas con un número indeterminado de filas que puede ir cambiando en el tiempo. Cada celda es la intersección de una fila con una columna que contiene un dato.
## Campo, atributo o columna
Una columna de una tabla. Debe ser de un tipo de dato pre definido y opcionalmente con restricciones (constrains). Por ejemplo admitir valores nulos u otras validaciones mucho más sofisticadas.
## Registro, fila o instancia
Una fila de una tabla con los valores de todos los campos.
## Base de datos
Una colección relacionada de datos para satisfacer una necesidad específica de un grupo de usuarios o aplicaciones.
## RDBMS
Aplicaciónes que ayudan a gestionar bases de datos. Pueden ser simples (SQLite) a muy sofisticados (PotgreSQL)

## Ejemplo de tabla

Cuando los datos son simples y las necesidades de información son limitadas una tabla bi dimensional como la siguiente podría ser suficiente (para ir a la feria podría servir), pero la realidad requiere una organización más robusta para resguardar la integridad de la información y no duplicar información innecesaria (inicialmente evitaremos a toda costa duplicar información, aún cuando las tendencias actuales están mostrando que en ciertos casos se puede duplicar información en favor de una mejor performance). Generalmente se evita redundar información para no caer en problemas de inconsistencia cuando por algun motivo se requiere actualizar la información, solo de debe actualizar en un solo lugar. mientras que si hay información duplicada tendríamos que actualizar todos los registros corriendo el riesgo de no actualizarlos todos y generar inconsistencias.

| Invoice | Customer | Item     | Quantity |
|---------|----------|----------|----------|
| 100     | Garcia   | TV Led   | 10       |
| 100     | Garcia   | Keyboard | 15       |
| 101     | López    | Mouse    | 23       |
| 101     | López    | TV Led   | 5        |
| 103     | González | DVD      | 15       |

De este sencillo ejemplo vemos un grado de repetición de la información en el el campo Invoice y en el campo Customer. Una forma de solucionar esta situación es utilizando dos tablas; una para el encabezado de la factura y otra con su detalle y unirlas mediante un campo en común que actúe como nexo entre ambas.

## Tablas relacionadas

Invoices Table

| Invoice | Customer |
|---------|----------|
| 100     | Garcia   |
| 101     | López    |
| 103     | González |

Invoice Details Table

| Invoice  Item     | Quantity |
|---------|----------|----------|
| 100     | TV Led   | 10       |
| 100     | Keyboard | 15       |
| 101     | Mouse    | 23       |
| 101     | TV Led   | 5        |
| 103     | DVD      | 15       |

En las bases de datos relacionales la información se almacena en diferentes tablas relacionadas por campos comunes. En el ejemplo anterior no se repite, pero tampoco se pierde información. Podemos recrear la misma información yendo e una tabla a la otra. Comparando los dos modelos, el de una tabla plana y el del esquema relacional, observamos las siguientes ventajas:

- **Flexibilidad:** las tablas son específicas para cierta parte de la información y cada tabla puede ser modificada sin afectar las otras tablas de la base de datos.
- **Menos Duplicación:** cada tabla tiene el mínimo de datos para reflejar la información.
- **Mejor Organización:** podemos definir diferentes relaciones entre tablas para presentar la información de formas diferentes y cada tabla responsable de una parte de la información. 

## Diseño de bases de datos

El diseño de bases de datos es algo que requiere de experiencia y conocer las posibilidades que los RDBMS nos entregan para organizar la información (tipos de datos disponibles, restricciones,índices, entre otros). De todas formas existen una serie de pasos que podemos seguir para aproximarnos a un diseño que nos permita cumplir con la finalidad de la base de datos.

Un buen diseño de base de datos puede facilitar mucho la implementación de aplicaciones o generación de reportes a partir de los datos almacenados, mientras que un mal diseño puede entorpecer mucho la obtención de información útil a partir de los datos. Es por esto que es importante invertir tiempo en diseñar un buen esquema de bases de datos.

Hoy, cuando todas las aplicaciones y soluciones tecnológicas deben estar preparadas para afrontar el cambio, se han desarrollado metodologías que permiten ir evolucionando el diseño en la medida que las necesidades cambian. En general se puede ir modelando la base de datos con archivos gestionados con sistemas de control de versiones que permiten guardar toda la evolución de la base de datos desde su concepción hasta las ultimas modificaciones que se van agregando en la medida que la solución agrega nuevas funcionalidades. En los laboratorios tomaremos este enfoque, generando scripts ordenados que introducen cambios paulatinos, reversibles y discretos. A estos archivos se les conoce con el nombre de *migraciones*. Hablaremos más de las *migraciones* en los siguientes laboratorios.

### Diseño conceptual: Finalidad de la base de datos
  
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
