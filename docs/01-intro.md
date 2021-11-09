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
Las bases de datos son las herramientas para almacenar y explotar los datos para obtener información. Existen muchos tipos de bases de datos, cada tipo de base de datos tiene su propia forma de ver el mundo y solucionar problemas de forma diferente [[1]](references#1){: #references-1 }. Algunas asegurando que las transacciones sean seguramente procesadas [[2]](references#2){: #references-2 } y otras enfocadas en velocidad para aplicaciones en tiempo real como los video juegos o Internet de las cosas (IoT) [[3]](references#3){: #references-3 }. Incluso existen bases de datos para almacenar información geográfica, biológicas u otras.

En este módulo exploraremos el mundo de los datos desde las bases de datos relacionales (RDB). Un enfoque que ha tenido éxito desde hace más de 40 años y que sigue en pleno apogeo. Es el modelo de bases de datos más frecuente con muchísimas aplicaciones en la práctica real. Compañías pequeñas y grandes hacen uso día a día de sistemas de base de datos relacionales (RDBMS). Este tipo de bases de datos utiliza un sistema basado en teoría de conjuntos implementado en tablas con filas y columnas de **tipado obligatorio** [[1]](references#1){: #references-1 }. Para interactuar con el sistema se utiliza el lenguaje de propósito específico SQL (Structured Query Language). Con SQL declararemos que operaciones efectuar sobre la base de datos. Estas operaciones (tipo CRUD) pueden ser sobre datos u otros elementos del sistema como tablas, campos, usuarios o bases de datos completas. Es decir, un RDBMS puede albergar y gestionar cientos de bases de datos, usuarios y grupos. El RDBMS es una aplicación sofisticada comparable a un sistema operativo y se caracterizan por garantizar la durabilidad y consistencia de la información cuando son utilizadas correctamente.

Los sistemas de bases de datos relacionales se caracterizan por seguir un enfoque que requiere primero el diseño de las tablas antes de ingresar la información [[1]](references#1){: #references-1 }. En otras palabras, primero debe estar definido el "esquema" antes de ingresar la información.

En los laboratorios utilizaremos PostgreSQL como RDBMS para aprender los principales conceptos relacionados a las bases de datos relacionales. PostgreSQL o Postgres es un motor de bases de datos relacional muy sofisticado con funcionalidades avanzadas que incluso superan a otras soluciones privadas.

Antes de ir a la práctica revisaremos los conceptos generales que luego aplicaremos en los laboratorios.

## Base de datos

Una colección coherente de datos relacionados para satisfacer necesidades específicas de un grupo de usuarios o aplicaciones. Usualmente ayudan a representar algún aspecto el mundo real que en base a acontecimientos (hacer una compra o el nacimiento de un bebé) cambia o actualiza el estado de la base de datos. Para que la información represente lo mejor posible el fenómeno real que quiere modelar es importante que los eventos se reflejen en los datos tan pronto como sea posible.

## Dato

Hecho que puede ser registrado y que tiene valor implícito[[4]](references#4){: #references-4 }.

## Relational Database Management System (RDBMS)

Aplicaciones de software que ayudan a gestionar bases de datos. Pueden ser simples (SQLite) a muy sofisticados (PostgreSQL). Los sistemas de bases de datos, además de guardar los datos, guardan también la información de los tipos de datos de cada columna y las restricciones para ingresar o modificar registros (metadata). Otra característica muy importante de estos sistemas es la capacidad de controlar acciones concurrentes que intenten actualizar o modificar información simultáneamente.

## Tablas (relaciones)

Conjunto de registros del mismo tipo utilizando filas y columnas. Las columnas tienen un nombre y un tipo determinado. Las tablas tienen un número predefinido de columnas con un número indeterminado de filas que puede ir cambiando en el tiempo. Cada celda es la intersección de una fila con una columna que contiene un dato. Las tablas se pueden unir, mediante teoría de conjuntos, para formar relaciones más complejas.

## Campo, atributo o columna

Una columna de una tabla. Debe ser de un tipo de dato pre definido y opcionalmente con restricciones (constrains). Por ejemplo admitir valores nulos u otras validaciones mucho más sofisticadas.

## Registro, fila o instancia

Una fila de una tabla con los valores de todos los campos.

## Query

Es un término genérico para referirse a una interacción con la base de datos mediante SQL. Usualmente involucran la recopilación de parte de los datos. También se puede referir a lo mismo usando el término **consulta**.

## Llave primaria

Valor único no nulo que identifica específicamente un registro de una relación (tabla). Para asegurar la **restricción de integridad de la entidad** la llave primaria no puede tener valor nulo.

## Lave foránea

Valor de un campo en un registro que referencia a una llave primaria en otra tabla o relación. Para asegurar la **restricción de integridad referencial**, el valor de la llave foránea debe existir previamente.

## Relaciones y cardinalidades

La gran fortaleza de las bases de dato relacionales es que si están normalizadas (sin redundancia y con cada registro dependiente solo de la llave primaria) se pueden unir tablas utilizando las llaves foraneas y primarias, dando origen a relaciones entre registros. Estas relaciones pueden ser clasificadas segun su cardinalidad: **1 a 1**, **1 a N** y **N a N** (en rigor el recorrido de estas relaciones podría partir de cero).

## Índices

Estructura de dato especial de las bases de datos relacionales para que al buscar un registro no se tenga que leer la relación completa, sino que es el índice el que guarda la ubicación de los registros. Sin índices, cada registro debe ser leido para saber si una consulta debe retornarlo.

Algunos motores de base de datos como Postgresql crean indices para las llaves primarias y los campos marcados como únicos.

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

| Invoice | Item     | Quantity |
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
