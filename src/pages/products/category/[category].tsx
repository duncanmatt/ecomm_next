import Layout from '@/components/Layout';
import Image from 'next/image';
import Link from 'next/link';
import type {
  GetServerSidePropsContext,
  GetServerSideProps,
  InferGetServerSidePropsType,
} from 'next';
import CartIcon from '@/components/icons/CartIcon';
import { Product } from '../../../../interfaces';
import { cartSlice } from '../../../../lib/redux/slices/cartSlice';
import { useDispatch } from '../../../../lib/redux/store';

export default ({
  products,
  category,
}: InferGetServerSidePropsType<typeof getServerSideProps>) => {
  const dispath = useDispatch();

  return (
    <Layout>
      <div className='p-1rem'>
        <div className='mb-3rem text-2xl uppercase'>
          <h2 className='font-bold'>{category}</h2>
        </div>
        <ul className='grid grid-rows-1 grid-cols-2 md:grid-cols-3 2xl:grid-cols-4 gap-x-4'>
          {products?.map((product: Product, index: number) => (
            <li className='relative mb-20' key={index}>
              <Link
                className='z-0'
                // as='/products/product'
                href={{
                  pathname: `/products/product`,
                  query: { productId: product.productId },
                }}
              >
                <div className='relative aspect-[168/227] z-5'>
                  <Image
                    alt='description'
                    src={product.imgUrl}
                    fill
                    className='absolute flex -z-10 bg-[rgba(0,0,0,0.03)]'
                  />
                </div>
              </Link>
              <div className='pt-2 flex flex-row justify-between'>
                <div className='flex flex-col text-xs'>
                  <span className='font-bold'>{product.name}</span>
                  <span>${product.price}.00</span>
                </div>
                <button
                  className=' rounded-full flex z-5'
                  onClick={() => dispath(cartSlice.actions.addToCart(product))}
                >
                  <CartIcon />
                </button>
              </div>
            </li>
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
    `https://c4z5zswbfk.execute-api.us-east-1.amazonaws.com/products/category/?id=${id}`,
    {
      method: 'GET',
    }
  );

  const data = await response.json();

  return { props: { products: data.Items, category } };
};
