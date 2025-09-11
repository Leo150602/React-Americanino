
import Catalogo from "../pages/catalogo/Catalogo"
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import DetallesProducto from "../pages/detallesProducto/DetallesProducto";

export default function Rutas(){

    return(
        <BrowserRouter>
        
            <Routes>

                <Route path="/" element={<Home/>} />
                <Route path="/catalogo/" >
                
                    <Route path="hombre" element={<Catalogo tipo="hpmbre"/>}/>
                    <Route path="mujer" element={<Catalogo tipo="mujer"/>}/>
                    <Route path="sale" element={<Catalogo tipo="sale"/>}/>
                
                </Route>
                <Route path="/detallesProducto/:id" element={<DetallesProducto/>} />

            </Routes>

        </BrowserRouter>
    )

}
