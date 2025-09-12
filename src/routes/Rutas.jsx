import { Routes, Route } from "react-router-dom";
import LayoutPublico from "../layouts/LayoutPublico.jsx";

import Home from "../pages/Home.jsx";
import Catalogo from "../pages/catalogo/Catalogo.jsx";
import DetallesProducto from "../pages/detallesProducto/DetallesProducto.jsx";

export default function Rutas() {
    return (
        <Routes>

            <Route element={<LayoutPublico />}>
                <Route path="/" element={<Home/>} />
                <Route path="/catalogo" element={<Catalogo/>}/>

                <Route path="/detallesProducto/:id" element={<DetallesProducto/>} />
            </Route>


        </Routes>
    );
}

