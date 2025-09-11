import { useEffect, useState } from "react"
import ProductosCatalogo from "../../components/productosCatalogo/ProductosCatalogo"
import "./catalogo.css"
import { endpoints } from "../../utils/api";

export default function Catalogo(){

    const [getProductos, setProductos] = useState([]);
    function consultarProductos() {
      fetch(endpoints.productos)
        .then((response) => response.json())
        .then((data) => {
          setProductos(data);
        })
        .catch((error) => console.log(error));
    }
    useEffect(() => {
      consultarProductos();
    }, []);
    

    
    return(
        <div>
            <div className="barraFiltrado">
                <button className="ordenarPor">Ordenar Por</button>
                <p className="cantidadProductos">{getProductos.length} Productos</p>
                <button className="filtros">Filtros
                    <img src="../public/filter.png" />
                </button>
            </div>

            <div className="separacion" />

            <div className="catalogoProductos">

                {getProductos.map(producto=>
                {
                    if (producto.info.categoria == "hombre") {
                        return<ProductosCatalogo producto={producto} id={producto.id} />
                    }
                    
                }
                    
                )}

            </div>

        </div>
        

    )


}