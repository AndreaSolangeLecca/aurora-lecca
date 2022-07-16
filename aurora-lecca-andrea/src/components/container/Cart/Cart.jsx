import React, { useContext } from "react"
import { CartContext } from '../../context/carritoContext'

const Cart = () => {

    const [cart, agregarAlCarrito] = useContext(CartContext)

    return (

           <div>
            
                Cart

           </div>

    )
}

export default Cart