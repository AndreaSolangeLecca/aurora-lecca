import { ItemCount } from './ItemCount'
import React from 'react'
import { Link } from 'react-router-dom'
import { useCartContext } from '../../context/carritoContext'
import { productosCatalogo } from '../productosCatalogo.js'
import { useState, useEffect } from 'react'
import {useParams} from 'react-router-dom'
import './itemDetail.css'


const ItemDetail = ({item}) => {
    const {addItem} = useCartContext();
    
    const { id } = useParams();
    const [products, setProducts] = useState([]);
    const [loading, setLoading] =useState(true);

   useEffect(() => {

       if (id) {
         productosCatalogo
         .then(res => setProducts(res.filter(prod => prod.id === id)))
         .catch((err) => console.log(err))
         .finally(() => setLoading(false))
       } else{
           productosCatalogo
            .then(resp => setProducts(resp))
            .catch(err => console.log(err))
            .finally(() => setLoading(false))
        }
    },[id])

    return(

        <div>
            {loading ? <h2>Cargando...</h2> 
            :
            products.map(prod =>
                <div key={prod.id} className='contenedorDetalle'>
                    <div className='contenedor-flex'>
                                        <figure className='figureDetalle'><img src={prod.foto} className='imgDetalle' alt=''/></figure>
                                        <div className='detalle'>
                                                <h1 className='tituloDetalle'>{prod.name}</h1>
                                                <h2 className='subtituloDetalle'>{prod.categoria}</h2>
                                                <h3 className='precioDetalle'>{prod.precio}</h3>
                                                <p className='parrafoDetalle'>Todos nuestros anillos incluyen un ajustede medida sin cargo, por tres meses. Se entrega la garantía escrita de por vida en cuanto al título del metal y calidad de las piedras.</p>
                                                 <ItemCount item={item} stock={prod.stock} initial={0} onAdd={addItem} />       
                                                 <Link to='/cart'><button className="btn btn-outline-primary btn-block">Terminar Compra</button></Link>
                                        </div>
                                        
                                       
                    </div>
                </div>
                
            )}
            
        </div>
        
        
    )
}
export default ItemDetail