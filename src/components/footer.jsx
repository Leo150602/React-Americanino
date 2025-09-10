import "./footer.css";

export default function Footer() {
    return (
        <footer id="divFooter">
            <div className="footerContenedor">
                <div className="footerColumna">
                    <h4>SOBRE NOSOTROS</h4>
                    <ul>
                        <li>
                            <a
                                href="https://www.americanino.com/marca?srsltid=AfmBOopnew4TeA-uhijtgHGqELqZjMjulwf2VC4WA_V1O3-47cKciE0c"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                Nuestra Historia
                            </a>
                        </li>
                        <li>
                            <a
                                href="https://www.americanino.com/localizar-tiendas"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                Tiendas
                            </a>
                        </li>
                        <li>
                            <a
                                href="https://www.magneto365.com/co/empresas/americanino/empleos"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                Trabaja con Nosotros
                            </a>
                        </li>
                    </ul>
                </div>

                <div className="footerColumna">
                    <h4>AYUDA</h4>
                    <ul>
                        <li>
                            <a
                                href="https://www.americanino.com/ayuda-pqr"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                PQR's
                            </a>
                        </li>
                        <li>
                            <a
                                href="https://www.americanino.com/sobre-el-sitio/omnicanalidad"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                Politica de envíos y devoluciones
                            </a>
                        </li>
                        <li>
                            <a
                                href="https://api.whatsapp.com/send/?phone=573228230631&text&type=phone_number&app_absent=0"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                Contacto
                            </a>
                        </li>
                    </ul>
                </div>

                <div className="footerColumna">
                    <h4>SÍGUENOS</h4>
                    <div className="footerRedes">
                        <a
                            href="https://www.instagram.com/americanino/"
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label="Instagram"
                        >
                            <svg className="iconoRedSocial" viewBox="0 0 24 24">
                                <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                                <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                            </svg>
                        </a>
                        <a
                            href="https://www.facebook.com/americanino"
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label="Facebook"
                        >
                            <svg className="iconoRedSocial" viewBox="0 0 24 24">
                                <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
                            </svg>
                        </a>
                        <a
                            href="https://www.tiktok.com/@americanino_"
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label="TikTok"
                        >
                            <svg className="iconoRedSocial" viewBox="0 0 24 24">
                                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                                <path d="M21 7.917v4.034a9.948 9.948 0 0 1 -5 -1.951v4.5a6.5 6.5 0 1 1 -8 -6.326v4.326a2.5 2.5 0 1 0 4 2v-11.5h4.083a6.005 6.005 0 0 0 4.917 4.917z" />
                            </svg>
                        </a>
                    </div>
                </div>
            </div>

            <div className="footerInferior">
                <p>&copy; {new Date().getFullYear()} Americanino. Todos los derechos reservados.</p>
            </div>
        </footer>
    );
}
