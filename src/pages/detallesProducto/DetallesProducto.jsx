import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { endpoints } from "../../utils/api"
import ImagesProductos from "../../components/contenidoDetallesProducto/ImagesProductos";
import DescripProducto from "../../components/contenidoDetallesProducto/DescripProductos";
import "./DetallesProducto.css"


function DetallesProductos() {
    const { id } = useParams();
    const [producto, setProducto] = useState(null);

    useEffect(() => {
        fetch(`${endpoints.productos}/${id}`)
            .then((respuesta) => respuesta.json())
            .then((data) => setProducto(data))
            .catch((error) => console.log(error));
    }, [id]);

    if (!producto) return <div>Cargando...</div>;

    return (
        <div className="detalles-producto">
            <ImagesProductos producto={producto} />
            <DescripProducto producto={producto} />
        </div>
    );
}

export default DetallesProductos;
