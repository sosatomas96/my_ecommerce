import './Navbar.css';
import NavItem from '../NavItem/NavItem';
import CartWidget from '../CartWidget/CartWidget';
import {Link} from 'react-router-dom';
import {useState} from 'react';

function Navbar({text, show}) {
 

    return(
        <header> 
            <div className='container'>
                <nav> 
                    <ul id='navbar'>
                        <Link to='/'>
                            <NavItem text='Inicio'/>
                        </Link>
                        <Link to='/products'>
                            <NavItem text='Productos'/>
                        </Link>
                        <Link to='/contact'>
                            <NavItem text='Contacto'/>
                        </Link>
                        <CartWidget />
                    </ul>
                </nav>
            </div>
        </header>
    );
};

export default Navbar;