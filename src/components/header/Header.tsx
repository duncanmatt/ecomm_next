import { useState, useEffect } from 'react';
import Mobile from './Mobile';
import Desktop from './Desktop';
import React from 'react';
import Search from '../Search';
import Menu from './Menu';

const Header = () => {
  const isHome = window.location.pathname === '/' ? 'rest' : 'up';

  const [scrollDir, setScrollDir] = useState(isHome);
  const [searchActive, setSearchActive] = useState(false);

  useEffect(() => {
    const threshold = 3;
    let lastY = window.scrollY;
    let ticking = false;
    console.log(lastY);

    const updateScrollDir = () => {
      const y = window.scrollY;
      const initial = lastY < threshold;

      if (Math.abs(y - lastY) < threshold) {
        ticking = false;
        return;
      }
      setScrollDir(
        window.location.pathname === '/'
          ? initial === true
            ? 'rest'
            : y > lastY
            ? 'down'
            : 'up'
          : y > lastY
          ? 'down'
          : 'up'
      );
      lastY = y > 0 ? y : 0;
      ticking = false;
    };

    const onScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(updateScrollDir);
        ticking = true;
        console.log(window.scrollY);
      }
    };

    window.addEventListener('scroll', onScroll);

    return () => window.removeEventListener('scroll', onScroll);
  }, [scrollDir]);

  return (
    <>
      <header
        data-action={`${scrollDir}`}
        className={`h-60 z-[60] fixed bottom-auto top-0 right-0 left-0`}
      >
        <div className='md:hidden block'>
          <Mobile />
        </div>
        <div className='hidden md:block'>
          <Desktop />
        </div>
      </header>
      <Search active={searchActive} />
    </>
  );
};

export default Header;
