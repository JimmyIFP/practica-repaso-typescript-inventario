import { productos } from "../data/info.js";
export function getProductoService(id) {
    const promesa = new Promise((resolve, reject) => {
        setTimeout(() => {
            const producto = productos.find(e => e.id === id);
            if (producto) {
                resolve(producto);
            }
            else {
                reject(new Error("No se encontro el producto id: " + id));
            }
        }, 800);
    });
    return promesa;
}
