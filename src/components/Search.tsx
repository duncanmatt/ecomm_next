import { useState, useEffect } from 'react';
import SearchList from './SearchList';
import SearchScroll from './SearchScroll';
import { SearchItem } from '../../interfaces';
import CloseIcon from './icons/CloseIcon';
import { fetchGetJSON } from '../../utils/api-helpers';

type Status = {
  active: boolean;
};

const Search = ({ active }: Status) => {
  const [search, setSearch] = useState('');
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const getProducts = async () => {
      const { Items } = await fetchGetJSON(
        'https://c4z5zswbfk.execute-api.us-east-1.amazonaws.com/api/products'
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
    <div
      style={{ height: active ? '100%' : '0' }}
      className='absolute top-0 left-0 h-full w-full overflow-hidden'
    >
      <div className='flex h-60 flex-row items-center justify-between px-1rem md:px-3rem'>
        <div className='flex flex-1'>
          <div className='flex w-full'>
            <input
              className='w-full bg-body px-2 py-1 border-1 rounded-md border-25'
              type='search'
              placeholder='Search Products'
              onChange={handleChange}
            />
          </div>
        </div>
      </div>
      <div className=''>
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
    </div>
  );
};

export default Search;
