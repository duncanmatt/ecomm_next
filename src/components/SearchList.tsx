import { SearchItem } from '../../interfaces';
import Link from 'next/link';

const SearchList = ({ filteredProducts }: any) => {
	const filtered = filteredProducts.map((product: SearchItem) => (
		<div key={product.productId}>
			<Link href={{ pathname: 'products/product', query: { pk: product.pk } }}>
				{product.name}
			</Link>
		</div>
	));

	return <div>{filtered}</div>;
};

export default SearchList;
