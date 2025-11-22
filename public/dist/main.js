import { getProductoService } from "./services/getProductoService.js";
import { getProductosPorCategoria } from "./services/getProductosPorCategoria.js";
// Elements
const inputId = document.getElementById("input-id");
const btnId = document.getElementById("btn-id");
const inputCat = document.getElementById("input-cat");
const btnCat = document.getElementById("btn-cat");
const salida = document.getElementById("salida");
// Globals
let productId;
let productCat;
// Functions Id
const getProductId = () => {
    const id = Number(inputId.value);
    return Number.isInteger(id) && id > 0 ? id : -1;
};
// Listener Id
btnId.addEventListener('click', () => {
    productId = getProductId();
    while (salida.firstChild)
        salida.removeChild(salida.firstChild);
    if (productId === -1) {
        let title = document.createElement('h3');
        title.textContent = "Id Invalida";
        salida.appendChild(title);
        return;
    }
    let title = document.createElement('h3');
    let category = document.createElement('p');
    let stock = document.createElement('p');
    getProductoService(productId)
        .then((producto) => {
        title.textContent = producto.nombre;
        category.textContent = `Categoria: ${producto.categoria}`;
        stock.textContent = `Stock: ${producto.stock}`;
        salida.appendChild(title);
        salida.appendChild(category);
        salida.appendChild(stock);
    })
        .catch((error) => {
        title.textContent = error instanceof Error ? error.message : "Error inesperado";
        salida.appendChild(title);
    });
});
// Functions Cat
const getProductCat = () => {
    return inputCat.value;
};
const getProductsByCat = async (cat) => {
    while (salida.firstChild)
        salida.removeChild(salida.firstChild);
    let title = document.createElement('h3');
    try {
        let products = await getProductosPorCategoria(cat);
        title.textContent = cat;
        salida.appendChild(title);
        for (const prod of products) {
            let container = document.createElement('div');
            let productName = document.createElement('h4');
            let id = document.createElement('p');
            let stock = document.createElement('p');
            productName.textContent = prod.nombre;
            id.textContent = `Id: ${prod.id}`;
            stock.textContent = `Stock: ${prod.stock}`;
            container.appendChild(productName);
            container.appendChild(id);
            container.appendChild(stock);
            salida.appendChild(container);
        }
    }
    catch (error) {
        title.textContent = error instanceof Error ? error.message : "Error inesperado";
        salida.appendChild(title);
    }
};
// Listener Cat
btnCat.addEventListener('click', () => {
    let cat = getProductCat();
    getProductsByCat(cat);
});
