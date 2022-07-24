
import iconoCarrito from './icono-carrito.png'
import './cartwidget.css'
import { useCartContext } from '../../components/context/carritoContext'

const CartWidget = () => {
    const { items } = useCartContext()
    let itemsInCart = 0;

    items.map((item) => {
        itemsInCart = itemsInCart + item.qty;
    })

    return(
        <div className='contenedor-carrito'>
            <div>
                {itemsInCart}
            </div>
            <img src={iconoCarrito} alt="carrito" className='carrito'/>
        </div>
    )
}
export default CartWidget