import React from 'react';
import Carousel from 'react-material-ui-carousel'
import { CardMedia, Typography } from '@material-ui/core'
import Logo from "../../assets/logo.png";
import Encendedores from '../../assets/encendedores.jpg';
import Treemix from '../../assets/treemix.jpg';
import Tierra from '../../assets/tierra.jpg';

function HomeCarousel(){
    var items = [
        {
            name: "Logo",
            image: "../../assets/logo.png"
        },
        {
            name: "Encendedores",
            image: "../../assets/logo.png"
        },
        {
            name: 'Treemix',
            image: "../../assets/logo.png"
        },
        {
            name: 'Tierra',
            image: "../../assets/logo.png"
        },
    ]
 
    return (
        <Carousel>
            {
                items.map( (item, i) => <Item key={i} item={item} /> )
            }
        </Carousel>
    )
}
 
function Item(props)
{
    return (
        <CardMedia style={{ height: "300px" }}
                    className="Media"
                    image={props.image}
                    title={props.name}
        >
        <Typography className="MediaCaption">
                    {props.name}
        </Typography>
        </CardMedia>
    )
}
export default HomeCarousel;