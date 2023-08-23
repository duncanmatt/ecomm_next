import { useState, useEffect } from 'react';
import Mobile from './Mobile';
import Desktop from './Desktop';
import React from 'react';
import Search from '../Search';
import CloseIcon from '../icons/CloseIcon';
import SearchIcon from '../icons/SearchIcon';

const Header = () => {
  const path = window.location.pathname;
  // const search = document.getElementById('globalSearch');
  // const searchPos = search?.style.transform;
  // const searchStatus = searchPos === 'translateY(0px)' ? true : false;
  const isHome = path === '/' ? 'rest' : 'up';

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
      const initial = lastY < 5;

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
          opacity: searchActive ? '0' : '1',
          color:
            scrollDir === 'up' ? '#121212' : path === '/' ? '#fff' : '#121212',
          stroke:
            scrollDir === 'up' ? '#121212' : path === '/' ? '#fff' : '#121212',
        }}
        className={`fixed z-[60] bottom-auto top-0 right-0 left-0 max-w-container xl:mx-auto`}
      >
        <div className='md:hidden block'>
          <Mobile searchActive={searchActive} />
        </div>
        <div className='hidden md:block'>
          <Desktop searchActive={searchActive} />
        </div>
      </header>
      <Search active={searchActive} />
      <span
        id='searchTogglerWrapper'
        className='fixed top-0 h-[54px] flex flex-grow-0 items-center right-[3.2rem] pointer-events-auto z-[61]'
        style={{
          right: searchActive ? '1rem' : '3.2rem',
          transform: searchActive
            ? 'none'
            : scrollDir === 'down'
            ? 'translateY(-100%)'
            : 'translateY(0px)',
        }}
      >
        <button
          id='searchToggler'
          className='disabled:opacity-0 disabled:pointer-events-none pointer-events-all relative'
          style={{
            stroke:
              scrollDir === 'up'
                ? '#121212'
                : path === '/'
                ? '#fff'
                : '#121212',
          }}
          onClick={toggleSearch}
        >
          {searchActive ? <CloseIcon /> : <SearchIcon />}
        </button>
      </span>
    </>
  );
};

export default Header;
