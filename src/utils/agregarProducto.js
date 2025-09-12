export default function (id, cantidad) {
    let productos = JSON.parse(localStorage.getItem("producto")) || [];

    let nuevoProducto = {
        id: id,
        cantidad: cantidad
    };

    productos.push(nuevoProducto);

    localStorage.setItem("producto", JSON.stringify(productos));
}