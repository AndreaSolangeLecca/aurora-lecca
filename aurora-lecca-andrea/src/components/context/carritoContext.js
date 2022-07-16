import React, {context, useState} from 'react';

export const CartContext = React.createContext()

export const CarritoContext = ({children}) =>{
    const [cart, setCart] = useState([])

    const estaEnCarrito = (id) => {}

    const agregarAlCarrito = (item) => {
      cart.push(item)
    }

    const quitarDelCarrito = (id) => {}
    const vaciarCarrito = () => {}


    return(
        <CartContext.Provider value={[cart, agregarAlCarrito]}>
                {children}
        </CartContext.Provider>
    )

}