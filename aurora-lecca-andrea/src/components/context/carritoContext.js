import React, {createContext, useState, useContext} from 'react';

const CartContext = createContext()
export const useCartContext = () => useContext(CartContext)

export const CarritoContext = ({children}) =>{
    const [items, setItems] = useState([])

    const isInCart = (id) =>{
      const found = items.find(item => item.id === id);
      return found;

    }

  const addItem = (item, qty) =>{
      isInCart(item.id)
      ?
      setItems(items.map((prod) => {
          if (prod.id === item.id){
              prod.qty += qty
          }
           return prod
      }))
      :
      setItems([...items, { id: items.id, name: items.name, price: items.precio, qty: qty }])

  }

  const removeItem = (id) => {
       setItems(items.filder(item => item.id !== id))
  }
  
  const clearItems = () => {
    setItems([])
  }
    return(
        <CartContext.Provider value={{ items, addItem, removeItem, clearItems }}>
                {children}
        </CartContext.Provider>
    )

}