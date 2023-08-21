import { useState } from 'react';
import CartModal from '../cart/CartModal';
import Link from 'next/link';
import Logo from './Logo';
import CartIcon from '../icons/CartIcon';
import ProfileIcon from '../icons/ProfileIcon';
import { useSelector } from '../../../lib/redux/store';
import { cartCount } from '../../../lib/redux/slices/cartSlice/selectors';

const links = [
  {
    id: 1,
    target: 'shirts',
  },
  {
    id: 2,
    target: 'sweatshirts',
  },
  {
    id: 3,
    target: 'outerwear',
  },
];

type Status = {
  searchActive: boolean;
};

const Desktop = ({ searchActive }: Status) => {
  const [cartOpen, setCartOpen] = useState(false);

  const cartQty = useSelector(cartCount);

  const toggleCart = (
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    setCartOpen(!cartOpen);
  };

  return (
    <>
      <div
        style={{
          opacity: searchActive ? '0' : '100%',
          pointerEvents: searchActive ? 'none' : 'all',
        }}
      >
        <nav className='flex flex-row h-full items-center justify-between px-1rem'>
          <div
            // style={{
            //   opacity: searchActive ? '0' : '100%',
            //   pointerEvents: searchActive ? 'none' : 'all',
            // }}
            className='h-[54px] flex flex-row justify-between items-center basis-60'
          >
            <span>
              <Logo />
            </span>
            <ul className='flex flex-row flex-1 justify-evenly ps-3rem'>
              {links.map((link) => (
                <li key={link.id}>
                  <Link
                    className='hover:underline uppercase text-xs tracking-wide font-medium'
                    href={{
                      pathname: `/products/category/${link.target}`,
                      query: { categoryId: link.id },
                    }}
                  >
                    {link.target}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div className='w-[5.5rem]'>
            <ul className='flex flex-grow-0 flex-row justify-between items-center'>
              <li className='py-2 inline-block'>
                <button className='flex' onClick={toggleCart}>
                  <div className='relative'>
                    {cartQty > 0 && (
                      <div className='absolute w-full h-full flex justify-center items-center font-medium text-cart'>
                        <span className='pt-[6px]'>{cartQty}</span>
                      </div>
                    )}
                    <span className='flex'>
                      <CartIcon />
                    </span>
                  </div>
                </button>
              </li>
              <li className='py-2 inline-block'>
                <span className='flex'>
                  <Link href='/Profile'>
                    <ProfileIcon />
                  </Link>
                </span>
              </li>
            </ul>
          </div>
          {cartOpen && (
            <>
              <CartModal />
            </>
          )}
        </nav>
      </div>
    </>
  );
};

export default Desktop;
