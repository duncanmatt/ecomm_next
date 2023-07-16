import Header from './header/Header';
import React from 'react';

type LayoutProps = {
  children: React.ReactNode;
};

const Layout = ({ children }: LayoutProps) => {
  return (
    <>
      <Header />
      <div className='block mt-[60px] relative'>{children}</div>
      <div className='text-center'>Footer</div>
    </>
  );
};

export default Layout;
