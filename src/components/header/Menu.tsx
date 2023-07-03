import Link from 'next/link';
import CaretRightIcon from '../icons/CaretRightIcon';

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

const Menu = () => {
	return (
		<div className='h-full w-full'>
			<ul className='block'>
				{links.map(link => (
					<li
						key={link.id}
						className='pb-2rem'>
						<Link
							className='flex flex-1 flex-row justify-between items-center text-l font-bold'
							href={link.target_url}>
							<span>{link.target}</span>
							<span className='flex'>
								<CaretRightIcon />
							</span>
						</Link>
					</li>
				))}
			</ul>
		</div>
	);
};

export default Menu;
