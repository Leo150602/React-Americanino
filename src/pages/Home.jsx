import Navbar from "../components/barraNavegacion";
import Carrusel from "../components/carrusel/Carrusel";
import Footer from "../components/footer";

export default function Home(){
let fotos=["imagenNewDrop.webp"]
    return(

        <div>
            <Navbar/>
           <Carrusel video="videoCarrusel2.mp4" fotos={fotos}/> 
            <Footer/>
        </div>

    )

}