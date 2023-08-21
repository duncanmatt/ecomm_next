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
      <div className='flex items-center bg-90 rounded-xs'>
        <button
          className='z-1 btn--minus relative w-[1.875rem] h-[1.875rem]'
          onClick={() => dispatch(decrementQty(pk))}
        >
          <span className='minus'></span>
        </button>
        <div className='h-[1.875rem] flex items-center border-1 border-transparent'>
          <span className='px-1 font-medium text-lg text-15'>{qty}</span>
        </div>
        <button
          className='z-1 btn--plus relative w-[1.875rem] h-[1.875rem]'
          onClick={() => dispatch(incrementQty(pk))}
        >
          <span className='plus'></span>
        </button>
      </div>
      <button className='stroke-0' onClick={() => dispatch(removeItem(pk))}>
        <TrashCanIcon />
      </button>
    </div>
  );
};

export default QuantityBar;
