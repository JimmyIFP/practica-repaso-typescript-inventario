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