import { useState } from 'react';
import { useSelector } from '../../../lib/redux/store';
import { cartCount } from '../../../lib/redux/slices/cartSlice/selectors';

const Cart = () => {
	const count = useSelector(cartCount);
	return (
		<div>
			<div>Cart</div>
			<span>{count}</span>
		</div>
	);
};

export default Cart;
