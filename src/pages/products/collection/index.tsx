import {
  GetServerSideProps,
  GetServerSidePropsContext,
  InferGetServerSidePropsType,
} from 'next';
import Layout from '@/components/Layout';
import { fetchGetJSON } from '../../../../utils/api-helpers';
import { Product } from '../../../../interfaces';
import ProductCard from '@/components/products/ProductCard';

export default ({
  products,
}: InferGetServerSidePropsType<typeof getServerSideProps>) => {
  return (
    <Layout>
      <div className='p-1rem'>
        <div className='mt-8 mb-2rem text-center uppercase'>
          <h2 className='font-medium text-2xl'>summer 2023</h2>
        </div>
        <ul className='grid grid-rows-1 grid-cols-2 md:grid-cols-3 2xl:grid-cols-4 gap-x-4'>
          {products?.map((product: Product, index: number) => (
            <ProductCard key={index} {...product} />
          ))}
        </ul>
      </div>
    </Layout>
  );
};

export const getServerSideProps: GetServerSideProps = async (
  context: GetServerSidePropsContext
) => {
  const response = await fetchGetJSON(
    'https://c4z5zswbfk.execute-api.us-east-1.amazonaws.com/api/products'
  );

  const products: Product[] = response.Items;

  return { props: { products } };
};
