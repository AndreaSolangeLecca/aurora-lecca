import React from 'react';
import {BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import { CarritoContext } from './components/context/carritoContext'
import NavBar from './components/NavBar/NavBar'
import ItemListContainer from './components/container/ItemListContainer'
import ItemDetailContainer from './components/container/ItemDetailContainer/ItemDetailContainer'
import Cart from './components/container/Cart/Cart'
import Gifs from './components/container/Gifs/Gifs'
import AuroraContenido from './components/container/Aurora/AuroraContenido'
import './components/container/ItemListContainer.css'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'

function App() {
  return (
      <CarritoContext>
        <BrowserRouter>
            <div>
              <NavBar />
              <Routes>
                <Route index path='/' element={<ItemListContainer /> }/>
                <Route path='/categoria/:categoriaId' element={<ItemListContainer /> }/>
                <Route path='/detail/:id' element={<ItemDetailContainer />}/>
                <Route path='/cart' element={<Cart />} />
                <Route path='/gifs' element={<Gifs />} />
                <Route path='/Aurora' element={<AuroraContenido />} />
                <Route path='*' element={ <Navigate to='/'/> }/>
              </Routes>
            </div>
        </BrowserRouter>
      </CarritoContext>

    
  );
}

export default App;
