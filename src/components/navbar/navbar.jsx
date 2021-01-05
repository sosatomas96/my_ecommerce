import './Navbar.css';
import CartWidget from '../CartWidget/CartWidget';
import {Link} from 'react-router-dom';


function Navbar() {
 

    return(
        <header> 
            <div className='container'>
                <nav> 
                    <ul id='navbar' className='purple lighten-2'>
                        <li>
                            <Link to='/'>
                                Inicio   
                            </Link>
                        </li>
                        <li>
                            <Link to='/products'>
                                Productos
                            </Link>
                        </li>
                        <li>
                            <Link to='/contact'>
                                Contacto
                            </Link>
                        </li>
                        
                        <CartWidget/>
                    </ul>
                </nav>
            </div>
        </header>
    );
};

export default Navbar;