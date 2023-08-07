import { useState, useEffect } from 'react';
import SearchList from './SearchList';
import SearchScroll from './SearchScroll';
import { SearchItem } from '../../interfaces';
import CloseIcon from './icons/CloseIcon';
import { fetchGetJSON } from '../../utils/api-helpers';

const Search = ({ fn }: any) => {
  const [search, setSearch] = useState('');
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const getProducts = async () => {
      const { Items } = await fetchGetJSON(
        'https://c4z5zswbfk.execute-api.us-east-1.amazonaws.com/products'
      );
      setProducts(Items);
    };
    getProducts();
  }, []);

  const filteredProducts = products?.filter((product: SearchItem) => {
    return product.name.toLowerCase().includes(search.toLowerCase());
  });

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(event.target.value);
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
        <span className='cursor-pointer' onClick={fn}>
          <CloseIcon />
        </span>
      </div>
      <div className='absolute top-[60px] bg-faded  left-0 right-0 z-7'>
        <div className='relative w-full h-full'>
          <div className='p-1rem'>
            <div className='flex flex-col'>
              <SearchScroll>
                <SearchList filteredProducts={filteredProducts} />
              </SearchScroll>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Search;
