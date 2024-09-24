import React from "react";
import dog4 from "../../image/dog4.png"

export default function About() {
    return (
    <div className="about">
      <div className="container-flex">
         <div className="aboutImage">
            <img src={dog4} alt="glassesDog" />
         </div>
         <div className="aboutCard">
               <h1>About Us</h1>
               <p>We are a company that loves dogs and that's why we try to offer them the best, from tasty and healthy food, interactive toys, clothes to protect their fur in cold weather, to our unconditional affection.</p>
         </div>
      </div>
         <ul className="list-group">
            <li className="list-group-item">“If you don’t own a dog, at least one, there is not necessarily anything wrong with you, but there may be something wrong with your life.” – Roger A. Caras</li>
            <li className="list-group-item">“Dog is God spelled backward.” – Duane Chapman</li>
            <li className="list-group-item">“I’ve seen a look in dogs’ eyes, a quickly vanishing look of amazed contempt, and I am convinced that basically dogs think humans are nuts.” – John Steinbeck</li>
            <li className="list-group-item">“There’s a saying. If you want someone to love you forever, buy a dog, feed it and keep it around.” – Dick Dale</li>
            <li className="list-group-item">“My favorite type of pet has always been a dog. They’re loyal, kind, and offer endless affection. My friend Eric says, ‘The more people I meet, the more I like my dog.’ Funny thought.” – Brendon Urie</li>
            <li className="list-group-item">“Dogs do speak, but only to those who know how to listen.”– Orhan Pamuk</li>
            <li className="list-group-item">“You can usually tell that a man is good if he has a dog who loves him.” – W. Bruce Cameron</li>
         </ul> 
    </div>
    );
};
