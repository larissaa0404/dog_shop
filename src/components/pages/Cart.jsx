import React, {useContext} from "react";
import { ShopContext } from "../../context/shop-context";
import { ShopCart } from "./shop-cart";
import { useNavigate } from "react-router-dom";


export default function Cart() {

    const navigate = useNavigate();

    const login = window.localStorage.getItem("isLogedin");

    const userData = JSON.parse(localStorage.getItem("user"));

    const { cartItems, getTotalAmount, getCartItems } = useContext(ShopContext);
 
    const totalAmount = getTotalAmount();

    const products = getCartItems();


  return (
    <>
        <div className="cart" style={{ backgroundColor: "#fdccbc" }}>
             <h1>{login ? `Shopping Cart  ${userData.name}` : "Please Login First"}</h1> 
                <ul className="list-group-cart">
                    { products?.map(product => {               
                        if (cartItems[product.id] !== 0) {
                            return <ShopCart data={product} />; 
                        }   
                        return  <h2>Please Login First</h2>             
                    })}
                </ul>
                <h2><span>Total:</span> ${totalAmount}</h2>
                <button className="continueBtn" onClick={() => navigate('/')}>Continue Shopping</button>
                <button className="checkoutBtn" onClick={() => navigate('/login')}>Checkout</button>
        </div>
    </>
  );
}
