import logo from './logo-aurora.png'
import CartWidget from '../CartWidget/CartWidget'
import { Link, NavLink } from 'react-router-dom'
import './navbar.css'
function NavBar() {
    return (
        <> <header>
            <nav className="navbar navbar-expand-lg navbar-light">
                <div className="container-fluid">
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div>
                    <NavLink to='/'><img src={logo} alt="logo-aurora" className="logoAurora"/></NavLink>
                    </div>
                    <div className="collapse navbar-collapse" id="navbarTogglerDemo01">
                        
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                            <NavLink to='/'className="nav-link active" aria-current="page" href="#">INICIO</NavLink>
                            </li>
                            <li className="nav-item dropdown">
                                <NavLink to='/' className="nav-link  active dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">JOYAS</NavLink>
                                <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                                    <li><NavLink to='/categoria/Anillos' class="dropdown-item" href="#">ANILLOS</NavLink></li>
                                    <li><NavLink to='/categoria/Collares' class="dropdown-item" href="#">COLLARES</NavLink></li>
                                    <li><NavLink to='/categoria/Aros' class="dropdown-item" href="#">AROS</NavLink></li>
                                </ul>
                            </li>
                            <li className="nav-item">
                                <NavLink to='/gifs' className="nav-link" href="#">GIFS</NavLink>
                            </li>
                            <li className="nav-item">
                            <NavLink to='/Aurora' className="nav-link" href="#">AURORA</NavLink>
                            </li>
                        </ul>
                        <Link to='/cart'>
                            <CartWidget/>
                        </Link>
                        <form className="d-flex">
                            <input className="form-control me-2" type="search" placeholder="Buscar producto" aria-label="Search"/>
                                <button className="btn btn-outline-dark" type="submit">Buscar</button>
                        </form>
                    </div>
                </div>
            </nav>
            </header>
        </>
    )
}
export default NavBar 