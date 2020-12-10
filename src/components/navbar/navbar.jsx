import './navbar.css';
import NavItem from '../navbar-item/navbar-item';

function Navbar({text, url}) {
    return(
        <header> 
            <div className='container'>
                <nav> 
                    <ul id='navbar'>
                        <NavItem text='Seccion 1' url='#'/>
                        <NavItem text='Seccion 2' url='#'/>
                        <NavItem text='Seccion 3' url='#'/>
                    </ul>
                </nav>
            </div>
        </header>
    );
};

export default Navbar;