import logo from './logo-aurora.png'
import CartWidget from '../CartWidget/CartWidget'
import './navbar.css'
function NavBar() {
    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-light">
                <div className="container-fluid">
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarTogglerDemo01">
                        <a className="navbar-brand" href="#"><img src={logo} alt="logo-aurora" className="logoAurora"/></a>
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <a className="nav-link active" aria-current="page" href="#">INICIO</a>
                            </li>
                            <li className="nav-item dropdown">
                                <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">JOYAS</a>
                                <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                                    <li><a class="dropdown-item" href="#">ANILLOS</a></li>
                                    <li><a class="dropdown-item" href="#">COLLARES</a></li>
                                    <li><a class="dropdown-item" href="#">AROS</a></li>
                                    <li><a class="dropdown-item" href="#">PULSERAS</a></li>
                                </ul>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">GIFS</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">AURORA</a>
                            </li>
                        </ul>
                        <CartWidget/>
                        <form className="d-flex">
                            <input className="form-control me-2" type="search" placeholder="Buscar producto" aria-label="Search"/>
                                <button className="btn btn-outline-dark" type="submit">Buscar</button>
                        </form>
                    </div>
                </div>
            </nav>
        </>
    )
}
export default NavBar 