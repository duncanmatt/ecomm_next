import Header from './header/Header';
import React from 'react';
import Footer from './Footer';

type LayoutProps = {
  children: React.ReactNode;
};

const Layout = ({ children }: LayoutProps) => {
  return (
    <>
      <Header />
      <div className='block relative min-h-main max-w-container xl:mx-auto'>
        {children}
      </div>
      <Footer />
    </>
  );
};

export default Layout;
