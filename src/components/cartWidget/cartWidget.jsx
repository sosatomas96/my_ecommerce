import { BiCart } from 'react-icons/bi';
import {useState} from 'react';
import './CartWidget.css';


function CartWidget ({show}){

    const [ShowWidgetCart, setShowWidgetCart] = useState (false);

    const OpenWidgetCart = () => {
      setShowWidgetCart(!ShowWidgetCart);
    }


    return(
      <div className={`widgetCart ${show ? 'open' : 'close'}`}>
          <BiCart 
            className='cartWidget' 
            onClick={OpenWidgetCart}
          />
          
      </div>  
    );
    
};

export default CartWidget;