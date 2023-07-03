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
			{menuOpen ? (
				<>
					<div className='flex flex-row w-full justify-between'>
						<Logo />
						<button onClick={toggleMenu}>X</button>
					</div>
					<div>
						<Menu />
					</div>
				</>
			) : (
				<div className='flex flex-row w-full justify-between items-center'>
					<span>
						<Logo />
					</span>
					<ul className='flex flex-row justify-evenly items-center'>
						<li className='py-2 inline-block'>
							<span className='flex me-1rem'>
								<CartIcon />
							</span>
						</li>
						<li className='py-2 inline-block'>
							<span className='flex mx-1rem'>
								<SearchIcon />
							</span>
						</li>
						<li className='py-2 inline-block'>
							<span className='flex ms-1rem' onClick={toggleMenu}>
								<BurgerIcon />
							</span>
						</li>
					</ul>
				</div>
			)}
		</nav>
	);
};

export default Mobile;
