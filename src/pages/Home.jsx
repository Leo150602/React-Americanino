// src/pages/Home.jsx
import Carrusel from "../components/carrusel/Carrusel.jsx";
import Panel1x1 from "../components/paneles/Panel1x1.jsx";
import Panel2x1 from "../components/paneles/Panel2x1.jsx";
import Panel4x1 from "../components/paneles/Panel4x1.jsx";

export default function Home() {
    const fotos = ["imagenNewDrop.webp"];
    return (
        <div>
            <Carrusel video="videoCarrusel.mp4" fotos={fotos} />
            <Panel2x1 />
            <Panel4x1 />
            <Panel1x1 />
        </div>
    );
}
