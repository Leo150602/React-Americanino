import { useState } from "react"
import ProductosCatalogo from "../../components/productosCatalogo/ProductosCatalogo"
import "./catalogo.css"

export default function Catalogo(){

    let productos= [

        {
            id:1,
            foto:"producto1.1.webp",
            nombre:"producto 1",
            precio:"10000"
        },
        {
            id:2,
            foto:"producto2.1.webp",
            nombre:"producto 2",
            precio:"10000"
        },
        {
            id:3,
            foto:"producto3.1.webp",
            nombre:"producto 3",
            precio:"10000"
        },
        {
            id:4,
            foto:"producto4.1.webp",
            nombre:"producto 4",
            precio:"10000"
        },
        {
            id:5,
            foto:"producto5.1.webp",
            nombre:"producto 5",
            precio:"10000"
        },
        {
            id:6,
            foto:"producto6.1.webp",
            nombre:"producto 6",
            precio:"10000"
        }

    ]

    
    return(
        <div>
            <div className="barraFiltrado">
                <button className="ordenarPor">Ordenar Por</button>
                <p className="cantidadProductos">{productos.length} Productos</p>
                <button className="filtros">Filtros
                    <img src="../public/filter.png" />
                </button>
            </div>

            <div className="separacion" />

            <div className="catalogoProductos">

                {productos.map(producto=>
                {

                    return<ProductosCatalogo producto={producto} id={producto.id} />
                }
                    
                )}

            </div>

        </div>
        

    )


}