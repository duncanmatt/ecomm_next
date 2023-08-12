import { useState, useEffect } from 'react';
import Mobile from './Mobile';
import Desktop from './Desktop';
import React from 'react';

const Header = () => {
  const [scrollDir, setScrollDir] = useState('up');

  useEffect(() => {
    const threshold = 3;
    let lastY = window.pageYOffset;
    let ticking = false;

    const updateScrollDir = () => {
      const y = window.pageYOffset;

      if (Math.abs(y - lastY) < threshold) {
        ticking = false;
        return;
      }
      setScrollDir(y > lastY ? 'down' : 'up');
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

  return (
    <>
      <header
        data-action={`${scrollDir}`}
        className={`h-60 z-[60] fixed bottom-auto bg-faded backdrop-blur-6xl top-0 right-0 left-0`}
      >
        <div className='relative bg-scroll px-1rem md:hidden h-full'>
          <Mobile />
        </div>
        <div className='px-1rem hidden md:block h-full'>
          <Desktop />
        </div>
      </header>
    </>
  );
};

export default Header;
