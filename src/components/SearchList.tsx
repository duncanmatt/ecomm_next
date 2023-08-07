import { SearchItem } from '../../interfaces';
import Link from 'next/link';

const SearchList = ({ filteredProducts }: any) => {
  return filteredProducts.map((product: SearchItem) => (
    <div key={product.productId}>
      <Link href={{ pathname: 'products/product', query: { pk: product.pk } }}>
        {product.name}
      </Link>
    </div>
  ));
};

export default SearchList;
