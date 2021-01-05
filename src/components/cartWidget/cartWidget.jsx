import { useHistory } from 'react-router-dom';
import { BiCart } from 'react-icons/bi';
import { useState } from 'react';
import './CartWidget.css';


function CartWidget (){

    const RouteHistory = useHistory();

    const [ShowWidgetCart, setShowWidgetCart] = useState(false);

    const OpenWidgetCart = () => {
      setShowWidgetCart(!ShowWidgetCart);

    }

    const RedirectCart = () => {
      RouteHistory.push('/Cart');
    }

    return(
      <>
          <BiCart 
            className='cartWidget' 
            onClick={RedirectCart}
          />
          {/*
          <div className={`widgetCart ${ShowWidgetCart && 'open'}`}>
            <div>
              <button onClick={RedirectCart}>Ir al carrito...</button>
            </div>
          </div>
          */}
      </>  
    )
    
}
export default CartWidget;