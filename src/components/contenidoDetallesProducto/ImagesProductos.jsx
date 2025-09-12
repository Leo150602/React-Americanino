import { useState } from "react";
import "./ImagesProductos.css"


function ImagesProductos({ producto }) {
    const info = producto?.info || {};
    const elementos = info.elementos || [];
    const fotos = elementos[0]?.fotosProducto || [];
    const [imagenPrincipal, setImagenPrincipal] = useState(fotos[0] || null);
    const URL = "https://back-americanino.onrender.com/";

    if (!fotos.length) {
        return <div>No hay imágenes disponibles para este producto.</div>;
    }

    return (
        <div className="galeriaProducto">
            <div className="contenedorImgPrincipal">
                {imagenPrincipal ? (
                    <img
                        src={`${URL}/${imagenPrincipal}`}
                        alt={info.nombre}
                        className="imagen-principal"
                    />
                ) : (
                    <div>Imagen principal no disponible</div>
                )}
            </div>
            <div id="miniaturas">
                {fotos.map((foto, index) => (
                    <img
                        key={index}
                        src={`${URL}/${foto}`}
                        alt={`Miniatura ${index + 1}`}
                        className="miniatura"
                        onClick={() => setImagenPrincipal(foto)}
                    />
                ))}
            </div>

        </div>
    );
}

export default ImagesProductos;
