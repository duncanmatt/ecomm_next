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
  const [size, setSize] = useState('size');

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
        <div className='flex flex-col basis-1/3 bg-white shadow-bag rounded-md'>
          <button
            className='flex justify-center rounded-t-md h-[2.4rem] items-center w-full'
            onClick={toggleDropdown}
          >
            {size}
          </button>
          <div className='w-full pt-2'>
            {dropdownOpen && (
              <ul className='border-t-1 border-95 flex flex-col w-full text-center text-35'>
                {possibleSizes.map((pSize, index) => (
                  <li className='mb-2' key={index}>
                    <button
                      className='w-full h-full'
                      onClick={() => setSize(pSize)}
                    >
                      {pSize}
                    </button>
                  </li>
                ))}
              </ul>
            )}
          </div>
        </div>
        <div className='flex basis-1/2 mx-auto'>
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
              disabled={size === 'size' ? true : false}
              className='bg-5 hover:bg-35 rounded-xs h-full font-xl font-semibold border-2 border-transparent text-white w-full'
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
