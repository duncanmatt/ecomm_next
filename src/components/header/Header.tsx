import Mobile from './Mobile';
import Desktop from './Desktop';

const Header = () => {
	return (
		<>
			<header className='h-60 bg-g'>
				<div className='px-1rem md:hidden h-full'>
					<Mobile />
				</div>
				<div className='px-3rem hidden md:block h-full'>
					<Desktop />
				</div>
			</header>
		</>
	);
};

export default Header;
