import Mobile from './Mobile';
import Desktop from './Desktop';
import React from 'react';

const Header = () => {
	return (
		<>
			<header className='h-60 z-60 border-b border-g'>
				<div className='px-1rem md:hidden h-full'>
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
