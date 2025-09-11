import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import ImagesProductos from "../../components/contenidoDetallesProducto/ImagesProductos";
import DescripProducto from "../../components/contenidoDetallesProducto/DescripProductos";
import "./DetallesProducto.css"

function DetallesProductos() {
    const { id } = useParams();
    const [producto, setProducto] = useState(null);

    //useEffect(() => {     -> arreglar esto, get producto by id no existe en utils aun, despues de crearla importarla
      //  getProductoById(id).then((data) => {
        //    setProducto(data);
       // });
    //}, [id]);

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
