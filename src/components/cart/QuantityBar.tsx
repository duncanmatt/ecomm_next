import { useDispatch } from '../../../lib/redux/store';
import {
	removeItem,
	incrementQty,
	decrementQty,
} from '../../../lib/redux/slices/cartSlice';
import TrashCanIcon from '../icons/TrashCanIcon';
import { CartItem } from '../../../interfaces';

type Qty = {
	pk: string;
	qty: number;
};

const QuantityBar = ({ pk, qty }: Qty) => {
	const dispatch = useDispatch();

	return (
		<>
			<div>
				<span
					className='cursor-pointer'
					onClick={() => dispatch(incrementQty(pk))}>
					+
				</span>
				<span className='mx-1 font-bold'>{qty}</span>
				<span
					className='cursor-pointer'
					onClick={() => dispatch(decrementQty(pk))}>
					-
				</span>
			</div>
			<div>
				<span
					className='cursor-pointer'
					onClick={() => dispatch(removeItem(pk))}>
					<TrashCanIcon />
				</span>
			</div>
		</>
	);
};

export default QuantityBar;
