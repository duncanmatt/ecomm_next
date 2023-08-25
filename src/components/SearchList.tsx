import { SearchItem } from '../../interfaces';
import Link from 'next/link';

type FilteredProducts = {
  filteredProducts: SearchItem[];
  active: boolean;
};

const SearchList = ({ filteredProducts, active }: FilteredProducts) => {
  return filteredProducts.map((product: SearchItem) => (
    <div
      style={{
        opacity: active ? '1' : '0',
        color: active ? '#121212' : 'transparent',
      }}
      key={product.productId}
      className='transition-[opacity] delay-1000 ease-search'
    >
      <Link
        className='hover:underline text-lg'
        href={`/products/product/${product.productId}`}
      >
        {product.name}
      </Link>
    </div>
  ));
};

export default SearchList;
