import { Producto } from "./domain/entities/producto.";
import { getProductoService } from "./services/getProductoService.js";
import { getProductosPorCategoria } from "./services/getProductosPorCategoria.js";

// Elements
const inputId = document.getElementById("input-id") as HTMLInputElement
const btnId = document.getElementById("btn-id") as HTMLButtonElement
const inputCat = document.getElementById("input-cat") as HTMLInputElement
const btnCat = document.getElementById("btn-cat") as HTMLButtonElement

const salida = document.getElementById("salida") as HTMLSpanElement

// Globals
let productId: number
let productCat: string

// Functions Id
const getProductId = (): number => {
  const id = Number(inputId.value)
  return Number.isInteger(id) && id > 0? id : -1
}

// Listener Id
btnId.addEventListener('click', () => {
  productId = getProductId()

  while(salida.firstChild) salida.removeChild(salida.firstChild)

  if (productId === -1) {
    let title = document.createElement('h3')
    title.textContent = "Id Invalida"
    salida.appendChild(title)
    return
  }

  let title = document.createElement('h3')
  let category = document.createElement('p');
  let stock = document.createElement('p');

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
})

// Functions Cat
const getProductCat = (): string => {
  return inputCat.value
}

const getProductsByCat = async (cat: string) => {
  while(salida.firstChild) salida.removeChild(salida.firstChild)
  let title = document.createElement('h3')

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
}

// Listener Cat
btnCat.addEventListener('click', () => {
  let cat: string = getProductCat()
  getProductsByCat(cat)
})
