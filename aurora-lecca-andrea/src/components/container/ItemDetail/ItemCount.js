import {useState} from 'react'
import './itemCount.css'
export const ItemCount =({stock, onAdd, initial}) =>{
    const [count, setCount] = useState(initial);
    
    const restar = () =>{
        if(count > initial ) {
                setCount(count - 1)
        }
    }
    
    const sumar = () => {
        if (count < stock){
            setCount(count + 1)
        }
    } 

    return(
    <> <div class="cajaContador">
            <div class="container-counter">
               <button onClick={sumar} type="button" class="btn btn-outline-secondary">+</button>
               <p>{count}</p>
               <button onClick={restar} type="button" class="btn btn-outline-secondary" disabled="">-</button>
             </div>
             <button disabled={count === 0} onClick={()=>onAdd( count)} className="btn btn-outline-primary btn-block"> Agregar al carrito</button>
        </div>
    </>

    )
}