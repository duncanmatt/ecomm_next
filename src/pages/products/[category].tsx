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
				<div className='flex justify-center'>
					<ul className='grid grid-rows-1 grid-cols-2 md:grid-cols-3 2xl:grid-cols-4'>
						{products?.map((product: Product, index: number) => (
							<li
								className='relative bg-gradi m-2'
								key={index}>
								<div className='min-h-[30em] min-w-[30em]'>
									<Image
										alt='description'
										src={product.imgUrl}
										fill
										className='absolute aspect-[1/1] rounded-reg'
									/>
									<span className='relative ms-2'>{product.sk}</span>
								</div>
							</li>
						))}
					</ul>
				</div>
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
