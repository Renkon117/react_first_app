import React, {useState,  useEffect} from 'react';
import './App.css';
import {Link} from "react-router-dom";


function ItemDetail({ match }) {
    useEffect(() =>{
        fetchItem();
        console.log(match);
  },[]);

  const [item, setItem] = useState({
      images:{}
  });

  const fetchItem = async () => {
      const fetchItem = await fetch(
          `https://fortnite-public-api.theapinetwork.com/prod09/item/get?ids=${
              match.params.id
            }`
        );
        const item = await fetchItem.json();
        setItem(item);
        console.log(item);
  };

  return (
    <div>
        <h1>{item.name}</h1>
        <img src={item.images.transparent} alt=""/>
        <h3>Description: {item.description}</h3>
        <h4>Rarity: {item.rarity}</h4>
        <h4>Type: {item.type}</h4>

        <Link to="/shop">
        <h3>Go Back to Shop list</h3>
        </Link>
    </div>
    
  );
}

export default ItemDetail;