import Layout from '@/components/Layout';
import type {
  GetServerSidePropsContext,
  GetServerSideProps,
  InferGetServerSidePropsType,
} from 'next';
import { Product } from '../../../../interfaces';
import ProductCard from '@/components/products/ProductCard';
import NotFound from '@/components/NotFound';

const CategoryPage = ({
  products,
  category,
  quantity,
}: InferGetServerSidePropsType<typeof getServerSideProps>) => {
  const invalid = !products || quantity === 0 || !category;

  if (invalid) {
    return <NotFound />;
  }
  return (
    <>
      <div className='px-1rem mt-[7.45rem]'>
        <div className='uppercase text-center'>
          <h2 className='font-10 font-semibold text-lg tracking-widest'>
            {category}
          </h2>
        </div>
        <div className='border-b-1 border-5 px-2 my-3rem'>
          <div className='w-full font-light text-sm h-[2.125rem] flex flex-row justify-between items-center'>
            <span>{quantity}</span>
            <button>selections</button>
          </div>
        </div>
        <ul className='grid grid-rows-1 grid-cols-2 md:grid-cols-3 2xl:grid-cols-4 gap-x-4'>
          {products?.map((product: Product, index: number) => (
            <ProductCard key={index} {...product} />
          ))}
        </ul>
      </div>
    </>
  );
};

CategoryPage.getLayout = function getLayout(page: React.ReactElement) {
  return <Layout>{page}</Layout>;
};

export default CategoryPage;

export const getServerSideProps: GetServerSideProps = async (
  context: GetServerSidePropsContext
) => {
  const category = context.params?.category;

  const valid =
    category === 'shirts' ||
    category === 'sweatshirts' ||
    category === 'outerwear';

  if (!valid) {
    return { props: { products: null, quantity: 0, category: null } };
  }

  const response = await fetch(
    (process.env.API_URL +
      `/api/products/category/?name=${category}`) as string,
    {
      method: 'GET',
    }
  );

  const data = await response.json();

  return { props: { products: data.Items, quantity: data.Count, category } };
};
