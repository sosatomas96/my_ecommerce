import ProductCard from './ProductCard/ProductCard';
import './ProductContainer.css';

function ProductContainer(){
    return(
        <>
        <div id='product-container'>
            <div className='product-container'>
                    <ProductCard 
                        title='Encendedores'
                        price='$300'
                    />
            </div>
        </div>
        </>
    )
}

export default ProductContainer;