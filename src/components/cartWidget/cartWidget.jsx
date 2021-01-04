import {BrowserRouter, Switch, Route} from 'react-router-dom';
import { BiCart } from 'react-icons/bi';
import { useState } from 'react';
import './CartWidget.css';


function CartWidget (){

    const [ShowWidgetCart, setShowWidgetCart] = useState(false);

    const OpenWidgetCart = () => {
      setShowWidgetCart(!ShowWidgetCart);

    }


    return(
      <>
          <BiCart 
            className='cartWidget' 
            onClick={OpenWidgetCart}
          />
          <div className={`widgetCart ${ShowWidgetCart && 'open'}`}>
            <div>
              <a>Ir al carrito...</a>
            </div>
          </div>
      </>  
    )
    
}

export default CartWidget;