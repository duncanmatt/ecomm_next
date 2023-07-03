import { useState } from 'react';
import Logo from './Logo';
import Menu from './Menu';
import SearchIcon from './SearchIcon';
import CartIcon from './CartIcon';
import BurgerIcon from './BurgerIcon';

const Mobile = () => {
	const [menuOpen, setMenuOpen] = useState(false);

	const toggleMenu = (
		event: React.MouseEvent<HTMLButtonElement, MouseEvent>,
	) => {
		setMenuOpen(!menuOpen);
	};

	return (
		<nav className='h-full flex items-center'>
				<div className='flex flex-row w-full justify-between items-center'>
					<span>
						<Logo />
					</span>
					<ul className='flex flex-row justify-evenly items-center'>
						{!menuOpen && <>
						<li className='py-2 inline-block'>
							<span className='flex me-1rem cursor-pointer'>
								<CartIcon />
							</span>
						</li>
						<li className='py-2 inline-block'>
							<span className='flex mx-1rem cursor-pointer'>
								<SearchIcon />
							</span>
						</li>
						</>}
						<li className='py-2 inline-block'>
							<span className='flex ms-1rem cursor-pointer' onClick={toggleMenu}>
								{menuOpen ? 'X' : <BurgerIcon />}
							</span>
						</li>
					</ul>
				</div>
				{menuOpen && <>
					<div style={{position: 'absolute', top: '60px',height: `calc(100vh-60px)}`}}>
						<Menu />
					</div>
				</>}
		</nav>
	);
};

export default Mobile;
