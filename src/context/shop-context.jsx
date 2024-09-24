import React, {createContext, useState} from "react";
import { Products } from "../products";

export const ShopContext = createContext(null);

const getDefaultItem = () => {
    let cart = {};
    for ( let i = 1; i < Products[0].clothes.length * 3 ; i++) {
        cart[i] = 0;
    };
    return cart;
}


export const ShopContextProvider = (props) => {

    const [cartItems, setCartItems] = useState(getDefaultItem());

    const getTotalAmount = () => {

        let totalAmount = 0;
        for (const item in cartItems) {
            if(cartItems[item] > 0) {
                let itemInfo = Object.values(Products[0]).flat().find(product => product.id === Number(item))
                totalAmount += cartItems[item] * itemInfo.price;
            }         
        }
        return totalAmount.toFixed(2);
    }
 
    const getCartItems = () => {
        let products = [ ];
        for (const item in cartItems) {
            if(cartItems[item] > 0) {
                let itemInfo = Object.values(Products[0]).flat().find(product => product.id === Number(item));
                products.push(itemInfo);
            }
           
        }
        return products;
    }

    const addToCart = (itemId) => {
       setCartItems((prev) => ({...prev, [itemId]: prev[itemId] + 1}))
    };
    const removeFromCart = (itemId) => {
        setCartItems((prev) => ({...prev, [itemId]: prev[itemId] - 1}))
     };

    const updateAmountItem = (newAmount, itemId)  => {
        setCartItems((prev) => ({...prev, [itemId]: newAmount}))
    };
    

    return (
        <ShopContext.Provider 
         value={{ cartItems, addToCart, removeFromCart, updateAmountItem, getTotalAmount, getCartItems }}>
            {props.children}      
        </ShopContext.Provider>
    );
}
