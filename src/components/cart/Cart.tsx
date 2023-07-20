import { useState } from 'react';
import { useSelector } from '../../../lib/redux/store';
import {
  cartCount,
  cartTotal,
  cartItems,
} from '../../../lib/redux/slices/cartSlice/selectors';

const Cart = () => {
  const count = useSelector(cartCount);
  const price = useSelector(cartTotal);
  const items = useSelector(cartItems);

  return (
    <div>
      <div>Cart</div>
      <span>{count}</span>
      <br />
      <span>{price}</span>
      <div>
        <ul>
          {items.map((item, index) => (
            <li key={index}>
              <span>{item.name}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Cart;
