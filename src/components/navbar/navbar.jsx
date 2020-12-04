import './navbar.css';

function Navbar() {
    return(
        <header> 
            <div className='container'>
                <h1>Green Purple Growshop</h1>

                <nav>
                    <ul id='navbar'>
                        <li>
                            <a href='#'>Seccion 1</a>
                        </li>
                        <li>
                            <a href='#'>Seccion 2</a>
                        </li>
                        <li>
                            <a href='#'>Seccion 3</a>
                        </li>
                        <li>
                            <a href='#'>Seccion 4</a>
                        </li>
                        <li>
                            <a href='#'>Seccion 5</a>
                        </li>
                    </ul>
                </nav>
            </div>
        </header>
    )
}

export default Navbar;