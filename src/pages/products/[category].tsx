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
				<ul className='grid grid-rows-1 grid-cols-2 md:grid-cols-3 2xl:grid-cols-4'>
					{products?.map((product: Product, index: number) => (
						<li
							className='relative bg-gradi mx-2 my-3'
							key={index}>
							<div className='relative aspect-[1/1]'>
								<Image
									alt='description'
									src={product.imgUrl}
									fill
									className='absolute rounded-t-reg'
								/>
							</div>
							<div className='p-2 bg-g rounded-b-reg'>
								<div className='flex flex-col'>
									<span className=''>{product.name}</span>
									<span>{product.price}</span>
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
