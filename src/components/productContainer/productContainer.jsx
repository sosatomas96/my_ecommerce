import cardProduct from './cardProduct/cardProduct';
import './productContainer.css';

function ProductContainer(){
    return(
        <div id='product-container'>
            <div className='product-container'>
                    <cardProduct/>
            </div>
        </div>
    )
}

export default ProductContainer;