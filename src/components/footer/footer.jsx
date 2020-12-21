import { GrInstagram, GrYoutube } from "react-icons/gr";
import NavItem from '../NavItem/NavItem'
import './Footer.css';

function Footer(){
    return(
        
        <div className='footer-container'>
            <div className='footer-links-container'>
              <NavItem text='Parafernalia' url='#' className='footer-link'/>
              <NavItem text='Cultivo' url='#' className='footer-link'/>
              <NavItem text='Contacto' url='#' className='footer-link'/>
            </div>
            <div className='footer-icons-container'>
              <GrInstagram className='instagram-icon'/>
              <GrYoutube className='youtube-icon'/>
            </div>
        </div>
    )
}

export default Footer;