import { useState } from "react";
import "./ImagesProductos.css"

function ImagesProductos({ producto }) {
    const fotos = producto?.elementos?.[0]?.fotosProducto || [];
    const [imagenPrincipal, setImagenPrincipal] = useState(fotos[0]);

    return (
        <div className="galeriaProducto">
            <div id="miniaturas">
                {fotos.map((foto, index) => (
                    <img
                        key={index}
                        src={`/imagenes/fotosProductos/${foto}`}
                        alt={`Miniatura ${index + 1}`}
                        className="miniatura"
                        onClick={() => setImagenPrincipal(foto)}
                    />
                ))}
            </div>

            <div className="contenedorImgPrincipal">
                <img
                    src={`/imagenes/fotosProductos/${imagenPrincipal}`}
                    alt={producto.nombre}
                    className="imagen-principal"
                />
            </div>
        </div>
    );
}

export default ImagesProductos;
