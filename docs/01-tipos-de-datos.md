---
layout: default
title: "Tipos de Datos"
nav_order: 1
---

# Tipos de datos primitivos
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

Similar a los lenguajes naturales, que tienen verbos, pronombres y sustantivos, los lenguajes de programación vienen con 'elementos' básicos que usaremos para construir soluciones más complejas usando estos elementos básicos.

Estas piezas básicas las podemos separar en dos: **operadores** (asignaciones, bucles, condicionales) y **tipos de datos** (números, letras, palabras, verdadero, falso, nulo, etc). Dependiendo del propósito del lenguaje estos pueden variar, pero en general harán referencia a ellos como el **núcleo imperativo** o sus **primitivos**. Hay lenguajes dónde no hay tipos primitivos como los lenguajes completamente orientados a objetos y otros que tienen muchos tipos primitivos para trabajar conceptos científicos o más abstractos. Lo importante es que cada vez que tengamos que aprender a ser productivos en un nuevo lenguaje nos demos el tiempo de entender sus bloques básicos antes de pasar a los conceptos más avanzados del lenguaje.

Específicamente en Javascript un primitivo es un dato que no es un **objeto**, es decir, no tiene métodos (más sobre objetos y métodos en el capítulo 7). Los primitivos de Javascript son **inmutables** y no pueden ser alterados, esto es causa de confusión porque las variables que referencian a valores primitivos sí podrían reasignarse, pero el valor primitivo no [[1]](references#1){: #references-1 }.

En los ejercicios del laboratorio experimentarás con los siguientes elementos primitivos de Javascript

## Undefined y Null

**Undefined** es el valor que el intérprete de Javascript entrega cuando una variable está definida, pero no asignada. La siguiente imágen muestra el comportamiento de una variable no asignada. El intérprete retorna **undefined** cuando no ha sido asignada.

![variable undefined](images/undefined.png)

Algo muy diferente a lo que ocurre cuando una variable no está definida, en cuyo caso el intérprete levantará una exceptión de tipo **ReferenceError**. 

**Null** por otro lado es un valor que nos permite asignar voluntariamente un valor que representa la ausencia de valor. Como regla general podemos indicar que el intérprete de Javascript debería ser el encargado de gestionar el valor **undefined** y nosotros como programadores podemos utilizar **null**
cuando necesitemos indicar que una variable tiene un valor nulo que podría cambiar durante la ejecución del programa [[2]](references#2){: #references-2 }.


Con frecuencia veremos en frameworks y librerías variables que se inicializan con el valor **null** para luego actualizar su valor.

> **!Experimenta!**: ¿Qué ocurrirá con las siguientes expresiones?

```javascript
var i = 1 + undefined
console.log(i)
```
```javascript
var i = 1 + null
console.log(i)
```

## Boolean

## Number
## String
## Asignación por valor
## Asignación por referencia
## Sentencias lógicas
## Niveles de Acceso
