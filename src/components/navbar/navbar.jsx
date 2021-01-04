import './Navbar.css';
import NavItem from '../NavItem/NavItem';
import CartWidget from '../CartWidget/CartWidget';
import {Link} from 'react-router-dom';
import {useState} from 'react';

function Navbar() {
 

    return(
        <header> 
            <div className='container'>
                <nav> 
                    <ul id='navbar' className='purple lighten-2'>
                        <Link to='/'>
                            <NavItem text='Inicio'/>
                        </Link>
                        <Link to='/products'>
                            <NavItem text='Productos'/>
                        </Link>
                        <Link to='/contact'>
                            <NavItem text='Contacto'/>
                        </Link>
                        
                    </ul>
                </nav>
            </div>
            <CartWidget/>
        </header>
    );
};

export default Navbar;