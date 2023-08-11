import { useSelector } from '../../lib/redux/store';
import { cartItems } from '../../lib/redux/slices/cartSlice/selectors';
import Image from 'next/image';

const OrderSuccess = () => {
  const items = useSelector(cartItems);

  return (
    <div>
      <div className='text-success text-center text-2xl'>
        SUCCESSFULLY PLACED ORDER
      </div>
      <div>
        <ul>
          {items.map((item, index) => (
            <li key={index}>
              <div className='flex flex-col md:flex-row'>
                <Image
                  src={item.imgUrl}
                  alt={item.name}
                  width={300}
                  height={300}
                />
                <div className='flex flex-wrap gap-2'>
                  <span>
                    {item.name}( {item.qty} )
                  </span>
                  <span>{item.price * item.qty}</span>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default OrderSuccess;
