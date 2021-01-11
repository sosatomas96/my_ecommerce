import ProductCard from './ProductCard/ProductCard';
import {Products} from '../../products';
import './ProductContainer.css';

function ProductContainer(){

    

    return(
        <>
            
                <div className='product-container'>
                        
                            <ProductCard 
                                title='Encendedores'
                                price='$300'
                            />
                            <ProductCard 
                                title='Picadores'
                                price='$700'
                            />
                            <ProductCard 
                                title='Papelillos'
                                price='$100'
                            />
                            <ProductCard 
                                title='Pipas'
                                price='$400'
                            />
                </div>
            
        </>
    )
}

export default ProductContainer;