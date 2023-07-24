import { useState } from 'react';
import SearchList from './SearchList';
import SearchScroll from './SearchScroll';
import { SearchItem } from '../../interfaces';
import CloseIcon from './icons/CloseIcon';

const Search = ({ details }: any, { toggler }: any) => {
	const [search, setSearch] = useState('');

	const filteredProducts = details.filter((product: SearchItem) => {
		return product.name.toLowerCase().includes(search.toLowerCase());
	});

	const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		setSearch(event.target.value);
	};

	const list = () => {
		return (
			<SearchScroll>
				<SearchList filteredProducts={filteredProducts} />
			</SearchScroll>
		);
	};

	return (
		<>
			<div className='h-full flex flex-row items-center justify-between'>
				<div className='flex flex-1'>
					<div className='flex basis-60'>
						<input
							className='w-full rounded-md'
							type='search'
							placeholder='Search Products'
							onChange={handleChange}
						/>
					</div>
				</div>
				<span onClick={toggler}>
					<CloseIcon />
				</span>
			</div>
			<div className='absolute top-[60px] backdrop-blur-6xl bg-faded left-0 right-0 z-7'>
				<div className='relative w-full h-full'>
					<div className='p-1rem'>
						<div className='flex flex-col'>{list()}</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default Search;
