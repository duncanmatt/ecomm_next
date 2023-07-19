import Layout from '@/components/Layout';
import Image from 'next/image';
import type {
	GetServerSidePropsContext,
	GetServerSideProps,
	InferGetServerSidePropsType,
} from 'next';
import { Product } from '../../../interfaces';

export default ({
	products,
	category,
}: InferGetServerSidePropsType<typeof getServerSideProps>) => {
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
							<div className='bg-gradi relative aspect-[168/227]'>
								<Image
									alt='description'
									src={product.imgUrl}
									fill
									className='absolute'
								/>
							</div>
							<div className='pt-2'>
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
