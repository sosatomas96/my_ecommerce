import {useState, useEffect, createContext} from 'react';
import {Products} from '../products';
export const Store = createContext();

const StoreProvider = ({ children }) => {
    const [cart, setCart] = useState([]);
    const [products, setProducts] = useState([]);

    const addToCart = productId => {
        const prodAlCart = products.filter(prod => prod.id === productId)[0];
        if (!prodAlCart.quantity) {
            prodAlCart.quantity = 1;
            setCart([...cart, prodAlCart]);
        } else {
            cart[cart.indexOf(prodAlCart)].quantity++;
            setCart([...cart]);
        }
    };


const deleteFromCart = productId => {
    const prodFueraDeCart = cart.filter(prod => prod.id !== productId);
    setCart(prodFueraDeCart);
};

useEffect(() => {
 setProducts(Products);
}, [cart]);

return (
    <Store.Provider 
        value={{
            cart,
            products,
            addToCart,
            deleteFromCart
        }}
    >
        {children}
    </Store.Provider>
);};
