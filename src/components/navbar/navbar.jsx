import './navbar.css';

function Navbar() {
    return(
        <header> 
            <div className='container'>
                <h1 id='title'>Green Purple Growshop</h1>

                <nav>
                    <ul id='navbar'>
                        <ui>
                            <a href='#'>Seccion 1</a>
                        </ui>
                        <ui>
                            <a href='#'>Seccion 2</a>
                        </ui>
                        <ui>
                            <a href='#'>Seccion 3</a>
                        </ui>
                        <ui>
                            <a href='#'>Seccion 4</a>
                        </ui>
                        <ui>
                            <a href='#'>Seccion 5</a>
                        </ui>
                    </ul>
                </nav>
            </div>
        </header>
    )
}

export default Navbar;