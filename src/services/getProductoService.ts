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