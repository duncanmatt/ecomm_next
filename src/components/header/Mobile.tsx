import { useState } from 'react';
import Link from 'next/link';
import Logo from './Logo';
import Menu from './Menu';
import SearchIcon from '../icons/SearchIcon';
import CartIcon from '../icons/CartIcon';
import BurgerIcon from '../icons/BurgerIcon';
import CloseIcon from '../icons/CloseIcon';
import { useSelector } from '../../../lib/redux/store';
import { cartCount } from '../../../lib/redux/slices/cartSlice/selectors';

const Mobile = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [searchActive, setSearchActive] = useState(false);

  const cartQty = useSelector(cartCount);

  const toggleMenu = (
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    setMenuOpen(!menuOpen);
  };

  const toggleSearch = (
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    setSearchActive(!searchActive);
  };

  return (
    <>
      <nav className='h-full flex items-center'>
        <div
          id='mobileNavBar'
          className='bg-faded flex h-[54px] px-1rem flex-row w-full justify-between items-center'
        >
          <span>{menuOpen || searchActive ? <></> : <Logo />}</span>
          <ul className='flex flex-row justify-evenly items-center'>
            {!menuOpen && (
              <>
                <li className='py-2 inline-block'>
                  {!searchActive && (
                    <Link className='flex' href='/Cart'>
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
                    </Link>
                  )}
                </li>
                <li className='py-2 inline-block'>
                  <span
                    onClick={toggleSearch}
                    className='flex mx-1rem cursor-pointer'
                  >
                    <SearchIcon />
                  </span>
                </li>
              </>
            )}
            <li className='py-2 inline-block'>
              <span className='flex cursor-pointer' onClick={toggleMenu}>
                {menuOpen ? <CloseIcon /> : <BurgerIcon />}
              </span>
            </li>
          </ul>
          <Menu active={menuOpen} />
        </div>
      </nav>
    </>
  );
};

export default Mobile;
