import React from 'react';
import './cart-item.styles.scss'

const CartItem = ({cartItem}) => {
    const { imageUrl, price, name, quantity } = cartItem;
    return (
        <div>
            <div className='cart-item-container'>
      <img src={imageUrl} alt={`${name}`} />
      <div className='item-details'>
        <span className='name'>{name}</span>
        <span className='price'>
          {quantity} x ${price}
        </span>
      </div>
    </div>
        </div>
    );
}

export default CartItem;
