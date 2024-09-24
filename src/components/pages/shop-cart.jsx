import React, {useContext} from 'react';
import { ShopContext } from "../../context/shop-context";
import DeleteIcon from '@mui/icons-material/Delete';

export const ShopCart = (props) => {

    const { id, title, img, price } = props.data;

    const { cartItems, addToCart, removeFromCart, updateAmountItem } = useContext(ShopContext);


  return (
    
        <li className="itemCart"  >
            <div className="imgName">
                <img  
                    src={img} 
                    width={120} 
                    alt="itemShop"/>
                <div className='titleCartShop' >
                    <p className= "px-5">{title}</p>
                </div>
            </div>
            <div className="countHandle">
                <button onClick={() => removeFromCart(id)}> - </button>
                <input value={cartItems[id]} onChange={(e) => updateAmountItem(Number(e.target.value), id)} />
                <button onClick={() => addToCart(id)}> + </button>
            </div>
            <div>
                <p className="price">${price}</p>
            </div>
            <button onClick={() => removeFromCart(id)} className="trashBtn"><DeleteIcon sx={{fontSize: 30}} className="trash"/></button>
        </li>
  );
};
