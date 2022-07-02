import ItemList from './itemList/ItemList'
import banner from './banner-newcollection.jpg'

import './ItemListContainer.css'



const ItemListContainer = ({greeting}) => { 

    return (
        <>
            <div className='contenedorNewCollection'>
                <figure>
                    <img src={banner} alt='newcollection' className='newCollection'/>
                </figure>
            </div>
            
            <ItemList />
               
        </>
    )
}


export default ItemListContainer