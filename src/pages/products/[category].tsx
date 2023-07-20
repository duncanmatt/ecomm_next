import Layout from '@/components/Layout';
import Image from 'next/image';
import type {
	GetServerSidePropsContext,
	GetServerSideProps,
	InferGetServerSidePropsType,
} from 'next';
import CartIcon from '@/components/icons/CartIcon';
import { Product } from '../../../interfaces';
import { cartSlice } from '../../../lib/redux/slices/cartSlice';
import { useDispatch } from '../../../lib/redux/store';

export default ({
	products,
	category,
}: InferGetServerSidePropsType<typeof getServerSideProps>) => {
	const dispath = useDispatch();

	return (
		<Layout>
			<div className='p-1rem'>
				<div className='mb-3rem text-2xl uppercase'>
					<h2 className='font-bold'>{category}</h2>
				</div>
				<ul className='grid grid-rows-1 grid-cols-2 md:grid-cols-3 2xl:grid-cols-4 gap-x-4'>
					{products?.map((product: Product, index: number) => (
						<li
							className='relative mb-20'
							key={index}>
							<div className='relative z-0 aspect-[168/227]'>
								<button
									className='absolute right-8 top-5 rounded-full flex z-100'
									onClick={() =>
										dispath(cartSlice.actions.addToCart(product.pk.toString()))
									}>
									<CartIcon />
								</button>
								<Image
									alt='description'
									src={product.imgUrl}
									fill
									className='absolute flex -z-10 bg-[rgba(0,0,0,0.03)]'
								/>
							</div>
							<div className='pt-2 flex flex-row justify-between'>
								<div className='flex flex-col text-xs'>
									<span className='uppercase'>{product.name}</span>
									<span>${product.price}.00</span>
								</div>
							</div>
						</li>
					))}
				</ul>
			</div>
		</Layout>
	);
};

export const getServerSideProps: GetServerSideProps = async (
	context: GetServerSidePropsContext,
) => {
	const category = context.params?.category;

	const response = await fetch(
		`http://localhost:3000/api/products/${category}`,
		{
			method: 'GET',
			headers: {
				'Content-Type': 'application/json',
			},
		},
	);

	const products: Product[] = await response.json();

	return { props: { products, category } };
};
