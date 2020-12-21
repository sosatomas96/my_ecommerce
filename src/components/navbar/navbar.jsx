import './Navbar.css';
import NavItem from '../NavItem/NavItem';
import CartWidget from '../CartWidget/CartWidget';

function Navbar({text, url}) {
    return(
        <header> 
            <div className='container'>
                <nav> 
                    <ul id='navbar'>
                        <NavItem text='Inicio' url='#'/>
                        <NavItem text='Parafernalia' url='#'/>
                        <NavItem text='Cultivo' url='#'/>
                        <NavItem text='Contacto' url='#'/>
                        <CartWidget/>
                    </ul>
                </nav>
            </div>
        </header>
    );
};

export default Navbar;