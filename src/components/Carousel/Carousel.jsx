import './Carousel.css';
import Carousel from 'react-bootstrap/Carousel'
import Logo from "../../assets/logo.png";
import Encendedores from '../../assets/encendedores.jpg';
import Treemix from '../../assets/treemix.jpg';
import Tierra from '../../assets/tierra.jpg';

function Carousel(){
    
    return(

        <>
            <Carousel>
            <Carousel.Item>
                <img
                className="d-block w-100"
                src={Logo}
                alt="First slide"
                />
                <Carousel.Caption>
                <h3>First slide label</h3>
                <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                <img
                className="d-block w-100"
                src={Encendedores}
                alt="Third slide"
                />

                <Carousel.Caption>
                <h3>Second slide label</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                <img
                className="d-block w-100"
                src={Treemix}
                alt="Third slide"
                />

                <Carousel.Caption>
                <h3>Third slide label</h3>
                <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                </Carousel.Caption>
                </Carousel.Item>
                </Carousel>
        </>
    )    
}

export default Carousel;