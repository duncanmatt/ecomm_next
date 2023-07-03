import Link from 'next/link';

const Logo = () => {
	return (
		<span>
			<Link
				className='font-bold'
				href='/'>
				LOGO
			</Link>
		</span>
	);
};

export default Logo;
