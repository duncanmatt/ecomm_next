import { useState } from 'react';
import Link from 'next/link';
import Logo from './Logo';
import Menu from './Menu';
import Search from '../Search';
import SearchIcon from '../icons/SearchIcon';
import CartIcon from '../icons/CartIcon';
import BurgerIcon from '../icons/BurgerIcon';
import CloseIcon from '../icons/CloseIcon';

const Mobile = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [searchActive, setSearchActive] = useState(false);

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
      {searchActive ? (
        <>
          <Search fn={toggleSearch} />
        </>
      ) : (
        <>
          <nav className='h-full flex items-center'>
            <div className='flex flex-row w-full justify-between items-center'>
              <span>{menuOpen || searchActive ? <></> : <Logo />}</span>
              <ul className='flex flex-row justify-evenly items-center'>
                {!menuOpen && (
                  <>
                    <li className='py-2 inline-block'>
                      <span className='flex'>
                        <Link href='/Cart'>
                          <CartIcon />
                        </Link>
                      </span>
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
              {menuOpen && (
                <>
                  <div
                    id='mobileMenu'
                    style={{
                      position: 'absolute',
                      top: '60px',
                      left: '0',
                      right: '0',
                      bottom: '0',
                      height: '100%',
                      width: '100%',
                    }}
                  >
                    <Menu fn={toggleMenu} />
                  </div>
                </>
              )}
            </div>
          </nav>
        </>
      )}
    </>
  );
};

export default Mobile;
