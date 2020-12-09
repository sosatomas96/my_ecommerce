import { BiCart } from 'react-icons/bi';
import './cartWidget.css';

function CartWidget(){
    return(
      <div>
          <BiCart className='cartWidget' />
      </div>  
    );
    
};

export default CartWidget;