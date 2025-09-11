import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import ImagesProductos from "../../components/contenidoDetallesProducto/ImagesProductos";
import DescripProducto from "../../components/contenidoDetallesProducto/DescripProductos";
import "./DetallesProducto.css"

function DetallesProductos() {

    //useEffect(() => {     -> arreglar esto, get producto by id no existe en utils aun, despues de crearla importarla
      //  getProductoById(id).then((data) => {
        //    setProducto(data);
       // });
    //}, [id]);

    //se trae la informacion del render con el endpoint
    fetch(endpoints.productos)
    .then((respuesta) => respuesta.json())
    .then((data) => getProducto(data))
    .catch((error) => console.log(error)
    )


}

export default DetallesProductos;
