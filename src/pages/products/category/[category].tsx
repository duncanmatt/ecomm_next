import Layout from '@/components/Layout';
import type {
  GetServerSidePropsContext,
  GetServerSideProps,
  InferGetServerSidePropsType,
} from 'next';
import { Product } from '../../../../interfaces';
import ProductCard from '@/components/products/ProductCard';

export default ({
  products,
  category,
}: InferGetServerSidePropsType<typeof getServerSideProps>) => {
  return (
    <Layout>
      <div className='px-1rem py-3rem'>
        <div className='mt-8 mb-2rem uppercase text-center'>
          <h2 className='text-2xl tracking-widest'>{category}</h2>
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
  const id = context.query?.categoryId;
  const category = context.params?.category;

  const response = await fetch(
    `https://c4z5zswbfk.execute-api.us-east-1.amazonaws.com/api/products/category/?id=${id}`,
    {
      method: 'GET',
    }
  );

  const data = await response.json();

  return { props: { products: data.Items, category } };
};
