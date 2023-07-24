import { useState } from 'react';
import CartModal from '../cart/CartModal';
import Link from 'next/link';
import Logo from './Logo';
import Search from '../Search';
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

const details = [
	{
		pk: 'PRODUCT#1',
		sk: 'METADATA',
		name: 'angel black red',
		imgUrl:
			'https://ecomm-imgs-test.s3.amazonaws.com/ecomm-imgs-test/short-sleeve-black-red.jpg',
		productId: 1,
		price: 450,
	},
	{
		pk: 'PRODUCT#2',
		sk: 'METADATA',
		name: 'angel black',
		imgUrl:
			'https://ecomm-imgs-test.s3.amazonaws.com/ecomm-imgs-test/short-sleeve-black.jpg',
		productId: 2,
		price: 450,
	},
	{
		pk: 'PRODUCT#3',
		sk: 'METADATA',
		name: 'angel brown blue',
		imgUrl:
			'https://ecomm-imgs-test.s3.amazonaws.com/ecomm-imgs-test/short-sleeve-black-red.jpg',
		productId: 3,
		price: 450,
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
					<Search
						details={details}
						toggler={toggleSearch}
					/>
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
