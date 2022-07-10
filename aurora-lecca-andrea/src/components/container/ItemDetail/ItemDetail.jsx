import React from 'react'
import './itemDetail.css'
const ItemDetail = ({data}) => {
  
    return(
            <div className='contenedorDetalle'>
                <div className='contenedor-flex'>
                    <figure><img className='imgDetalle'src={data.foto} alt=''/></figure>
                    <div className='detalle'>
                                         <h1 className='tituloDetalle'>{data.name}</h1>
                                         <h2 className='subtituloDetalle'>{data.categoria}</h2>
                                         <h3 className='precioDetalle'>{data.precio}</h3>
                                         <p className='parrafoDetalle'>{data.parrafo}</p>
                                         <button className="btn btn-outline-primary btn-block">
                                              {data.boton}
                                        </button>
                    </div>
                </div>

            </div>
               
    );
}
export default ItemDetail