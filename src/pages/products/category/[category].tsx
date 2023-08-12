import Layout from '@/components/Layout';
import type {
  GetServerSidePropsContext,
  GetServerSideProps,
  InferGetServerSidePropsType,
} from 'next';
import { Product } from '../../../../interfaces';
import ProductCard from '@/components/products/ProductCard';
import SearchIcon from '@/components/icons/SearchIcon';

export default ({
  products,
  category,
  quantity,
}: InferGetServerSidePropsType<typeof getServerSideProps>) => {
  return (
    <Layout>
      <div className='px-1rem mt-[7.45rem]'>
        <div className='uppercase text-center'>
          <h2 className='font-10 font-semibold text-lg tracking-widest'>
            {category}
          </h2>
        </div>
        <div className='border-b-1 border-5 px-2 my-3rem'>
          <div className='w-full text-sm h-[2.125rem] flex flex-row justify-between items-center'>
            <span>({quantity}) selections</span>
            <button>filter & sort</button>
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
  const id = context.query?.categoryId;
  const category = context.params?.category;

  const response = await fetch(
    `https://c4z5zswbfk.execute-api.us-east-1.amazonaws.com/api/products/category/?id=${id}`,
    {
      method: 'GET',
    }
  );

  const data = await response.json();

  return { props: { products: data.Items, quantity: data.Count, category } };
};
