import styled from "styled-components"
import "./carrusel.css"
import { useState } from "react"
export default function Carrusel({video, fotos}){
let [getCara, setCara] = useState(0)
    let urlVideo= "../src/assets/videos/" + video
    
    function pasar(){
        if(getCara == fotos.length){
            setCara(0)
            
        }else{
            setCara(cara=>cara+1)
            
        }
        
    }

    function regresar(){
        if(getCara == 0 ){
            setCara(fotos.length )
            
        }else{

            setCara(cara=>cara-1)
            
        }
        
    }

    return(
        <DivCarrusel className="carrusel" $index={getCara}>
            <div className="caras">
                <div className="cara activa">
                    <video muted autoPlay loop playsInline src={urlVideo} ></video>
                </div>
                {fotos.map((foto,i)=>{
                    let urlFoto= "../src/assets/imagenes/"+foto
                    console.log(urlFoto);
                    
                    return(
                        <div className="cara" key={i}>
                            <img src={urlFoto} />
                        </div>                    
                    )}
                )}
            </div>
            {fotos.length > 0 && (
                <>
                    <button id="atras" aria-label="Anterior" onClick={regresar}>❮</button>
                    <button id="adelante" aria-label="Siguiente" onClick={pasar}>❯</button>
                </>
            )}
        </DivCarrusel>
    )
}
const DivCarrusel = styled.div`

.caras{
    transform: ${({ $index }) => `translateX(-${$index * 100}%)`};
}


`