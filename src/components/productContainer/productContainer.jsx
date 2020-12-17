import ProductCard from './productCard/productCard';
import './productContainer.css';

function ProductContainer(){
    return(
        <>
        <div id='product-container'>
            <div className='product-container'>
                    <ProductCard title='Encendedores'
                                 price='$300'
                                 />
            </div>
        </div>
        </>
    )
}

export default ProductContainer;