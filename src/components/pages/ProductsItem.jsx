import React, { useContext } from 'react';
import ImageListItem from '@mui/material/ImageListItem';
import { useNavigate } from "react-router-dom";
import { ShopContext } from "../../context/shop-context";

const ProductsItem = (props) => {

  const navigate = useNavigate();

  const {cartItems, addToCart} = useContext(ShopContext);

  const login = window.localStorage.getItem("isLogedin");

  const { id, img, title, price } = props.data;
 
  const amountItem = cartItems[id];

  const handleClick = () => {
      if(login) {
        addToCart(id);
      } else {
        navigate("dog_shop/login");
      }
  }
    
  return (
    <ImageListItem className='products' key={props.index}>
             <img className="picture"        
                       srcSet={`${img}?w=248&fit=crop&auto=format&dpr=2 2x`}
                       src={`${img}?w=248&fit=crop&auto=format`}
                      alt={title}
                      loading="lazy"    
           />
           <div className="item">
               <h2>{title}</h2>
                <h2>Price: $ {price}</h2>
             <button onClick={handleClick}>Add to cart {amountItem > 0 && <> ({amountItem}) </>}</button>
         </div>
    </ImageListItem>
  )
}

export default ProductsItem;
