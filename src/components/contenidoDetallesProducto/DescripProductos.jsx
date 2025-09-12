import "./DescripProductos.css"
import BotonCompra from "./BotonCompra"
import { useState } from "react";

function DescripProducto({ producto }) {
    const info = producto?.info || {};
    const [seleccionTalla, setSeleccionTalla] = useState(null);
    
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

            <BotonCompra talla={seleccionTalla} />

            <p className="descripcionProducto">{info.descripcion}</p>
            <p className="paisFabricacion">{info.paisFabricacion}</p>
            <p className="empresaFabricacion">{info.fabricante}</p>
        </div>
    );
}

export default DescripProducto;
