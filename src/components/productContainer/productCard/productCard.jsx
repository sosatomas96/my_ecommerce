import './productCard.css';




function productCard({title, photo, quantity, price,}){
    return(
        <>
        <div id='card-container'>
            {/* <img src='https://placehold.it/300x300'/> */}
                <div className='card-container'>
               
               
                    <img src={photo}/>
                    <h3>{title}</h3>
                    <span>{price}</span>
            
                
                <button>Añadir al carrito!</button>
                
                </div>
        </div>
        </>
    )
}

export default productCard;