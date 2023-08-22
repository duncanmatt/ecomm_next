import { useState, useEffect } from 'react';
import SearchList from './SearchList';
import SearchScroll from './SearchScroll';
import { SearchItem } from '../../interfaces';
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
      style={{
        transform: active ? 'translateY(0)' : 'translateY(-100%)',
        zIndex: active ? '60' : '0',
      }}
      className='fixed top-0 left-0 h-full w-full right-0 overflow-y-hidden bg-[rgba(252,252,252,0.24)] bg-scroll bg-clip-padding backdrop-filter backdrop-blur-[150px] backdrop-contrast-100 saturate-[1.8] transition-[transform] ease-in'
    >
      <div className='relative px-1rem'>
        <div className='flex h-[54px] items-center justify-between w-full'>
          <div className='w-full me-[2rem]'>
            <div className='flex w-full h-54px items-center'>
              <input
                style={{ zIndex: '62' }}
                className='rounded-xs w-full py-1 border-b border-1'
                type='search'
                placeholder='Search Products'
                onChange={handleChange}
              />
            </div>
          </div>
        </div>
        <div>
          <div>
            <div className='py-1rem'>
              <div style={{}} className='flex flex-col'>
                <SearchScroll>
                  <SearchList filteredProducts={filteredProducts} />
                </SearchScroll>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Search;
