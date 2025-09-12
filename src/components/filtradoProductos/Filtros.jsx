import styled from "styled-components"
import "./Filtros.css"
import { useState } from "react";
export default function Filtros({abierto, productos, agregar, eliminar, revisar, agregarColor, eliminarColor, revisarColor}){
    
    const[getAperturaCategoria, setAperturaCategoria] = useState(false)
    const[getAperturaColor, setAperturaColor] = useState(false)

    let productosCategoria = productos.filter(
        (producto, index, self) =>
          index === self.findIndex(p => p.info.caracteristicas === producto.info.caracteristicas)
      ); 

   let productosColor = productos.filter(
    (producto, index, self) =>
      index === self.findIndex(p => p.info.elementos[0].color === producto.info.elementos[0].color)
  ); 

   
    

    return(

        <FiltrosDiv $abierto={abierto} className="divFiltros">

            <div className="filtro" >
                <h2 onClick={()=>{if (getAperturaCategoria == true) {
                setAperturaCategoria(false)
            }else setAperturaCategoria(true)}}>Categoria</h2>
                <ImgCategoria onClick={()=>{if (getAperturaCategoria == true) {
                setAperturaCategoria(false)
            }else setAperturaCategoria(true)}} $Apertura={getAperturaCategoria}src="../public/flechaAbajo.png" alt="" />
                <AperturaCategoria $Apertura={getAperturaCategoria}>

                   {productosCategoria.map(producto=>(
                        <button className="botonFiltros" onClick={()=>{if (revisar(producto.info.caracteristicas)) {
                            eliminar(producto.info.caracteristicas)
                        }else agregar(producto.info.caracteristicas)}} >{producto.info.caracteristicas}</button>
                   )
                    )}

                </AperturaCategoria>
            </div>

            <div className="filtro" >
                <h2 onClick={()=>{if (getAperturaColor == true) {
                setAperturaColor(false)
            }else setAperturaColor(true)}}>Color</h2>
                <ImgColor onClick={()=>{if (getAperturaColor == true) {
                setAperturaColor(false)
            }else setAperturaColor(true)}} $Apertura={getAperturaColor} src="../public/flechaAbajo.png" alt="" />
                <AperturaColor $Apertura={getAperturaColor}>

                {productosColor.map(producto=>(
                        <button type="button" onClick={()=>{if (revisarColor(producto.info.elementos[0].color)) {
                            eliminarColor(producto.info.elementos[0].color)
                        }else agregarColor(producto.info.elementos[0].color)}} className="botonFiltros">{producto.info.elementos[0].color}</button>
                   )
                    )}

                </AperturaColor>
            </div>

            

        </FiltrosDiv>

    )

}
let FiltrosDiv = styled.div`


    width: 30%;
    transition: all 0.5s ease;
    width: ${(param)=>(param.$abierto?"30%":"0")};

`
let AperturaCategoria = styled.div`

    margin-top: 30px;
    width: 100%;
    transition: all 0.5s ease;
    height: ${(param)=>(param.$Apertura?"200px":"0")};
    overflow: hidden;
    
`

let AperturaColor = styled.div`

    margin-top: 30px;
    width: 100%;
    transition: all 0.5s ease;
    height: ${(param)=>(param.$Apertura?"200px":"0")};
    overflow: hidden;
    
`

let ImgCategoria = styled.img`

    transition: all 0.5s ease;  
    transform: rotate(${(param)=>(param.$Apertura?"180deg":"0deg")});

`

let ImgColor = styled.img`

    transition: all 0.5s ease;  
    transform: rotate(${(param)=>(param.$Apertura?"180deg":"0deg")});

`