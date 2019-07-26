import React from 'react';
import './card.styles.css';
export  const Card = props => {
  return (
    <div className='card-container'>
      <img
        alt='img'
        src={`https://robohash.org/${props.product.id}?set=set2`}
      />
      <h1>{props.product.name}</h1>
      <p>{props.product.email}</p>
    </div>
  );
};
