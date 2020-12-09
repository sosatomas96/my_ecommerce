import './navbar.css';

function Navbar() {
    return(
        <header> 
            <div className='container'>
                <nav> 
                    <ul id='navbar'>
                        <li className='list-item'>
                            <a href='#'>Seccion 1</a>
                        </li>
                        <li className='list-item'>
                            <a href='#'>Seccion 2</a>
                        </li>
                        <li className='list-item'>
                            <a href='#'>Seccion 3</a>
                        </li>
                    </ul>
                </nav>
            </div>
        </header>
    );
};

export default Navbar;