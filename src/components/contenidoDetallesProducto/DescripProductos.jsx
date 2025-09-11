import { useState } from "react";
import Swal from "sweetalert2";
import "./DescripProductos.css"

function DescripProducto({ producto }) {
    const info = producto?.info || {};
    const [seleccionTalla, setSeleccionTalla] = useState(null);

    const agregarCarrito = () => {
        if (!seleccionTalla) {
            return Swal.fire("Por favor selecciona una talla antes de agregar al carrito.");
        }

        let productosGuardados = JSON.parse(localStorage.getItem("productos")) || [];
        const indexExistente = productosGuardados.findIndex(
            (p) => p.id === producto.id && p.talla === seleccionTalla
        );

        if (indexExistente !== -1) {
            productosGuardados[indexExistente].cantidad += 1;
        } else {
            productosGuardados.push({ id: producto.id, talla: seleccionTalla, cantidad: 1 });
        }

        localStorage.setItem("productos", JSON.stringify(productosGuardados));
        window.dispatchEvent(new CustomEvent("productoAgregado"));
    };
    
    return (
        <div className="infoProducto">
            <h2>{info.nombre}</h2>
            <p className="precioProducto">${info.precio}</p>

            <div className="divTallas">
                <h3>Tallas:</h3>
                {info.cantidades && Object.keys(info.cantidades).length > 0 ? (
                    Object.keys(info.cantidades).map((talla, i) => (
                        <p
                            key={i}
                            className="talla"
                            onClick={() => setSeleccionTalla(talla)}
                            style={{
                                backgroundColor: seleccionTalla === talla ? "rgba(26, 26, 122, 1)" : "",
                                color: seleccionTalla === talla ? "#fff" : "black",
                            }}
                        >
                            {talla}
                        </p>
                    ))
                ) : (
                    <p>No hay tallas disponibles</p>
                )}
            </div>

            <button id="botonCompra" onClick={agregarCarrito}>
                Agregar al carrito
            </button>

            <p className="descripcionProducto">{info.descripcion}</p>
            <p className="paisFabricacion">{info.paisFabricacion}</p>
            <p className="empresaFabricacion">{info.fabricante}</p>
        </div>
    );
}

export default DescripProducto;
