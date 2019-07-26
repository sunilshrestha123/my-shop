import React from 'react';
import './card.styles.css';
import { Card } from '../card/card.component';

export const CardList = props => {
  return (
    <div className='card-list'>
      {props.products.map(product => (
        <Card key={product.id} product={product} />
      ))}
    </div>
  );
};

// export default CartList;
