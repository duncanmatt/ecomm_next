import { SearchItem } from '../../interfaces';
import Link from 'next/link';

const SearchList = ({ filteredProducts }: any) => {
  return filteredProducts.map((product: SearchItem) => (
    <div key={product.productId} className='pt-1'>
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
