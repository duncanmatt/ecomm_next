import Layout from '@/components/Layout';
import type { GetServerSidePropsContext } from 'next';

export default ({ category }: any) => {
	return (
		<Layout>
			<div className='p-1rem'>
				<div className='grid grid-rows-1 grid-cols-2 md:grid-cols-3 xl:grid-cols-4 justify-center'>
					<div className='font-bold'>{category}</div>
				</div>
			</div>
		</Layout>
	);
};

export const getServerSideProps = (context: GetServerSidePropsContext) => {
	const category = context.params?.category;

	// retrieve all products from db with matching category

	return { props: { category } };
};
