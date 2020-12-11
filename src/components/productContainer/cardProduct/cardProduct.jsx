// import './cardProduct.css/';

function cardProduct({product, photo, quantity, price}){
    return(
        <div id='card-container'>
            {photo}
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