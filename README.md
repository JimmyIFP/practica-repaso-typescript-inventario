# PRÁCTICA DE REPASO DE PRODUCTOS

Nombre: James Ovalle Barrera

Profesora: Patrivia Cuevas

Curso: 2do DAM Tarde

Asignatura: Desarrollo de Interfaces

## Práctica Repaso: "INVENTARIO DE PRODUCTOS"

### Objetivo

* Crear un repositorio y trabajar con ramas.
* Tipar correctamente interfaces, servicios, y funciones en TypeScript.
* Implementar lógica básica: búsquedas, filtrado, condiciones.
* Simular datos de una "base de datos" dentro de un fichero `info.ts`.

### Requisitos y Setup del repositorio

* Crea un repositorio público llamado: **`practica-repaso-typescript-inventario`**
* Crea una rama llamada: **`feature/servicio-get-producto-service`**

*Añade el servicio `getProductosPorCategoriasService`, cuando desarrollen esa funcionalidad en una nueva ram:*

* **`feature/servicio-get-producto-categoria-service`**

**Estructura del proyecto**:

* **`INVENTARIOPRODUCTOSTS`**
  * **`public`**
    * `index.html`
  * **`src`**
    * **`data`**
      * `info.ts`
    * **`domain\entities`**
      * `producto.ts`
    * **`services`**
      * `getProductoService.ts`
      * `getProductosPorCategoriasService.ts`
    * `main.ts`
  * `tsconfig.json`

### Datos iniciales (`info.ts`)

* Crea un array `productos` tipado, por ejemplo:

```typescript
export const productos: Producto [] = [
  { id: 1, nombre: "Teclado", categoria: "Periféricos", stock: 10 },
  { id: 2, nombre: "Monitor", categoria: "Pantallas", stock: 5 },
  { id: 3, nombre: "Ratón", categoria: "Periféricos", stock: 20 },
  { id: 4, nombre: "Portátil", categoria: "Equipos", stock: 3 },
];
```

-----

## Práctica Repaso: "INVENTARIO DE PRODUCTOS"

### Crear 2 servicios

**SERVICIO 1:**
`getProductoService.ts`, en la rama `feature/servicio-get-producto-service`

```typescript
export function getProducto (id: number): Promise<Producto>
```

Debe:

* buscar el producto por ID,
* simular una latencia de **800 ms** usando `setTimeout`,
* resolver la promesa si lo encuentra,
* rechazarla si no existe.

**SERVICIO 2:**
`getProductosPorCategoriaService.ts`, en la rama `feature/servicio-get-producto-categoria-service`

```typescript
export function getProductosPorCategoria (categoria: string): Promise<Producto[]>
```

Debe:

* filtrar los productos por categoría,
* simular una latencia de **1000 ms** usando `setTimeout`,
* si no hay coincidencias, devolver un array vacío.

-----

## Práctica Repaso: "INVENTARIO DE PRODUCTOS"

### Programación en `main.ts`

* Pedir un **ID de producto** mediante `prompt` y mostrar el resultado usando **`.then()/.catch()`*.
* Pedir una **categoría** mediante `prompt` y consumir el servicio mediante **`async/await`*.

#### Interfaz (`index.html`)

Incluir:

* Un botón **"Buscar producto por ID"*.
* Un botón **"Buscar productos por categoría"*.
* Un `<div>` donde mostrar el resultad.

```html
<h1>Inventario en TypeScript - Nombre Alumno</h1>
<button id="btn-id">Buscar por ID</button>
<button id="btn-cat">Buscar por categoría</button>
<div id="salida"></div>
```

-----

## Práctica Repaso: "INVENTARIO DE PRODUCTOS"

### Entregables

* Enlace al **repositorio*.
* **Zip** del proyect.
* **Capturas de consola** mostrando:
  * búsqueda por ID con **`.then()`**
  * búsqueda por categoría con **`async/await`**

### Archivo obligatorio: `ayuda.txt`

* Crea en la raíz del proyecto un archivo llamado **`ayuda.txt`*.
* En este documento debes ir anotando todos los comandos, estructuras y ejemplos de código que consideres útiles para el exame.
* Este archivo debe incluir, como mínimo:
  * Comandos de **git** utilizados [crear repositorio, ramas...].
  * Ejemplos de **tipado en TypeScript** [interfaces, tipos primitivos, arrays, funciones...].
  * Estructura general de un servicio con **Promesas*:
    * creación de una promesa
    * `resolve` y `reject`
    * uso de `setTimeout` para simular latencia
  * Forma de **consumir promesas** con:
    * **`.then() / .catch()`**
    * **`async / await`**
  * Recordatorios de estructuras clave que puedan necesitar en el exame.
* Este archivo será el único documento permitido durante el examen, por lo que debes ir completándolo mientras trabajas en la práctic.
