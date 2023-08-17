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
  quantity,
}: InferGetServerSidePropsType<typeof getServerSideProps>) => {
  return (
    <Layout>
      <div className='px-1rem mt-[7.45rem]'>
        <div className='text-center uppercase'>
          <h2 className='font-semibold font-10 text-lg tracking-widest'>
            summer 2023
          </h2>
        </div>
        <div className='border-b-1 border-5 px-2 my-3rem'>
          <div className='w-full text-sm h-[2.125rem] flex flex-row justify-between items-center'>
            <span>{quantity} selections</span>
            <button className='capitalize'>filter & sort</button>
          </div>
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
    (process.env.API_URL + '/api/products') as string
  );

  const products: Product[] = response.Items;
  const quantity: number = response.Count;

  return { props: { products, quantity } };
};
