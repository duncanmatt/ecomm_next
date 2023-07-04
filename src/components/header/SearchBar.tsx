import { useState } from 'react';

const SearchBar = () => {
	const [search, setSearch] = useState('');

	const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		setSearch(event.target.value);
	};

	return (
		<div>
			<div>
				<input
					type='text'
					placeholder='Search Products'
					onChange={handleChange}
					value={search}
				/>
			</div>
		</div>
	);
};

export default SearchBar;
