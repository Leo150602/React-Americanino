import { Routes, Route } from "react-router-dom";
import LayoutPublico from "../layouts/LayoutPublico.jsx";

import Home from "../pages/Home.jsx";
import Catalogo from "../pages/catalogo/Catalogo.jsx";
import DetallesProducto from "../pages/detallesProducto/DetallesProducto.jsx";

export default function Rutas() {
    return (
        <Routes>

            <Route element={<LayoutPublico />}>
                <Route index element={<Home />} />

                <Route path="catalogo">
                    <Route path="hombre" element={<Catalogo tipo="hombre" />} />
                    <Route path="mujer" element={<Catalogo tipo="mujer" />} />
                    <Route path="sale" element={<Catalogo tipo="sale" />} />


                </Route>

                <Route path="detallesProducto/:id" element={<DetallesProducto />} />
            </Route>


        </Routes>
    );
}
