import { Outlet, useLocation } from "react-router-dom";
import Navbar from "../components/barraNavegacion.jsx";
import Footer from "../components/footer.jsx";
import CarritoDeCompras from "../components/carritoDeCompras/CarritoDeCompras"
import { useState, useEffect } from "react";

export default function LayoutPublico() {
    const { pathname } = useLocation();
    const esHome = pathname === "/"; 

        const [abierto , setAbierto] = useState(false)
        const [ getLocalProductos, setLocalProductos] = useState([])

        useEffect(() => {
            if (abierto) {
                const localStorageProductos = JSON.parse(localStorage.getItem("productos")) || [];
                setLocalProductos(localStorageProductos);
            }
        }, [abierto]);

    return (
        <>
            
            <Navbar idPagina={esHome ? "index" : "interna"} abrirCarrito={() => setAbierto(true)} />
            <CarritoDeCompras abierto={abierto} cerrarCarrito={() => setAbierto(false)} getLocalProductos={getLocalProductos} setLocalProductos={setLocalProductos} />
            <Outlet />
            <Footer />
        </>
    );
}
