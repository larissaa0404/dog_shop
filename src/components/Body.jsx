import React from "react";
import dog1 from "../image/dog1.png";
import dog2 from "../image/dog2.png";
import dog3 from "../image/dog3.png";


export default function Body() {
    return (
        <div>
            <div className="container-grid py-0 mb-5">
        
                    <div className="homePage">
                        <h1>Dog Shop</h1>
                    </div>
                 
                    <div className="cardDog">  
                            <img className="dog" src={dog2} alt="seriousDog" />
                    </div>
                    <div className="runDog">
                        <img src={dog3} alt="funnyDog" />
                    </div>
                </div>
            
        </div>
    );
};

