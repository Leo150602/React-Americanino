const API_URL = ""; // url de render pocaluz

export function getProductos() {
    return fetch(`${API_URL}/productos`)
        .then((res) => res.json());
}

export function getProductoById(id) {
    return fetch(`${API_URL}/productos/${id}`)
        .then((res) => res.json());
}
