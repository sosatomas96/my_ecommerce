import './ProductCard.css';
import {useState, useContext} from 'react';
import {Store} from '../../../store';



function ProductCard({title, photo, price,}){

    const [data, setData] = useContext(Store);

    function AddCart(){
        setData({...data, qty: data.qty + quantity})
    }

    

    const [quantity, setQuantity] = useState(1);

    function addQuantity(){
        setQuantity(quantity+1);
    }

    function substractQuantity(){
        setQuantity(quantity-1);
    }


    return(
        <> 
            <div className='card-container'>
               
               
                <img src='https://placehold.it/300x300' alt='imagen de prueba' className='img-product'/> 
                    
                <h3 className='product-title'>{title}</h3>
                <span className='price'>{price}</span>
                <div className='flex-qty'>
                <button disabled={quantity === 1 ? 'disabled' : null } onClick={substractQuantity} className='btn-qty'>-</button>
                <label>{quantity}</label>
                <button onClick={addQuantity} className='btn-qty'>+</button>
                </div>
                <button className='btn-add-cart' onClick={()=> AddCart}>Añadir al carrito!</button>
                
            </div>
        </>
    )
}

export default ProductCard;