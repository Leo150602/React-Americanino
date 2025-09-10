import "./catalogo.css"
export default function Categoria(){

    return(

        <div className="barraFiltrado">
            <button className="ordenarPor">Ordenar Por</button>
            <p className="cantidadProductos">Productos</p>
            <button className="filtros">Filtros
                <img src="." alt="" />
            </button>
        </div>

    )


}