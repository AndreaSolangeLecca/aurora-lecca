import ItemDetail from "../ItemDetail/ItemDetail"
import { useState, useEffect } from 'react'
const detalleproducto = { id: '1' , categoria: 'Anillos', name: 'Anillo Iris', precio: '10.000' , foto: '../../../img/anillo01.jpg' , boton: 'Añadir al carrito' , parrafo:'Todos nuestros anillos incluyen un ajustede medida sin cargo, por tres meses. Se entrega la garantía escrita de por vida en cuanto al título del metal y calidad de las piedras.'};


const ItemDetailContainer = () => {
    const [data, setData] = useState({});
    
    useEffect(() =>{
        const getData = new Promise(resolve =>{
            setTimeout(() =>{
                resolve(detalleproducto);
            }, 2000);
        })

        getData.then(res => setData(res))
    },[])

    return(
            <div>
                <ItemDetail data={data}/>
            </div>       
    )
}

export default ItemDetailContainer