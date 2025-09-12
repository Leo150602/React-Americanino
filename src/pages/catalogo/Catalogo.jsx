import { useEffect, useState } from "react"
import ProductosCatalogo from "../../components/productosCatalogo/ProductosCatalogo"
import "./catalogo.css"
import { endpoints } from "../../utils/api";

export default function Catalogo({tipo}){

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
    
    const productosFiltrados = getProductos.filter((producto) => {
        if (tipo === "sale") {
          return producto.info.descuento !== "";
        } else {
          return producto.info.categoria === tipo;
        }
      });

    
    return(
        <div>
            <div className="barraFiltrado">
                <button className="ordenarPor">Ordenar Por</button>
                <p className="cantidadProductos">{productosFiltrados.length} Productos</p>
                <button className="filtros">Filtros
                    <img src="../public/filter.png" />
                </button>
            </div>

            <div className="separacion" />

            <div className="catalogoProductos">

            {productosFiltrados.map((producto) => (
                <ProductosCatalogo key={producto.id} producto={producto} id={producto.id} />
            ))}

            </div>

        </div>
        

    )


}