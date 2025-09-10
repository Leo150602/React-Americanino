import { Link } from "react-router-dom"
import "./productosCatalogo.css"
export default function ProductosCatalogo({producto, id}){
let imagen= "../src/assets/imagenes/fotosProductos/"+ producto.foto
let link= "/detallesProducto/" + id

    return(

        <Link className="productoCatalogo" to={link} >
            <img src={imagen} />
            <p>{producto.nombre}</p>
            <h4>{producto.precio}</h4>
        </Link>
    )

}