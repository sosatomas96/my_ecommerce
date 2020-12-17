import './ProductCard.css';
import {useState} from 'react';



function ProductCard({title, photo, price,}){

    const [quantity, setQuantity] = useState(1);

    function addQuantity(){
        setQuantity(quantity+1);
    }

    function substractQuantity(){
        setQuantity(quantity-1);
    }


    return(
        <>
        <div id='card-container'>
             <img src='https://placehold.it/300x300' alt='imagen de prueba'/> 
                <div className='card-container'>
               
               
                    
                    <h3>{title}</h3>
                    <span>{price}</span>
                    <button disabled={quantity === 1 ? 'disabled' : null } onClick={substractQuantity}>-</button>
                    <label>{quantity}</label>
                    <button onClick={addQuantity}>+</button>
                
                <button>Añadir al carrito!</button>
                
                </div>
        </div>
        </>
    )
}

export default ProductCard;