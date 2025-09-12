import { useEffect, useState } from "react";
import Swal from "sweetalert2";
import logo from "../assets/logoAmericanino.png";
import "./barraNavegacion.css"
import { Link, NavLink } from "react-router-dom";
import CarritoDeCompras from "./carritoDeCompras/CarritoDeCompras";

export default function Navbar({ idPagina = "index" , abrirCarrito}) {

    const [menuMovilAbierto, setMenuMovilAbierto] = useState(false);
    const [panelAuthAbierto, setPanelAuthAbierto] = useState(false);
    const [vistaLogin, setVistaLogin] = useState(true);
    const [encabezadoFijo, setEncabezadoFijo] = useState(false);
    const [usuario, setUsuario] = useState(null);

    // acá está toda la lógica de autenticación
    const [correoLogin, setCorreoLogin] = useState("");
    const [contrasenaLogin, setContrasenaLogin] = useState("");

    const [nombreRegistro, setNombreRegistro] = useState("");
    const [correoRegistro, setCorreoRegistro] = useState("");
    const [contrasenaRegistro, setContrasenaRegistro] = useState("");

    // inicio de sesión
    useEffect(() => {
        try {
            const u = JSON.parse(sessionStorage.getItem("usuarioLogueado"));
            if (u) setUsuario(u);
        } catch { }
    }, []);

    // Efecto para el scroll fijo
    useEffect(() => {
        const umbralScroll = 10;
        const aplicarEncabezado = () => {
            if (window.scrollY < umbralScroll && idPagina === "index") {
                setEncabezadoFijo(false);
            } else {
                setEncabezadoFijo(true);
            }
        };
        aplicarEncabezado();
        window.addEventListener("scroll", aplicarEncabezado);
        return () => window.removeEventListener("scroll", aplicarEncabezado);
    }, [idPagina]);

    // almacenamiento de datos
    function leerUsuariosLS() {
        try {
            return JSON.parse(localStorage.getItem("usuarios")) || [];
        } catch {
            return [];
        }
    }
    function guardarUsuariosLS(lista) {
        localStorage.setItem("usuarios", JSON.stringify(lista));
    }

    // Acciones del apartado dellogin/registro
    function abrirPanelLogin(e) {
        e?.preventDefault?.();
        setVistaLogin(true);
        setPanelAuthAbierto(true);
    }
    function abrirPanelRegistro(e) {
        e?.preventDefault?.();
        setVistaLogin(false);
        setPanelAuthAbierto(true);
    }
    function cerrarPanelAuth() {
        setPanelAuthAbierto(false);
    }

    function manejarEnvioRegistro(e) {
        e.preventDefault();
        const usuarios = leerUsuariosLS();
        const existe = usuarios.find((u) => u.email === correoRegistro.trim());
        if (existe) {
            Swal.fire({
                title: "Error de Registro",
                text: "El correo electrónico ya está registrado.",
                icon: "error",
                confirmButtonText: "Entendido",
            });
            return;
        }
        const nuevo = {
            nombre: nombreRegistro.trim(),
            email: correoRegistro.trim(),
            password: contrasenaRegistro,
        };
        usuarios.push(nuevo);
        guardarUsuariosLS(usuarios);
        Swal.fire({
            title: "¡Registro Exitoso!",
            text: "Ahora puedes iniciar sesión.",
            icon: "success",
            confirmButtonText: "¡Genial!",
        });
        // mostrar el login y después limpia
        setNombreRegistro("");
        setCorreoRegistro("");
        setContrasenaRegistro("");
        setVistaLogin(true);
    }

    function manejarEnvioLogin(e) {
        e.preventDefault();
        const usuarios = leerUsuariosLS();
        const valido = usuarios.find(
            (u) => u.email === correoLogin.trim() && u.password === contrasenaLogin
        );
        if (!valido) {
            Swal.fire({
                title: "Error",
                text: "Correo o contraseña incorrectos.",
                icon: "error",
                confirmButtonText: "Intentar de Nuevo",
            });
            return;
        }
        sessionStorage.setItem("usuarioLogueado", JSON.stringify(valido));
        setUsuario(valido);
        Swal.fire({
            title: `¡Bienvenido, ${valido.nombre}!`,
            icon: "success",
            timer: 2000,
            showConfirmButton: false,
        });
        // limpiar y cerrar panel
        setCorreoLogin("");
        setContrasenaLogin("");
        setPanelAuthAbierto(false);
    }

    function manejarLogout(e) {
        e.preventDefault();
        sessionStorage.removeItem("usuarioLogueado");
        setUsuario(null);
        Swal.fire({
            title: "Has cerrado sesión",
            icon: "info",
            timer: 1500,
            showConfirmButton: false,
        });
    }

    // la renderización
    return (
        <>
            <header id="divNavbar" className={encabezadoFijo ? "headerFijo" : ""}>
                <nav className="navegacionPrincipal">
                    <div className="seccionIzquierda">
                        <button
                            id="botonMenuHamburguesa"
                            className="iconoNavegacion"
                            onClick={() => setMenuMovilAbierto(true)}
                            aria-label="Abrir menú"
                        >
                            ☰
                        </button>

                        <button
                            id="botonBusqueda"
                            className="iconoNavegacion"
                            aria-label="Buscar"
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="24" height="24" viewBox="0 0 24 24"
                                fill="none" stroke="currentColor" strokeWidth="2"
                                strokeLinecap="round" strokeLinejoin="round"
                                className="icon icon-tabler icons-tabler-outline icon-tabler-search"
                            >
                                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                                <path d="M10 10m-7 0a7 7 0 1 0 14 0a7 7 0 1 0 -14 0" />
                                <path d="M21 21l-6 -6" />
                            </svg>
                        </button>
                    </div>

                    <div className="seccionCentro">
                        <Link to="/" id="logoPrincipal" aria-label="Inicio">
                            <img src={logo} alt="Logo Americanino" />
                        </Link>
                    </div>

                    <div className="seccionDerecha">
                        {usuario ? (
                            <>
                                <span className="saludoUsuario">Hola, {usuario.nombre}</span>
                                <a
                                    
                                    id="enlaceLogout"
                                    className="enlaceNavegacion"
                                    onClick={manejarLogout}
                                    aria-label="Cerrar sesión"
                                >
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                                        viewBox="0 0 24 24" fill="none" stroke="currentColor"
                                        strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
                                        className="iconoNavbarSvg icon icon-tabler icons-tabler-outline icon-tabler-logout"
                                    >
                                        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                                        <path d="M14 8v-2a2 2 0 0 0 -2 -2h-7a2 2 0 0 0 -2 2v12a2 2 0 0 0 2 2h7a2 2 0 0 0 2 -2v-2" />
                                        <path d="M9 12h12l-3 -3" />
                                        <path d="M18 15l3 -3" />
                                    </svg>
                                </a>

                                <a
                                    
                                    id="btnCarrito"
                                    className="enlaceNavegacion"
                                    aria-label="Carrito de compras"
                                >
                                    <svg
                                        className="iconoNavbarSvg"
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="24" height="24" viewBox="0 0 24 24"
                                        fill="none" stroke="currentColor" strokeWidth="2"
                                        strokeLinecap="round" strokeLinejoin="round"
                                    >
                                        <circle cx="9" cy="21" r="1"></circle>
                                        <circle cx="20" cy="21" r="1"></circle>
                                        <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path>
                                    </svg>
                                </a>
                            </>
                        ) : (
                            <>
                                <a
                                    href="/login"
                                    id="btnRegistro"
                                    className="enlaceNavegacion"
                                    aria-label="Iniciar Sesión"
                                    onClick={abrirPanelLogin}
                                >
                                    <svg
                                        className="iconoNavbarSvg"
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="24" height="24" viewBox="0 0 24 24"
                                        fill="none" stroke="currentColor" strokeWidth="2"
                                        strokeLinecap="round" strokeLinejoin="round"
                                    >
                                        <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
                                        <circle cx="12" cy="7" r="4"></circle>
                                    </svg>
                                </a>

                                <a
                                    onClick={
                                        abrirCarrito}
                                    id="btnCarrito"
                                    className="enlaceNavegacion"
                                    aria-label="Carrito de compras"
                                >
                                    <svg
                                        className="iconoNavbarSvg"
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="24" height="24" viewBox="0 0 24 24"
                                        fill="none" stroke="currentColor" strokeWidth="2"
                                        strokeLinecap="round" strokeLinejoin="round"
                                    >
                                        <circle cx="9" cy="21" r="1"></circle>
                                        <circle cx="20" cy="21" r="1"></circle>
                                        <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path>
                                    </svg>
                                </a>
                            </>
                        )}
                    </div>
                </nav>

                <div className="navegacionCategorias">
                    <NavLink to="/catalogo?clasificacion=hombre" className="enlaceCategoria">HOMBRE</NavLink>
                    <NavLink to="/catalogo?clasificacion=mujer" className="enlaceCategoria">MUJER</NavLink>
                    <NavLink to="/catalogo?clasificacion=sale" className="enlaceCategoria categoriaSale">SALE</NavLink>
                </div>
            </header>

            {/* Panel menú móvil */}
            <div id="panelMenuMovil" className={`panelLateral ${menuMovilAbierto ? "estaAbierto" : ""}`}>
                <div className="panelLateralEncabezado">
                    <h3>Menú</h3>
                    <button
                        id="botonCerrarMenu"
                        className="iconoNavegacion"
                        onClick={() => setMenuMovilAbierto(false)}
                        aria-label="Cerrar menú"
                    >
                        ✕
                    </button>
                </div>
                <ul className="panelLateralLista">

                    <li><NavLink to="/catalogo?clasificacion=hombre" onClick={() => setMenuMovilAbierto(false)}>HOMBRE</NavLink></li>
                    <li><NavLink to="/catalogo?clasificacion=mujer" onClick={() => setMenuMovilAbierto(false)}>MUJER</NavLink></li>
                    <li><NavLink to="/catalogo?clasificacion=sale" onClick={() => setMenuMovilAbierto(false)}>SALE</NavLink></li>
                </ul>
            </div>

            {/* Panel autenticación */}
            <div id="panelAutenticacion" className={`panelLateral ${panelAuthAbierto ? "estaAbierto" : ""}`}>
                <div className="panelLateralEncabezado">
                    <h3 id="tituloPanel">{vistaLogin ? "Iniciar Sesión" : "Crear Cuenta"}</h3>
                    <button
                        id="botonCerrarAuth"
                        className="iconoNavegacion"
                        onClick={cerrarPanelAuth}
                        aria-label="Cerrar autenticación"
                    >
                        ✕
                    </button>
                </div>

                {vistaLogin ? (
                    <form id="formularioLogin" className="formularioAuth" onSubmit={manejarEnvioLogin}>
                        <input
                            type="email" name="email" placeholder="Correo electrónico" required
                            value={correoLogin} onChange={(e) => setCorreoLogin(e.target.value)}
                        />
                        <input
                            type="password" name="password" placeholder="Contraseña" required
                            value={contrasenaLogin} onChange={(e) => setContrasenaLogin(e.target.value)}
                        />
                        <button type="submit">Ingresar</button>
                        <p>¿No tienes cuenta?{" "}
                            <a href="#" id="enlaceRegistro" onClick={abrirPanelRegistro}>Regístrate</a>
                        </p>
                    </form>
                ) : (
                    <form id="formularioRegistro" className="formularioAuth" onSubmit={manejarEnvioRegistro}>
                        <input
                            type="text" name="nombre" placeholder="Nombre" required
                            value={nombreRegistro} onChange={(e) => setNombreRegistro(e.target.value)}
                        />
                        <input
                            type="email" name="email" placeholder="Correo electrónico" required
                            value={correoRegistro} onChange={(e) => setCorreoRegistro(e.target.value)}
                        />
                        <input
                            type="password" name="password" placeholder="Contraseña" required
                            value={contrasenaRegistro} onChange={(e) => setContrasenaRegistro(e.target.value)}
                        />
                        <button type="submit">Crear Cuenta</button>
                        <p>¿Ya tienes cuenta?{" "}
                            <a href="#" id="enlaceLogin" onClick={abrirPanelLogin}>Inicia sesión</a>
                        </p>
                    </form>
                )}
            </div>
        </>
    );
}
