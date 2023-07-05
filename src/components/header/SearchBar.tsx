import { useState } from 'react';

const SearchBar = () => {
	const [search, setSearch] = useState('');

	const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		setSearch(event.target.value);
	};

	return (
		<div className='flex flex-1'>
			<div className='flex basis-60'>
				<input
					className='w-full rounded-md'
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
