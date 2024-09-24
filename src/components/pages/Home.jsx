import React, {useState} from "react";
import Body from "../Body";
import { Products } from "../../products";
import ProductsItem from "./ProductsItem";


export default function Home() {

   const [ items, setItem] = useState(Products[0].clothes);


    return (
        <div className="mainPage">
            <Body />
            <div className="mainButtons">
                <button onClick={() => setItem(Products[0].toys)}>Toys</button>
                <button onClick={() => setItem(Products[0].clothes)}>Clothes</button>
                <button onClick={() => setItem(Products[0].foods)}>Food</button>
            </div>
            <div className="album mt-5 py-4">

            { Object.keys(items).map((item, i) => (  
                <ProductsItem data={items[item]} index={i} />
            ))}
            
            </div>           
        </div>
    );
};
