import { SearchItem } from '../../interfaces';

const SearchList = ({ filteredProducts }: any) => {
	const filtered = filteredProducts.map((product: SearchItem) => (
		<div key={product.productId}>
			<span>{product.name}</span>
		</div>
	));

	return <div>{filtered}</div>;
};

export default SearchList;
