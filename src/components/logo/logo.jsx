import './Logo.css';
import Logo from "../../assets/logo.png"

function MainLogo(){
    return(
        <div className='logo-container'>
            <img src={Logo} alt='logo' id='logo'/>
        </div>
    )
}

export default MainLogo;