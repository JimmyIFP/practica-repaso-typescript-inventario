import { productos } from "../data/info.js";
export async function getProductosPorCategoria(categoria) {
    const promesa = new Promise((resolve, reject) => {
        setTimeout(() => {
            const productosEncontrados = productos.filter(e => {
                return e.categoria.toLocaleLowerCase() === categoria.toLocaleLowerCase();
            });
            console.log(productosEncontrados);
            if (productosEncontrados.length > 0) {
                resolve(productosEncontrados);
            }
            else {
                reject(new Error("No se encontraron productos con categoria: " + categoria));
            }
        }, 1000);
    });
    return promesa;
}
