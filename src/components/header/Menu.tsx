import Link from 'next/link';
import CaretRightIcon from '../icons/CaretRightIcon';

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

const Menu = ({ fn }: any) => {
	return (
		<div className='h-[calc(100vh-60px)] bg-[#f9f9f9] w-full p-1rem'>
			<ul className='block relative transition-all'>
				{links.map(link => (
					<li
						key={link.id}
						className='pb-2rem'>
						<Link
							onClick={fn}
							className='flex flex-1 flex-row justify-between items-center text-l font-semibold'
							href={`/products/category/${link.target}`}>
							<span className='uppercase'>{link.target}</span>
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
