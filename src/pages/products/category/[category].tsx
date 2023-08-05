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
        <div className='mb-3rem text-3xl uppercase'>
          <h2 className='font-bold'>{category}</h2>
        </div>
        <ul className='grid grid-rows-1 grid-cols-2 md:grid-cols-3 2xl:grid-cols-4 gap-x-4'>
          {products?.map((product: Product, index: number) => (
            <li className='mb-16 h-[inherit] relative' key={index}>
              <Image
                alt={product.name}
                src='https://ecomm-imgs-test.s3.amazonaws.com/ecomm-imgs-test/tile.jpg'
                fill
                className='aspect-[116/227] -z-[1] rounded-xs'
              />
              <span className='bg-white rounded-circle absolute z-10 top-3 right-4'>
                <button
                  className='relative -translate-y-[1px] flex items-center justify-center h-[1.875rem] w-[1.875rem] z-5'
                  onClick={() => dispath(cartSlice.actions.addToCart(product))}
                >
                  <CartIcon />
                </button>
              </span>
              <Link
                className='z-0 h-full w-full'
                // as='/products/product'
                href={{
                  pathname: `/products/product`,
                  query: { productId: product.productId },
                }}
              >
                <div className='relative aspect-[0.85/1]'>
                  <Image
                    alt='description'
                    src={product.imgUrl}
                    fill
                    className='flex'
                  />
                </div>
                <div className='p-2 z-[4]'>
                  <div className='flex flex-col text-xs'>
                    <span className='text-base'>{product.name}</span>
                    <span className='font-semibold text-sm'>
                      ${product.price}.00
                    </span>
                  </div>
                </div>
              </Link>
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
