import { useState } from 'react';
import Logo from './Logo';
import Menu from './Menu';
import SearchIcon from './SearchIcon';

const Mobile = () => {
	const [menuOpen, setMenuOpen] = useState(false);

	const toggleMenu = (
		event: React.MouseEvent<HTMLButtonElement, MouseEvent>,
	) => {
		setMenuOpen(!menuOpen);
	};

	return (
		<nav>
			{menuOpen ? (
				<>
					<div>
						<Logo />
						<button onClick={toggleMenu}></button>
					</div>
					<div>
						<Menu />
					</div>
				</>
			) : (
				<div>
					<Logo />
					<SearchIcon />
					<button onClick={toggleMenu}>-</button>
				</div>
			)}
		</nav>
	);
};

export default Mobile;
