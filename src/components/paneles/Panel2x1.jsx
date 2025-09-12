import { Link } from "react-router-dom";
import "./panel2x1.css"
export default function Panel2x1(){

    return(

        <div className="panel2x1">

            <h1>Nueva línea am75 esenciales progresivos</h1>

            <Link to="/catalogo?clasificacion=hombre">
                <img src="../src/assets/imagenes/hombre.webp" alt="" />
            </Link>
            <Link to="/catalogo?clasificacion=mujer">
                <img src="../src/assets/imagenes/mujer.webp" alt="" />
            </Link>

        </div>

    )

}