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
    <div className='flex flex-row flex-nowrap items-center flex-1 gap-3'>
      <div className='flex items-center border-1 border-g'>
        <button
          className='z-1 btn--minus relative w-[1.875rem] h-[1.875rem] rounded-circle'
          onClick={() => dispatch(decrementQty(pk))}
        >
          <span className='minus'></span>
        </button>
        <div className='h-[1.875rem] flex items-center border-x-1 border-b'>
          <span className='mx-2 font-bold'>{qty}</span>
        </div>
        <button
          className='z-1 btn--plus relative w-[1.875rem] h-[1.875rem] rounded-circle'
          onClick={() => dispatch(incrementQty(pk))}
        >
          <span className='plus'></span>
        </button>
      </div>
      <span className='cursor-pointer' onClick={() => dispatch(removeItem(pk))}>
        <TrashCanIcon />
      </span>
    </div>
  );
};

export default QuantityBar;
