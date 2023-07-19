import Header from './header/Header';
import React from 'react';

type LayoutProps = {
	children: React.ReactNode;
};

const Layout = ({ children }: LayoutProps) => {
	return (
		<>
			<Header />
			<div className='h-[60px]'></div>
			<div className='block relative min-h-main'>{children}</div>
			<div className='text-center'>Footer</div>
		</>
	);
};

export default Layout;
