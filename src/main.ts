import { getProductoService } from "./services/getProductoService.js";

// Elements
const inputId = document.getElementById("input-id") as HTMLInputElement
const btnId = document.getElementById("btn-id") as HTMLButtonElement
const salida = document.getElementById("salida") as HTMLSpanElement

// Globals
let productId: number

// Functions
const getProductId = (): number => {
  const id = Number(inputId.value)
  return Number.isInteger(id) && id > 0? id : -1
}

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
    .then(producto => {
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