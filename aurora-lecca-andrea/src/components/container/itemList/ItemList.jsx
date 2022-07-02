import React from 'react'
import { Item } from '../item/Item.js'
import { useState, useEffect } from 'react'
import './itemList.css'


const ItemList = ({itemlist}) => {
    const [products, setProducts] = useState([])
    const [loading, setLoading] =useState(true)

    useEffect(() => {
        Item 
        .then(resp => setProducts(resp))
        .catch(err => console.log(err))
        .finally(() => setLoading(false))
    }, [])
    console.log(products)

    return(
        <div>
               {loading ? <h2>Cargando...</h2> 
                :
                products.map(prod =>
                                    <div key={prod.id} className="col-md-4 p-1">
                                        <div className="card w-100 mt-5">
                                                 <div className="card-header">
                                                     {`${prod.name} - ${prod.categoria}`}
                                                </div>
                                                 <div className="card-body">
                                                    <img src={prod.foto} alt='' className="w-50"/>
                                                    {prod.precio}
                                                </div>
                                                <div className="card-footer">
                                                        <button className="btn btn-outline-primary btn-block">
                                                                VER MÁS
                                                        </button>
                                                </div>
                                        </div>
                                    </div>
                )}
        </div>

    )
}


export default ItemList