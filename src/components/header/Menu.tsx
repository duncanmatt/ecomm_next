import { useState, useEffect } from 'react';
import Link from 'next/link';
import CaretRightIcon from '../icons/CaretRightIcon';
import ProfileIcon from '../icons/ProfileIcon';

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
  active: boolean;
};

const Menu = ({ active }: Status) => {
  const menuOpen = active;

  useEffect(() => {
    if (document.getElementById('searchToggler')) {
      const searchToggler = document.getElementById('searchToggler');
      menuOpen
        ? searchToggler?.setAttribute('disabled', 'true')
        : searchToggler?.removeAttribute('disabled');

      console.log(menuOpen);
    }
  }, [menuOpen]);

  return (
    <div
      id='navMenu'
      style={{
        transform: active ? 'translateX(0)' : 'translateX(100%)',
      }}
      className='absolute left-0 top-0 overflow-x-hidden w-full bg-[rgba(242,242,242,0.24)] backdrop-contrast-100 bg-clip-padding backdrop-filter backdrop-blur-[150px] saturate-[1.8] transition-transform'
    >
      <div className=' w-full h-menu'>
        <nav className='flex flex-col pt-[100px] px-1rem'>
          <ul className='block'>
            {links.map((link) => (
              <li key={link.id} className='pb-1rem text-5'>
                <Link
                  className='flex flex-1 flex-row justify-between items-center text-base hover:underline font-medium'
                  href={{
                    pathname: `/products/category/${link.target}`,
                    query: { categoryId: link.id },
                  }}
                >
                  <span
                    style={{ opacity: active ? '1' : '0' }}
                    className='capitalize transition-[opacity] duration-[0.45s] ease-menu'
                  >
                    {link.target}
                  </span>
                  <span className='flex'>
                    <CaretRightIcon />
                  </span>
                </Link>
              </li>
            ))}
          </ul>
          <div className='my-3rem'>
            <div>
              <Link
                className='flex flex-row gap-1 uppercase items-center hover:font-base w-full justify-between'
                href='/Profile'
              >
                <span className='text-lg text-5 uppercase tracking-tight font-light'>
                  Account
                </span>
                <span className='stroke-5'>
                  <ProfileIcon />
                </span>
              </Link>
            </div>
          </div>
        </nav>
      </div>
    </div>
  );
};

export default Menu;
