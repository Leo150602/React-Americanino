import { Outlet, useLocation } from "react-router-dom";
import Navbar from "../components/barraNavegacion.jsx";
import Footer from "../components/footer.jsx";
import CarritoDeCompras from "../components/carritoDeCompras/CarritoDeCompras"

export default function LayoutPublico() {
    const { pathname } = useLocation();
    const esHome = pathname === "/"; 

    return (
        <>
            
            <Navbar idPagina={esHome ? "index" : "interna"} />
            <CarritoDeCompras />
            <Outlet />
            <Footer />
        </>
    );
}