import { Link } from "react-router-dom"
import "./productosCatalogo.css"

export default function ProductosCatalogo({producto, id, descuento}){
    const URL = "https://back-americanino.onrender.com"
    let link= "/detallesProducto/" + id
    let imagen = URL + producto.info.elementos[0].fotosProducto[0]
    console.log(imagen);

        return(

            <Link className="productoCatalogo" to={link} >
                {(descuento != "")? <div className="descuento">{descuento}% Off</div>:null}
                <img src={imagen} />
                <p>{producto.info.nombre}</p>
                <h4>{producto.info.precio}</h4>
            </Link>
        )

}