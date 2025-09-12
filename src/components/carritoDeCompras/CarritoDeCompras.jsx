import "./CarritoDeCompras.css";
import { endpoints } from "../../utils/api";
import { useState, useEffect } from "react";
import styled from "styled-components";

function CarritoDeCompras({ abierto, cerrarCarrito, getLocalProductos ,setLocalProductos}) {

  const [getProductos, setProductos] = useState([])
  

  let URL ="https://back-americanino.onrender.com"
  
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

    let productosCarrito = getLocalProductos.map(pLS => {
        const productoAPI = getProductos.find(p => p.id === pLS.id);
        if (!productoAPI) return null;
        return {
          ...productoAPI,
          cantidad: pLS.cantidad,
          talla: pLS.talla
        };
      }).filter(Boolean);

      function eliminarProductosCarrito(id, talla){

        let productos = JSON.parse(localStorage.getItem("productos")) || [];

        productos = productos.filter(p => !(p.id === id && p.talla === talla));

        localStorage.setItem("productos", JSON.stringify(productos));

        let localStoragemirar = JSON.parse(localStorage.getItem("productos")) || []

        setLocalProductos(localStoragemirar)
      }
      
    
    return (
        <DivCarrito className="overlayCarrito" $abierto={abierto}>
            <div className="carrito">
                <button className="cerrarCarrito" onClick={cerrarCarrito}>X</button>
                <h2>Carrito de compras</h2>
                <div className="muestraProductos">
                    {productosCarrito.length === 0 ? (
                        <p>Tu carrito está vacío</p>
                    ) : (
                        <ul>
                            {productosCarrito.map(producto=>(

                                <li className="listaProductos">

                                    <img src={URL + producto.info.elementos[0].fotosProducto[0]} />
                                    <div className="especificaciones">

                                        <h3>{producto.info.nombre}</h3>
                                        <p>${producto.info.precio}</p>
                                        <p>{producto.talla}</p>
                                        <p>cantidad: {producto.cantidad}</p>
                                        <button onClick={()=>eliminarProductosCarrito(producto.id, producto.talla)}>eliminar</button>

                                    </div>

                                </li>
                            ))}
                        </ul>
                    )}
                </div>
                

                <button className="checkoutBtn">Finalizar compra</button>
            </div>
        </DivCarrito>
    );
}
const DivCarrito = styled.div`

    display: ${(props) => (props.$abierto ? "flex" : "none")};

`

export default CarritoDeCompras;


