import { Link } from "react-router-dom";
import "./panel4x1.css"
export default function Panel4x1(){

    return(

        <div className="panel4x1">

            <Link to="/catalogo/mujer">
                <img src="../src/assets/imagenes/panel4x1_1.webp" alt="" />
                <p>BUZOS PARA MUJER</p>
                <p className="textoGrande">Ver Buzos</p>
            </Link>
            <Link to="/catalogo/hombre">
                <img src="../src/assets/imagenes/panel4x1_2.webp" alt="" />
                <p>PANTALON PARA HOMBRE</p>
                <p className="textoGrande">Ver Pantalones</p>
            </Link>
            <Link to="/catalogo/mujer">
                <img src="../src/assets/imagenes/panel4x1_3.webp" alt="" />
                <p>PANTALON PARA MUJER</p>
                <p className="textoGrande">Ver Pantalones</p>
            </Link>
            <Link to="/catalogo/hombre">
                <img src="../src/assets/imagenes/panel4x1_4.webp" alt="" />
                <p>CAMISAS PARA HOMBRE</p>
                <p className="textoGrande">Ver Camisas</p>

            </Link>

        </div>

    )

}