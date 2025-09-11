import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { getProductoById } from "../utils/api";
import ImagesProductos from "../components/ImagesProductos";
import DescripProducto from "../components/DescripProducto";
import "./DetallesProducto.css"

function DetallesProductos() {
    const { id } = useParams();
    const [producto, setProducto] = useState(null);

    useEffect(() => {
        getProductoById(id).then((data) => {
            setProducto(data);
        });
    }, [id]);

    if (!producto) {
        return <p>Cargando producto...</p>;
    }

    return (
        <div className="detalleProducto">
            <ImagesProductos producto={producto} />
            <DescripProducto producto={producto} />
        </div>
    );
}

export default DetallesProductos;
