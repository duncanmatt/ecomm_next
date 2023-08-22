import { useState, useEffect } from 'react';
import Mobile from './Mobile';
import Desktop from './Desktop';
import React from 'react';
import Search from '../Search';
import CloseIcon from '../icons/CloseIcon';
import SearchIcon from '../icons/SearchIcon';

const Header = () => {
  const path = window.location.pathname;
  const isHome = path === '/' ? 'rest' : '';

  const [scrollDir, setScrollDir] = useState(isHome);
  const [searchActive, setSearchActive] = useState(false);

  const toggleSearch = (
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    setSearchActive(!searchActive);
  };

  // SCROLL
  useEffect(() => {
    const threshold = 3;
    let lastY = window.scrollY;
    let ticking = false;

    const updateScrollDir = () => {
      const y = window.scrollY;
      const initial = lastY < 15;

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
      }
    };

    window.addEventListener('scroll', onScroll);

    return () => window.removeEventListener('scroll', onScroll);
  }, [scrollDir]);

  // SEARCH
  useEffect(() => {
    setSearchActive(false);
  }, [path]);

  return (
    <>
      <header
        data-action={`${scrollDir}`}
        style={{
          pointerEvents: searchActive ? 'none' : 'auto',
        }}
        className={`fixed h-[54px] z-[60] bottom-auto top-0 right-0 left-0 max-w-container xl:mx-auto`}
      >
        <span
          className='absolute top-0 h-[54px] flex flex-grow-0 items-center right-[3.2rem]'
          style={{ right: searchActive ? '1rem' : '3.2rem' }}
        >
          <button
            id='searchToggler'
            className='disabled:hidden disabled:pointer-events-none pointer-events-auto'
            style={{
              stroke: scrollDir === 'rest' ? '#fff' : '#121212',
            }}
            onClick={toggleSearch}
          >
            {searchActive ? <CloseIcon /> : <SearchIcon />}
          </button>
        </span>
        <div className='md:hidden block'>
          <Mobile searchActive={searchActive} />
        </div>
        <div className='hidden md:block'>
          <Desktop searchActive={searchActive} />
        </div>
      </header>
      <Search active={searchActive} />
    </>
  );
};

export default Header;
