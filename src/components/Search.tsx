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
      id='globalSearch'
      style={{
        transform: active ? 'translateY(0px)' : 'translateY(-100%)',
        opacity: active ? '1' : '0',
        zIndex: active ? '60' : '0',
        paddingInline: active ? '1rem' : '0',
      }}
      className='fixed top-0 left-0 w-full h-full right-0 overflow-y-hidden bg-[rgba(252,252,252,0.24)] bg-scroll backdrop-filter backdrop-blur-[150px] backdrop-contrast-100 transition-search  ease-search duration-search delay-search'
    >
      <div className='relative'>
        <div className='flex h-[54px] items-center justify-between w-full'>
          <div className='w-full me-[2rem]'>
            <div className='flex w-full items-center'>
              <input
                className='rounded-xs w-full border-b border-1 ps-2'
                type='search'
                placeholder='Search'
                onChange={handleChange}
              />
            </div>
          </div>
        </div>
        <div>
          <div>
            <div className='py-1rem'>
              <div style={{}} className='flex flex-col'>
                {filteredProducts ? (
                  <SearchScroll>
                    <SearchList
                      active={active}
                      filteredProducts={filteredProducts}
                    />
                  </SearchScroll>
                ) : (
                  <div className='h-full'></div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Search;
