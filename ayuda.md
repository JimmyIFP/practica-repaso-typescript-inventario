# Guía de ayuda

## Estructura de un proyecto

```txt
.
├── README.md
├── ayuda.md
├── package-lock.json
├── package.json
├── public
│   └── index.html
├── src
│   ├── data
│   │   └── info.ts
│   ├── domain
│   │   └── entities
│   │       └── producto..ts
│   ├── main.ts
│   └── services
│       ├── getProductoService.ts
│       └── getProductosPorCategoria.ts
└── tsconfig.json
```

## Comandos de git

* Iniciar un repo: `git init`
* configuracion global o local: `git config --global/local user.name/user.email "datos"`
* agregar archivos: `git add .` o `git add file`
* Hacer commit: `git commit -m "comentario"` o la flag `-am` para archivos nuevos y modificados
* Crear ramas: `git switch -c nombre-rama`
* Cambiar de rama: `git switch nombre-rama`
* Vincular el repo a github: `git remote add origin link-http-ssh`
* Cambiar el repo de github: `git remote set-url origin link-http-ssh`
* Consultar origen: `git remote -v`
* Hacer push de local de github: `git push` o para nuevas ramas `git push -u nombre-rama`
* merge: `git merge` desde la rama que quiero que tenga los cambios.

### Configuracion basica de `.gitignore`

```.gitignore
# Dependencies
/node_modules

# Build output
/dist
/build

# Log files
npm-debug.log*
yarn-debug.log*
yarn-error.log*
*.log

# IDE configuration
.vscode/
.idea/

# Operating system files
.DS_Store
Thumbs.db
```

## TypeScript

* Instalacion local de ts con `npm i -D typescript`

Configuracion basica del `tsconfig.json`

```json
{
  "compilerOptions": {
    "target": "esnext",
    "module": "esnext",
    "strict": true,
    "outDir": "public/dist",
    "rootDir": "src"
  }
}
```

* Transpilar proyecto: `npx tsc`

### Servicios

La mejor manera de tener apuntes es mediante un bloque de codigo que permita interpretar

#### Traer un objeto

```ts
import { Producto } from "../domain/entities/producto.";
import { productos } from "../data/info.js";

export function getProductoService(id: number): Promise<Producto> {
  const promesa: Promise<Producto> = new Promise((resolve, reject) => {
    setTimeout(() => {
      const producto: Producto | undefined = productos.find(e => e.id === id)

      if (producto) {
        resolve(producto)
      } else {
        reject(new Error("No se encontro el producto id: " + id))
      }
    }, 800)
  })

  return promesa
}
```

#### Traer un array de objetos

```ts
import { Producto } from "../domain/entities/producto.";
import { productos } from "../data/info.js";


export async function getProductosPorCategoria(categoria: string): Promise<Producto[]> {
  const promesa: Promise<Producto[]> = new Promise((resolve, reject) => {
    setTimeout(() => {
      const productosEncontrados: Producto[] = productos.filter(e => {
        return e.categoria.toLocaleLowerCase() === categoria.toLocaleLowerCase()
      })
      console.log(productosEncontrados)
      if (productosEncontrados.length > 0) {
        resolve(productosEncontrados)
      } else {
        reject(new Error("No se encontraron productos con categoria: " + categoria))
      }
    }, 1000)
  })

  return promesa
}
```

### Implementaciones

#### then/catch

```ts
  getProductoService(productId)
    .then((producto: Producto) => {
      title.textContent = producto.nombre
      category.textContent = `Categoria: ${producto.categoria}`
      stock.textContent = `Stock: ${producto.stock}`
      salida.appendChild(title)
      salida.appendChild(category)
      salida.appendChild(stock)
    })
    .catch((error: Error) => {
      title.textContent = error instanceof Error ? error.message : "Error inesperado"
      salida.appendChild(title)
    })
```

#### async/await

```ts
  try {
    let products: Producto[] = await getProductosPorCategoria(cat)
    title.textContent = cat
    salida.appendChild(title)
    for (const prod of products) {
      let container = document.createElement('div')
      let productName = document.createElement('h4')
      let id = document.createElement('p');
      let stock = document.createElement('p');
      productName.textContent = prod.nombre
      id.textContent = `Id: ${prod.id}`
      stock.textContent = `Stock: ${prod.stock}`
      container.appendChild(productName)
      container.appendChild(id)
      container.appendChild(stock)
      salida.appendChild(container)
    }
  } catch (error) {
    title.textContent = error instanceof Error ? error.message : "Error inesperado"
    salida.appendChild(title)
  }
```
