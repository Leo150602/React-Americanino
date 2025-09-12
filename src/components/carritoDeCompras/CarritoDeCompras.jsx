import "./CarritoDeCompras.css";
import { endpoints } from "../../utils/api";
import { useState, useEffect } from "react";

function CarritoDeCompras({ carrito, onClose }) {

  const [getProductos, setProductos] = useState([])

  let URL ="https://back-americanino.onrender.com"
  let localStorageProductos = JSON.parse(localStorage.getItem("productos")) || []

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

    let productosCarrito = getProductos.filter((producto)=>{
      if (localStorageProductos.id.includes(producto.id) ) {
        return producto.cantidad = localStorageProductos.cantidad
      }
    })
    
    return (
        <div className="overlayCarrito">
            <div className="carrito">
                <button className="cerrarCarrito" onClick={onClose}>X</button>
                <h2>Carrito de compras</h2>
                {productosCarrito.length === 0 ? (
                    <p>Tu carrito está vacío</p>
                ) : (
                    <ul>
                        {productosCarrito.map((producto) => (
                            <li key={producto.id} className="itemCarrito">
                                <img src={URL + producto.info.elementos[0].fotosProducto[0]} alt={producto.info.nombre} />
                                <div>
                                    <p>{producto.info.nombre}</p>
                                    <p>${producto.info.precio}</p>
                                    <p>Cantidad: {producto.cantidad}</p>
                                </div>
                            </li>
                        ))}
                    </ul>
                )}

                <button className="checkoutBtn">Finalizar compra</button>
            </div>
        </div>
    );
}

export default CarritoDeCompras;
