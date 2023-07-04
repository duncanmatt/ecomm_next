import { useState } from 'react';
import Link from 'next/link';
import Logo from './Logo';
import Menu from './Menu';
import SearchBar from './SearchBar';
import SearchIcon from './SearchIcon';
import CartIcon from './CartIcon';
import BurgerIcon from './BurgerIcon';
import CloseIcon from './CloseIcon';

const Mobile = () => {
	const [menuOpen, setMenuOpen] = useState(false);
	const [searchActive, setSearchActive] = useState(false);

	const toggleMenu = (
		event: React.MouseEvent<HTMLButtonElement, MouseEvent>,
	) => {
		setMenuOpen(!menuOpen);
	};

	const toggleSearch = (
		event: React.MouseEvent<HTMLButtonElement, MouseEvent>,
	) => {
		setSearchActive(!searchActive);
	};

	return (
		<nav className='h-full flex items-center'>
			<div className='flex flex-row w-full justify-between items-center'>
				{searchActive ? (
					<>
						<SearchBar />
						<span onClick={toggleSearch}>
							<CloseIcon />
						</span>
					</>
				) : (
					<>
						<span>
							<Logo />
						</span>
						<ul className='flex flex-row justify-evenly items-center'>
							{!menuOpen && (
								<>
									<li className='py-2 inline-block'>
										<span className='flex'>
											<Link href='/Cart'>
												<CartIcon />
											</Link>
										</span>
									</li>
									<li className='py-2 inline-block'>
										<span
											onClick={toggleSearch}
											className='flex mx-1rem cursor-pointer'>
											<SearchIcon />
										</span>
									</li>
								</>
							)}
							<li className='py-2 inline-block'>
								<span
									className='flex cursor-pointer'
									onClick={toggleMenu}>
									{menuOpen ? <CloseIcon /> : <BurgerIcon />}
								</span>
							</li>
						</ul>

						{menuOpen && (
							<>
								<div
									style={{
										position: 'absolute',
										top: '60px',
										left: '0',
										right: '0',
										bottom: '0',
										height: `calc(100vh-60px)}`,
										background: `#f9f9f9`,
										padding: '1rem',
									}}>
									<Menu />
								</div>
							</>
						)}
					</>
				)}
			</div>
		</nav>
	);
};

export default Mobile;
