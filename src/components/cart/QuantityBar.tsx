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
    <div className='flex flex-row flex-nowrap items-center basis-60 justify-between'>
      <div className='flex flex-row'>
        <span
          className='cursor-pointer before:content-["+"] before:flex before:flex-row before:items-center before:font-bold before:justify-center'
          onClick={() => dispatch(incrementQty(pk))}
        ></span>
        <span className='mx-1 font-bold'>{qty}</span>
        <span
          className='cursor-pointer before:content-["-"] before:flex before:flex-row before:items-center font-bold before:justify-center'
          onClick={() => dispatch(decrementQty(pk))}
        ></span>
      </div>
      <div>
        <span
          className='cursor-pointer'
          onClick={() => dispatch(removeItem(pk))}
        >
          <TrashCanIcon />
        </span>
      </div>
    </div>
  );
};

export default QuantityBar;
