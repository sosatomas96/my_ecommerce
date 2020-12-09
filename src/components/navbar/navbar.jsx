import './navbar.css';

function Navbar() {
    return(
        <header> 
            <div className='container'>
                <h1 id='title'>Green Purple Growshop</h1>

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
                    </ul>
                </nav>
            </div>
        </header>
    );
};

export default Navbar;