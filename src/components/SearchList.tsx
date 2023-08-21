import { SearchItem } from '../../interfaces';
import Link from 'next/link';

const SearchList = ({ filteredProducts }: any) => {
  return filteredProducts.map((product: SearchItem) => (
    <div key={product.productId} className='pt-1 z-50'>
      <Link
        className='hover:underline text-lg'
        href={{
          pathname: `/products/product/`,
          query: { productId: product.productId },
        }}
      >
        {product.name}
      </Link>
    </div>
  ));
};

export default SearchList;
