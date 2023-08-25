import { SearchItem } from '../../interfaces';
import Link from 'next/link';

type FilteredProducts = {
  filteredProducts: SearchItem[];
  active: boolean;
};

const SearchList = ({ filteredProducts, active }: FilteredProducts) => {
  return filteredProducts.map((product: SearchItem) => (
    <div
      style={{ opacity: active ? '1' : '0' }}
      key={product.productId}
      className='pt-1 transition-[opacity] ease-in duration-700'
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
