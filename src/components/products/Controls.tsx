import { useState } from 'react';
import { Product } from '../../../interfaces';
import { useDispatch } from 'react-redux';
import { addToCart } from './../../../lib/redux/slices/cartSlice';

type ProductControls = {
  product: Product;
};

const Controls = ({ product }: ProductControls) => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [message, setMessage] = useState('');
  const [size, setSize] = useState('');

  const dispatch = useDispatch();

  const toggleDropdown = (
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    setDropdownOpen(!dropdownOpen);
  };

  const possibleSizes = ['small', 'medium', 'large'];

  return (
    <div className='w-full h-auto'>
      <div className='text-center'>{message}</div>
      <div className='flex flex-wrap w-full h-auto'>
        <div className='flex flex-col basis-50 border-1 border-10'>
          <button
            className='bg-white flex justify-center items-center w-full h-[2.4rem]'
            onClick={toggleDropdown}
          >
            {size}
          </button>
          <div className='w-full'>
            {dropdownOpen && (
              <ul className='flex flex-col w-full text-center text-35'>
                {possibleSizes.map((pSize, index) => (
                  <li
                    className='mb-2'
                    onClick={() => setSize(pSize)}
                    key={index}
                  >
                    <button>{pSize}</button>
                  </li>
                ))}
              </ul>
            )}
          </div>
        </div>
        <div className='flex basis-50'>
          <div className='h-[2.4rem] w-full'>
            <button
              onClick={() =>
                dispatch(
                  addToCart({
                    name: product.name,
                    size: size,
                    price: product.price,
                    imgUrl: product.imgUrl,
                    pk: product.pk,
                  })
                )
              }
              disabled={size === '' ? true : false}
              className='bg-5 hover:bg-35 h-full font-xl font-semibold border-2 border-transparent text-white w-full'
            >
              Add to cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Controls;
