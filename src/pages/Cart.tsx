import Layout from '@/components/Layout';
import { useSelector, useDispatch } from '../../lib/redux/store';
import {
  cartTotal,
  cartItems,
} from '../../lib/redux/slices/cartSlice/selectors';
import { CartItem } from '../../interfaces';
import Image from 'next/image';

const Cart = () => {
  const dispath = useDispatch();
  const price = useSelector(cartTotal);
  const items = useSelector(cartItems);

  return (
    <Layout>
      <div>
        <h2 className='font-bold'>Cart</h2>
        <div>
          <ul>
            {items.map((item: CartItem, index: number) => (
              <li key={index}>
                <div className='flex flex-row'>
                  <Image
                    alt={item.name}
                    src={item.imgUrl}
                    width={168}
                    height={227}
                  />
                  <div className='flex flex-col justify-around'>
                    <span>{item.name}</span>
                    <span>
                      ${item.price}({item.qty})
                    </span>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>
        <div>${price}</div>
      </div>
    </Layout>
  );
};

export default Cart;
