
import { useCartContext } from '../../context/carritoContext'

const Cart = () => {

    const {  items, removeItem, clearItems } = useCartContext();

    return (
         
        <div className='container'>
            <div className='contain'>
               {
                  items.map((item) => {
                    <div key={item.id}>
                        <br/>
                        <h3>{item.qty} - {item.name}</h3>
                        <button className="btn btn-outline-primary btn-block" onClick={()=> removeItem(item.id)}>Borrar producto</button>

                    </div>
                  })
               }
               <button className="btn btn-outline-primary btn-block" onClick={()=> clearItems()}>Vaciar carrito</button>
            </div>
        </div>
    )
}

export default Cart