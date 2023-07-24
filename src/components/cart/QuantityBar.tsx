import { useDispatch } from '../../../lib/redux/store';
import {
	removeItem,
	incrementQty,
	decrementQty,
} from '../../../lib/redux/slices/cartSlice';
import TrashCanIcon from '../icons/TrashCanIcon';

type Qty = {
	pk: string;
	qty: number;
};

const QuantityBar = ({ pk, qty }: Qty) => {
	const dispatch = useDispatch();

	return (
		<div className='flex flex-row flex-nowrap items-center justify-evenly'>
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
		</div>
	);
};

export default QuantityBar;
