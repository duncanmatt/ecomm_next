import { useSelector } from '../../../lib/redux/store';
import {
	cartCount,
	cartTotal,
	cartItems,
} from '../../../lib/redux/slices/cartSlice/selectors';
import { CartItem } from '../../../interfaces';

const Cart = () => {
	const count = useSelector(cartCount);
	const items = useSelector(cartItems);
	const price = useSelector(cartTotal);

	return (
		<div>
			<div>Cart</div>
			<span>{count}</span>
			<br />
			<span>${price}</span>
			<div>
				<ul>
					{items.map((item: CartItem, index: number) => (
						<li key={index}>
							<span>
								{item.name}({item.qty})
							</span>
						</li>
					))}
				</ul>
			</div>
		</div>
	);
};

export default Cart;
