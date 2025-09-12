import { useEffect, useState } from "react"
import ProductosCatalogo from "../../components/productosCatalogo/ProductosCatalogo"
import "./catalogo.css"
import { endpoints } from "../../utils/api";
import { useSearchParams } from "react-router-dom";
import Filtros from "../../components/filtradoProductos/Filtros";
import styled from "styled-components";

export default function Catalogo(){

    const [getProductos, setProductos] = useState([]);
    const [searchParams, setSearchParams] = useSearchParams();
    const [getFiltoAbierto, setFiltroAbierto] = useState(false)
    const [orden , setOrden] = useState("")
    const [abrirOrden, setAbrirOrden] = useState(false)

    let filtros = searchParams.getAll("categoria")
    let colores = searchParams.getAll("color")
    let clasificacion = searchParams.get("clasificacion")

    function revisarParametros(parametro){
        if(filtros.includes(parametro)){
            return true
        }else return false
    }

    function agrearCategoria(categoria){
        const params = new URLSearchParams(searchParams);
        params.append("categoria", categoria);
        setSearchParams(params);

    }

    function eliminarCategoria(categoria){

        const params = new URLSearchParams(searchParams);
        const categorias = params.getAll("categoria").filter(c => c !== categoria);
        params.delete("categoria");
        categorias.forEach(c => params.append("categoria", c));
        setSearchParams(params);

    }

    function revisarColor(parametro){
        if(colores.includes(parametro)){
            return true
        }else return false
    }

    function agrearColor(color){
        const params = new URLSearchParams(searchParams);
        params.append("color", color);
        setSearchParams(params);

    }

    function eliminarColor(color){

        const params = new URLSearchParams(searchParams);
        const coloresGuradados = params.getAll("color").filter(c => c !== color);
        params.delete("color");
        coloresGuradados.forEach(c => params.append("color", c));
        setSearchParams(params);

    }

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

    const productosCompletos = getProductos.filter((producto) => {
        let pasaClasificacion
        if(clasificacion == "sale"){
            pasaClasificacion = producto.info.descuento != ""
        }else{
            pasaClasificacion = !clasificacion || clasificacion == producto.info.categoria
        }
        
        return pasaClasificacion
      });
    
    const productosFiltrados = getProductos.filter((producto) => {
        let pasaClasificacion
        if(clasificacion == "sale"){
            pasaClasificacion = producto.info.descuento != ""
        }else{
            pasaClasificacion = !clasificacion || clasificacion == producto.info.categoria
        }
        let pasaFiltros = filtros.length == 0 || filtros.includes(producto.info.caracteristicas)
        let pasaColor = colores.length == 0 || colores.includes(producto.info.elementos[0].color)
        
        return pasaFiltros && pasaClasificacion && pasaColor
      });

    
      let productosOrdenados;

if (orden === "mayor precio") {
  productosOrdenados = [...productosFiltrados].sort(
        (a, b) => a.info.precio - b.info.precio
  );
} else if (orden === "menor precio") {
  productosOrdenados = [...productosFiltrados].sort(
        (a, b) => b.info.precio - a.info.precio
  );
} else if (orden === "mayor descuento") {
    productosOrdenados = [...productosFiltrados].sort((a, b) => {
      const descuentoA = parseInt(a.info.descuento) || 0;
      const descuentoB = parseInt(b.info.descuento) || 0;
      return descuentoB - descuentoA; 
    });
  }else{
  productosOrdenados = [...productosFiltrados];
}

    return(
        <div>
            <div className="barraFiltrado">
                <div className="ordenado">

                <button className="ordenarPor" onClick={()=>{
                    if (abrirOrden == false) {
                        setAbrirOrden(true)
                    }else setAbrirOrden(false)
                }}>Ordenar Por</button>
                <DivOrdenes $Apertura={abrirOrden} className="ordenes">

                    <div className="tipoOrden" onClick={()=>{setOrden("mayor precio")}}>Mayor Precio</div>
                    <div className="tipoOrden" onClick={()=>(setOrden("menor precio"))}>Menor Precio</div>
                    <div className="tipoOrden" onClick={()=>(setOrden("mayor descuento"))}>Mayor Descuento</div>

                </DivOrdenes>

                </div>
                <p className="cantidadProductos">{productosFiltrados.length} Productos</p>
                <button className="filtros" onClick={()=>{ if(getFiltoAbierto == false){setFiltroAbierto(true)
                     console.log(getFiltoAbierto)
                     }else{setFiltroAbierto(false)
                        
                        
                     }}} >Filtros
                    <img src="../public/filter.png" />
                </button>
            </div>

            <div className="separacion" />

            <div className="catalogoCompleto">

                <div className="catalogoProductos">
                    {productosOrdenados.map((producto) => (
                        <ProductosCatalogo key={producto.id} producto={producto} id={producto.id} descuento={producto.info.descuento}/>
                    ))}
                </div>
                <Filtros abierto={getFiltoAbierto} productos={productosCompletos} agregar={agrearCategoria} eliminar={eliminarCategoria} revisar={revisarParametros} agregarColor={agrearColor} eliminarColor={eliminarColor} revisarColor={revisarColor}/>

            </div>

        </div>
        

    )


}
const DivOrdenes = styled.div`

    position: absolute;
    transition: all 0.5s ease;
    height: ${(param)=>(param.$Apertura?"150px":"0")};
    width: 150px;
    top: 28px;
    overflow: hidden;

    .tipoOrden{
        background-color: white;
        padding: 5px 0;
        text-align: center;
        border: 1px solid black;
        cursor: pointer;
    }

`
