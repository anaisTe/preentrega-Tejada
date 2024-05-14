import CartWidget from './CartWidget';
import { BiShoppingBag } from "react-icons/bi";
import "./NavBar.scss";
import { Link } from 'react-router-dom';

const NavBar = () => {
    return(
        <div className='box-navbar-general'>
            <nav className="navbar navbar-expand-lg">
                <div className="container-fluid">
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className='nav-logo'>
                        <BiShoppingBag size={24} />
                        <a className="navbar-brand" href="/">Quinaa</a>
                    </div>
                    <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                    <div className="navbar-nav">
                        <a className="nav-link active" aria-current="page" href="/">Inicio</a>
                        <Link className="nav-link" to="/category/bolsos">Bolsos</Link>
                        <Link className="nav-link" to="/category/belleza">Belleza</Link>
                        <Link className="nav-link" to="/category/zapatos">Zapatos</Link>
                    </div>
                    </div>
                    <CartWidget/>
                </div>
            </nav>
        
        </div>
    )
}

export default NavBar