import { useState } from 'react';
import Link from 'next/link';
import Logo from './Logo';
import Menu from './Menu';
import SearchBar from './SearchBar';
import SearchIcon from '../icons/SearchIcon';
import CartIcon from '../icons/CartIcon';
import BurgerIcon from '../icons/BurgerIcon';
import CloseIcon from '../icons/CloseIcon';

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
		<>
			{searchActive ? (
				<>
					<div className='h-full flex flex-row items-center justify-between'>
						<SearchBar />
						<span onClick={toggleSearch}>
							<CloseIcon />
						</span>
					</div>
					<div className='absolute top-[60px] backdrop-blur-6xl bg-faded left-0 right-0 z-7'>
						<div className='relative w-full h-full '>
							<div className='block p-1rem'>
								<div className='flex flex-col w-full'>
									<div className='block h-80 p-1rem'>
										<ul className='flex flex-wrap py-2rem justify-center gap-8'>
											<li>MATCH 1</li>
											<li>MATCH 2</li>
											<li>MATCH 3</li>
										</ul>
									</div>
								</div>
							</div>
						</div>
					</div>
				</>
			) : (
				<>
					<nav className='h-full flex items-center'>
						<div className='flex flex-row w-full justify-between items-center'>
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
										id='mobileMenu'
										style={{
											position: 'absolute',
											top: '60px',
											left: '0',
											right: '0',
											bottom: '0',
											height: '100%',
											width: '100%',
										}}>
										<Menu fn={toggleMenu} />
									</div>
								</>
							)}
						</div>
					</nav>
				</>
			)}
		</>
	);
};

export default Mobile;
