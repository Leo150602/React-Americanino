import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { endpoints } from "../../utils/api"

import "./DetallesProducto.css"

function DetallesProductos() {

    //variables para guardar el proucto de render
    const [produco, getProducto] = useState(null)

    //se trae la informacion del render con el endpoint
    fetch(endpoints.productos)
    .then((respuesta) => respuesta.json())
    .then((data) => getProducto(data))
    .catch((error) => console.log(error)
    )

    
}

export default DetallesProductos;
