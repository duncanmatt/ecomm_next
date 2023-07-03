import Link from 'next/link';

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
		<div>
			<ul>
				{links.map(link => (
					<li key={link.id}>
						<Link href={link.target_url}>{link.target}</Link>
					</li>
				))}
			</ul>
		</div>
	);
};

export default Menu;
