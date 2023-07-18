import Layout from '@/components/Layout';
import type { GetServerSidePropsContext } from 'next';

export default ({ category }: any) => {
	return (
		<Layout>
			<div className='h-screen flex justify-center'>CATEGORY: {category}</div>
		</Layout>
	);
};

export const getServerSideProps = (context: GetServerSidePropsContext) => {
	const category = context.params?.category;

	// retrieve all products from db with matching category

	return { props: { category } };
};
