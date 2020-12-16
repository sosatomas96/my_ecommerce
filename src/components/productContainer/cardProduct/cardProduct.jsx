//import './cardProduct.css/';

function cardProduct({product, photo, quantity, price}){
    return(
        <div id='card-container'>
            <img src='https://placehold.it/300x300'/>
            <div className='card-container'>
                <h3>{product}</h3>
                <span>{price}</span>
                <p>{quantity}</p>
                <button>Añadir al carrito!</button>
            </div>
        </div>
    )
}

export default cardProduct;