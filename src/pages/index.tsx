import Layout from '@/components/Layout';
import Image from 'next/image';
import { InferGetStaticPropsType } from 'next';
import { GetStaticProps } from 'next';

type Product = {
	pk: string;
	name: string;
	imgUrl: string;
};

const Home = ({ featured }: InferGetStaticPropsType<typeof getStaticProps>) => {
	return (
		<>
			<Layout>
				<main className='min-h-main relative'>
					<div className='p-1rem'>
						<div className='flex justify-center'>
							<ul>
								{featured?.map((product: Product, index: number) => (
									<li
										className='relative bg-gradi'
										key={index}>
										<div className='mb-12 min-h-[30em] min-w-[30em]'>
											<Image
												alt='description'
												src={product.imgUrl}
												fill
												className='absolute aspect-[1/1] rounded-reg'
											/>
											<span className='relative ms-2'>{product.name}</span>
										</div>
									</li>
								))}
							</ul>
						</div>
					</div>
				</main>
			</Layout>
		</>
	);
};

export const getStaticProps: GetStaticProps = async context => {
	const res = await fetch(
		'	https://c4z5zswbfk.execute-api.us-east-1.amazonaws.com/products/featured',
		{
			method: 'GET',
		},
	);

	const featured = await res.json();

	return { props: { featured: featured.Items } };
};

export default Home;
