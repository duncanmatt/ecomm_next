import { useState, useEffect } from 'react';
import Link from 'next/link';
import Logo from './Logo';
import Menu from './Menu';
import CartIcon from '../icons/CartIcon';
import BurgerIcon from '../icons/BurgerIcon';
import CloseIcon from '../icons/CloseIcon';
import { useSelector } from '../../../lib/redux/store';
import { cartCount } from '../../../lib/redux/slices/cartSlice/selectors';

type Status = {
  searchActive: boolean;
};

const Mobile = ({ searchActive }: Status) => {
  const path = window.location.pathname;
  const [menuOpen, setMenuOpen] = useState(false);

  const cartQty = useSelector(cartCount);

  const toggleMenu = (
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    setMenuOpen(!menuOpen);
  };

  useEffect(() => {
    if (document.getElementById('searchToggler')) {
      const searchToggler = document.getElementById('searchToggler');
      menuOpen
        ? searchToggler?.setAttribute('z-index', '0')
        : searchToggler?.setAttribute('z-index', '100');

      console.log(searchToggler);
    }
  }, []);

  useEffect(() => {
    setMenuOpen(false);
  }, [path]);

  return (
    <>
      <nav className='h-full flex items-center w-full'>
        <div className='flex h-[54px] px-1rem flex-row w-full justify-between items-center'>
          <span>{menuOpen || searchActive ? <></> : <Logo />}</span>
          {!searchActive && (
            <ul className='flex flex-row justify-end items-center'>
              {!menuOpen && (
                <>
                  <li className='py-2 inline-block translate-x-[-4.25rem]'>
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
                </>
              )}
              <li className='py-2 inline-block'>
                <button
                  style={{
                    zIndex: menuOpen ? '6' : '0',
                    stroke: menuOpen ? '#121212' : 'inherit',
                  }}
                  className='absolute top-0 h-[54px] flex flex-grow-0 items-center right-[1rem]'
                  onClick={toggleMenu}
                  disabled={searchActive ? true : false}
                >
                  {menuOpen ? <CloseIcon /> : <BurgerIcon />}
                </button>
              </li>
            </ul>
          )}
          <Menu active={menuOpen} />
        </div>
      </nav>
    </>
  );
};

export default Mobile;
