import { useEffect, useState } from "react"
import ProductosCatalogo from "../../components/productosCatalogo/ProductosCatalogo"
import "./catalogo.css"
import { endpoints } from "../../utils/api";
import { useSearchParams } from "react-router-dom";

export default function Catalogo(){

    const [getProductos, setProductos] = useState([]);
    const [searchParams, setSearchParams] = useSearchParams();

    let filtros = searchParams.getAll("categoria")
    let clasificacion = searchParams.get("clasificacion")

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
        let pasaClasificacion
        if(clasificacion == "sale"){
            pasaClasificacion = producto.info.descuento != ""
        }else{
            pasaClasificacion = !clasificacion || clasificacion == producto.info.categoria
        }
        let pasaFiltros = filtros.length == 0 || filtros.includes(producto.info.caracteristicas)
        
        return pasaFiltros && pasaClasificacion
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
                <ProductosCatalogo key={producto.id} producto={producto} id={producto.id} descuento={producto.info.descuento}/>
            ))}

            </div>

        </div>
        

    )


}