import Layout from '@/components/Layout';
import { useSelector } from '../../lib/redux/store';
import {
  cartTotal,
  cartItems,
  cartCount,
} from '../../lib/redux/slices/cartSlice/selectors';
import QuantityBar from '@/components/cart/QuantityBar';
import Empty from '@/components/cart/Empty';
import { CartItem } from '../../interfaces';
import Image from 'next/image';
import Link from 'next/link';
import { formatAmountForDisplay } from '../../utils/stripe-helpers';
formatAmountForDisplay;

const Cart = () => {
  const price = useSelector(cartTotal);
  const items = useSelector(cartItems);
  const count = useSelector(cartCount);

  return (
    <Layout>
      <div className='p-2rem'>
        {items.length === 0 ? (
          <Empty />
        ) : (
          <>
            <h2 className='font-bold font-ss text-xl text-center'>
              Cart ({count})
            </h2>
            <div className='grid grid-cols-1 grid-rows-cart md:grid-cols-2 md:grid-rows-1'>
              <div className='flex py-1rem '>
                <ul className='p-1rem w-full'>
                  {items.map((item: CartItem, index: number) => (
                    <li
                      key={index}
                      className='mb-6 p-3 flex flex-1 border-b-1 border-[#dfdfdf] w-full'
                    >
                      <div className='grid grid-row-1 gap-x-5 grid-cols-2 w-full'>
                        <div className='ms-2 relative h-full w-full '>
                          <Image
                            alt={item.name}
                            src={item.imgUrl}
                            width={168}
                            height={227}
                          />
                        </div>
                        <div className='flex flex-col justify-around w-full'>
                          <div className='flex flex-wrap justify-between items-center'>
                            <span className='text-l uppercase font-light tracking-tight'>
                              {item.name}
                            </span>
                            <span className='font-d font-semibold'>
                              {formatAmountForDisplay(item.price, 'usd')}
                            </span>
                          </div>
                          <QuantityBar pk={item.pk} qty={item.qty} />
                        </div>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
              <div className='md:self-end p-1rem rounded-sm h-min bg-[#e8e8e8]'>
                <div className='flex flex-row pb-2 justify-between my-3'>
                  <span className='font-medium'>Shipping</span>
                  <span className='font-medium'>FREE</span>
                </div>
                <div className='flex flex-row py-2 justify-between my-3'>
                  <span className='font-medium'>Est. Sales Tax</span>
                  <span className=''>To be calculated</span>
                </div>
                <div className='flex flex-row py-2 justify-between my-3'>
                  <span className='font-medium'>Subtotal</span>
                  <span className='font-semibold'>
                    {formatAmountForDisplay(price, 'usd')}
                  </span>
                </div>
                <div className='flex'>
                  <Link
                    className='flex flex-1 text-center justify-center border-2 border-transparent h-[2.575rem] items-center font-semibold bg-b rounded-xs text-white'
                    href='/Checkout'
                  >
                    Checkout
                  </Link>
                </div>
              </div>
            </div>
          </>
        )}
      </div>
    </Layout>
  );
};

export default Cart;
