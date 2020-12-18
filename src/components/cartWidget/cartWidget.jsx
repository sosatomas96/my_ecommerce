import { BiCart } from 'react-icons/bi';
import './CartWidget.css';

function CartWidget(){
    return(
      <div className='CartWidget-container'>
          <BiCart className='cartWidget' />
      </div>  
    );
    
};

export default CartWidget;