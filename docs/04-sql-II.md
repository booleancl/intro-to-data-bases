---
layout: default
title: "SQL II"
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

## Actualizar datos

```sql
UPDATE ______
SET ______ = ______
(WHERE clause)
```

Actualizar múltiples columnas

```sql
UPDATE movies
SET genre = 'Comedy', duration = 70
WHERE id = 5;
```

```sql
UPDATE writers
SET name = 'Matz'
WHERE id = 3;
```

## Borrar datos

```sql
DELETE FROM _____ (WHERE clause);
```

## Transacciones y sus propiedades..

## Restricción de nulidad.

## Diagrama de entidad relación ERD

## Crear un modelo de datos con integridad referencial.

## Restricciones de datos

## Respaldos de bases de datos
