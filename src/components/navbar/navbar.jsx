import './navbar.css';
import NavItem from '../navbar-item/navbar-item';
import CartWidget from '../cartWidget/cartWidget';

function Navbar({text, url}) {
    return(
        <header> 
            <div className='container'>
                <nav> 
                    <ul id='navbar'>
                        <NavItem text='Seccion 1' url='#'/>
                        <NavItem text='Seccion 2' url='#'/>
                        <NavItem text='Seccion 3' url='#'/>
                        <CartWidget/>
                    </ul>
                </nav>
            </div>
        </header>
    );
};

export default Navbar;