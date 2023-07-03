import Link from 'next/link';
import Logo from './Logo';
import SearchIcon from './SearchIcon';
import CartIcon from './CartIcon';
import ProfileIcon from './ProfileIcon';

const links = [
	{
		id: 0,
		target: 'Shirts',
		target_url: '/Shirts',
	},
	{
		id: 1,
		target: 'Shorts',
		target_url: '/Shorts',
	},
	{
		id: 2,
		target: 'Pants',
		target_url: '/Pants',
	},
	{
		id: 3,
		target: 'Accessories',
		target_url: '/Accessories',
	},
];

const Desktop = () => {
	return (
		<nav className='flex flex-row h-full items-center justify-between'>
			<div className='flex flex-row justify-between basis-60'>
				<span>
					<Logo />
				</span>
				<ul className='flex flex-row flex-1 justify-evenly ps-3rem'>
					{links.map(link => (
						<li key={link.id}>
							<Link href={link.target_url}>{link.target}</Link>
						</li>
					))}
				</ul>
			</div>
			<div>
				<ul>
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
					<li className='py-2 inline-block'>
						<span className='flex mx-1rem cursor-pointer'>
							<ProfileIcon />
						</span>
					</li>
				</ul>
			</div>
		</nav>
	);
};

export default Desktop;
