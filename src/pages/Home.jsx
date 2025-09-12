import Navbar from "../components/barraNavegacion";
import Carrusel from "../components/carrusel/Carrusel";
import Footer from "../components/footer";
import Panel1x1 from "../components/paneles/Panel1x1";
import Panel2x1 from "../components/paneles/panel2x1";
import Panel4x1 from "../components/paneles/Panel4x1";

export default function Home(){
let fotos=["imagenNewDrop.webp"]
    return(

        <div>
            <Navbar/>
            <Carrusel video="videoCarrusel.mp4" fotos={fotos}/> 
            <Panel2x1/>
            <Panel4x1/>
            <Panel1x1/>
            <Footer/>
        </div>

    )

}