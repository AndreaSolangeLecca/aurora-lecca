import NavBar from './components/NavBar/NavBar'
import ItemListContainer from './components/container/ItemListContainer'
import './components/container/ItemListContainer.css'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'

function App() {
  return (
    <>
    <NavBar />
    <ItemListContainer texto= 'Bienvenidos a Shop online Aurora!' /> 
    </>
    
  );
}

export default App;
