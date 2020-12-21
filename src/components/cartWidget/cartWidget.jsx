import {useState} from 'react';
import { BiCart } from 'react-icons/bi';
import './CartWidget.css';

function CartWidget(){

    const[ShowCartWidget, setShowCartWidget] = useState(false);

    return(
      <div className='CartWidget-container'>
          <BiCart show={ShowCartWidget} className='cartWidget' />
      </div>  
    );
    
};

export default CartWidget;