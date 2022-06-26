import iconoCarrito from './icono-carrito.png'
import './cartwidget.css'
const CartWidget = () => {
    return(
        <div className='contenedor-carrito'>
            <img src={iconoCarrito} alt="carrito" className='carrito'/>
        </div>
    )
}
export default CartWidget