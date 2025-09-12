import "./CarritoDeCompras.css";
import { endpoints } from "../../utils/api";
import { useState, useEffect, useRef } from "react";
import styled from "styled-components";



// Animación de entrada/salida
function CarritoDeCompras({ abierto, cerrarCarrito, getLocalProductos, setLocalProductos }) {

    const [getProductos, setProductos] = useState([])


    let URL = "https://back-americanino.onrender.com"

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

    function eliminarProductosCarrito(id, talla) {

        let productos = JSON.parse(localStorage.getItem("productos")) || [];

        productos = productos.filter(p => !(p.id === id && p.talla === talla));

        localStorage.setItem("productos", JSON.stringify(productos));

        let localStoragemirar = JSON.parse(localStorage.getItem("productos")) || []

        setLocalProductos(localStoragemirar)
    }




    // Manejo de animación
    const [animVisible, setAnimVisible] = useState(false);
    const timeoutRef = useRef();

    useEffect(() => {
        if (abierto) {
            setAnimVisible(true);
        } else {
            // Espera la duración de la animación antes de ocultar
            timeoutRef.current = setTimeout(() => setAnimVisible(false), 300);
        }
        return () => clearTimeout(timeoutRef.current);
    }, [abierto]);

    const handleOverlayClick = (e) => {
        if (e.target === e.currentTarget) {
            cerrarCarrito();
        }
    };

    // Solo renderiza si está visible (animVisible)
    if (!animVisible) return null;

    return (
        <DivCarrito
            className={`overlayCarrito`}
            $abierto={abierto}
            onClick={handleOverlayClick}
        >
            <div
                className={`carrito carrito-anim${abierto ? " carrito-abierto" : " carrito-cerrado"}`}
                onClick={e => e.stopPropagation()}
            >
                <button className="cerrarCarrito" onClick={cerrarCarrito}>X</button>
                <h2>Carrito de compras</h2>
                <div className="muestraProductos">
                    {productosCarrito.length === 0 ? (
                        <p>Tu carrito está vacío</p>
                    ) : (
                        <ul className="productosCarrito">
                            {productosCarrito.map(producto => (
                                <li className="listaProductos">
                                    <img className="imagenCarrito" src={URL + producto.info.elementos[0].fotosProducto[0]} />
                                    <div className="especificaciones">
                                        <h3>{producto.info.nombre}</h3>
                                        <p>${producto.info.precio}</p>
                                        <p>Talla: {producto.talla}</p>
                                        <p>Cantidad: {producto.cantidad}</p>
                                        <button className="botonEliminar"onClick={() => eliminarProductosCarrito(producto.id, producto.talla)}>Eliminar</button>
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
    display: flex;
`

export default CarritoDeCompras;


