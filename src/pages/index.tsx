import Layout from '@/components/Layout';
import Image from 'next/image';
import { InferGetStaticPropsType } from 'next';
import { GetStaticProps } from 'next';

type Product = {
	pk: string;
	sk: string;
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
										className='relative'
										key={index}>
										<div className='mb-12 aspect-[1/1]'>
											<Image
												alt='description'
												src={product.imgUrl}
												fill
												className='absolute'
											/>
											<span className='relative'>{product.sk}</span>
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
	const res = await fetch('http://localhost:3000/api/products/featured', {
		method: 'GET',
		headers: {
			'Content-Type': 'application/json',
		},
	});

	const featured: Product[] = await res.json();

	return { props: { featured } };
};

export default Home;
