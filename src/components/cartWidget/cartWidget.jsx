import { BiCart } from 'react-icons/bi';
import './cartWidget.css';

function CartWidget(){
    return(
      <div className='CartWidget-container'>
          <BiCart className='cartWidget' />
      </div>  
    );
    
};

export default CartWidget;