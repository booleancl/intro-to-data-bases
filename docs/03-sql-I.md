---
layout: default
title: "SQL I"
nav_order: 2
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

## Lenguaje estructurado de consultas SQL

SQL es un lenguaje de programación para bases de datos. Su traducción literal sería Lenguaje Estructurado De Consultas (Structured Query Language)

SQL es un lenguaje insensible a mayúsculas y minúsculas. "select" == SELECT.

En sql las tablas tienen columnas que tendrán información de cierto **tipo**

>Como buena práctica los nombres de las tablas deben ser en **plural**.

## Crear una base de datos

```sql
  CREATE DATABASE <database_name>
```

## Conectar a una base de datos.

```sql
  \c <database_name>
```
## Crear Tablas

```sql
\c bigcities

DROP TABLE IF EXISTS cities;

CREATE TABLE cities(
    id INTEGER,
    name VARCHAR(30),
    country VARCHAR(30),
    population INTEGER,
    area INTEGER,
    PRIMARY KEY(id)
);
```

## Tipos de datos.

[link documentación][https://www.postgresql.org/docs/current/datatype.html]

## Insertar datos
```sql
\c bigcities
\COPY cities FROM '/home/sbstn/intro_dev/programming-intro-lab-13-sbstn-jmnz-1/data/ciudades.csv' csv HEADER;

```

## Consultas a una o más tablas.

```sql
SELECT * FROM cities;
```

### Consultas con clausula WHERE

La sentencia **WHERE** es para filtar información

```sql
SELECT <column>
FROM <table>;
WHERE <column> <condition>;
```

### Consultas con Agrupación

```sql
\c bigcities

SELECT
Country,
SUM(population) AS total_pop,
SUM(area) AS total_area
FROM cities
GROUP BY country 
ORDER BY total_pop DESC;
```

### Llave primaria y llave foránea.

```sql
\c bigcities

CREATE TABLE writers (
    city_id INTEGER,
    name VARCHAr(45),
    FOREIGN KEY(city_id) REFERENCES cities(id)

);
```

### Consultas con unión entre tablas.

```sql
\c bigcities

SELECT writers.name AS writer, cities.name AS city 
FROM writers
JOIN cities ON city_id = cities.id;
```

### SubQuery

```sql
\c bigcities

SELECT writers.name AS writer, cities.name AS city 
FROM writers
JOIN cities ON city_id = cities.id
WHERE city_id in (
    SELECT id
    FROM cities
    WHERE COUNTRY = 'Japan'
);
```
