import { useState } from 'react';
import CartModal from '../cart/CartModal';
import Link from 'next/link';
import Logo from './Logo';
import SearchBar from './SearchBar';
import SearchIcon from '../icons/SearchIcon';
import CartIcon from '../icons/CartIcon';
import ProfileIcon from '../icons/ProfileIcon';
import CloseIcon from '../icons/CloseIcon';

const links = [
	{
		id: 0,
		target: 'shirts',
	},
	{
		id: 1,
		target: 'sweatshirts',
	},
	{
		id: 2,
		target: 'outerwear',
	},
];

const Desktop = () => {
	const [searchActive, setSearchActive] = useState(false);
	const [cartOpen, setCartOpen] = useState(false);

	const toggleSearch = (
		event: React.MouseEvent<HTMLButtonElement, MouseEvent>,
	) => {
		setSearchActive(!searchActive);
	};

	const toggleCart = (
		event: React.MouseEvent<HTMLButtonElement, MouseEvent>,
	) => {
		setCartOpen(!cartOpen);
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
				<nav className='flex flex-row h-full items-center justify-between'>
					<div className='flex flex-row justify-between items-center basis-60'>
						<span>
							<Logo />
						</span>
						<ul className='flex flex-row flex-1 justify-evenly ps-3rem'>
							{links.map(link => (
								<li key={link.id}>
									<Link
										className='uppercase text-xs font-semibold'
										href={`/products/category/${link.target}`}>
										{link.target}
									</Link>
								</li>
							))}
						</ul>
					</div>
					<div>
						<ul>
							<li className='py-2 inline-block'>
								<span
									onClick={toggleCart}
									className='flex'>
									<CartIcon />
								</span>
							</li>
							<li className='py-2 mx-1rem inline-block'>
								<span
									onClick={toggleSearch}
									className='flex cursor-pointer'>
									{!searchActive && <SearchIcon />}
								</span>
							</li>
							<li className='py-2 inline-block'>
								<span className='flex'>
									<Link href='/Profile'>
										<ProfileIcon />
									</Link>
								</span>
							</li>
						</ul>
					</div>
					{cartOpen && (
						<>
							<CartModal />
						</>
					)}
				</nav>
			)}
		</>
	);
};

export default Desktop;
