import { useSelector } from '../../../lib/redux/store';
import QuantityBar from './QuantityBar';
import {
  cartTotal,
  cartItems,
} from '../../../lib/redux/slices/cartSlice/selectors';
import { CartItem } from '../../../interfaces';
import Image from 'next/image';
import Empty from './Empty';
import Link from 'next/link';
import { formatAmountForDisplay } from '../../../utils/stripe-helpers';

const CartModal = () => {
  const items = useSelector(cartItems);
  const price = useSelector(cartTotal);

  return (
    <div className='absolute z-6 top-[64px] w-[20rem] right-[0px]'>
      <div className='p-[0.75rem]'>
        <div className='w-full h-full p-[0.75rem] backdrop-blur-6xl bg-faded shadow-bag rounded-xs'>
          <div className='w-full min-h-[14rem]'>
            {items.length === 0 ? (
              <Empty />
            ) : (
              <div className='grid grid-rows-cart grid-cols-1'>
                <ul className='grid grid-rows-1'>
                  {items.map((item: CartItem, index: number) => (
                    <li className='mb-3' key={index}>
                      <div className='flex w-full flex-row'>
                        <div className='relative h-[7.25rem] w-[5.75rem]'>
                          <Image
                            alt={item.name}
                            src={item.imgUrl}
                            fill
                            placeholder='blur'
                            blurDataURL={item.imgUrl}
                          />
                        </div>
                        <div className='flex flex-1 justify-around ps-1rem flex-col'>
                          <div className='flex items-center justify-between'>
                            <span className='font-bold'>{item.name}</span>
                            <span>${item.price * item.qty}</span>
                          </div>
                          <div className='flex justify-between'>
                            <div className='flex items-center flex-row'>
                              <QuantityBar pk={item.pk} qty={item.qty} />
                            </div>
                          </div>
                        </div>
                      </div>
                    </li>
                  ))}
                </ul>
                <div className='flex shrink gap-2 flex-col self-end font-medium'>
                  <div className='w-full'>
                    <div className='flex flex-row '>
                      Tax
                      <span className='flex flex-1 justify-end'>TBD</span>
                    </div>
                  </div>
                  <div className='w-full'>
                    <div className='flex flex-row'>
                      Subtotal
                      <span className='flex flex-1 justify-end font-semibold'>
                        {formatAmountForDisplay(price, 'usd')}
                      </span>
                    </div>
                  </div>
                  <Link
                    href='/Cart'
                    className='bg-5 w-full text-white font-semibold rounded-xs text-center border-transparent border-2'
                  >
                    View Cart
                  </Link>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartModal;
