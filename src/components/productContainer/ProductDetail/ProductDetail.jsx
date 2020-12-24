import './ProductDetail.css';
import {useState} from 'react';

function ProductDetail ({title, price}) {
    
    const [qty, setQty] = useState(1);

    function addQty(){
        setQty(qty+1);
    }

    function substractQty(){
        setQty(qty-1);
    }

    return(
        
        <>
            <div className='container'>
                <h2>{title}</h2>
                <img src='https://placehold.it/400x300' alt='imagen de prueba' className='img-product'/> 
                <span className='price'>{price}</span>
                <button disabled={qty === 1 ? 'disabled' : null } onClick={substractQty} className='btn-qty'>-</button>
                <label>{qty}</label>
                <button onClick={addQty} className='btn-qty'>+</button>
                <button className='btn-add-cart'>Añadir al carrito!</button>
            </div>
        </>
    )
}


export default ProductDetail;