import { cartSlice } from '../../../../lib/redux/slices/cartSlice/cartSlice';
import {
  GetServerSideProps,
  GetServerSidePropsContext,
  InferGetServerSidePropsType,
} from 'next';
import { useDispatch } from '../../../../lib/redux/store';
import { fetchGetJSON } from '../../../../utils/api-helpers';
import { Product } from '../../../../interfaces';
import Image from 'next/image';
import Layout from '@/components/Layout';
import Link from 'next/link';
import CartIcon from '@/components/icons/CartIcon';

export default ({
  products,
}: InferGetServerSidePropsType<typeof getServerSideProps>) => {
  const dispatch = useDispatch();

  return (
    <Layout>
      <div className='p-1rem'>
        <div className='mb-3rem text-3xl uppercase'>
          <h2 className='font-bold'>Messiah Collection</h2>
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
                  onClick={() => dispatch(cartSlice.actions.addToCart(product))}
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
                <div className='px-3 pb-3 z-[4]'>
                  <div className='flex flex-col'>
                    <span className='text-base uppercase tracking-tight font-medium'>
                      {product.name}
                    </span>
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
  const response = await fetchGetJSON(
    'https://c4z5zswbfk.execute-api.us-east-1.amazonaws.com/products'
  );

  console.log(response);

  const products: Product[] = response.Items;

  return { props: { products } };
};