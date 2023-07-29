import client from '../../../lib/db';
import Layout from '@/components/Layout';
import Image from 'next/image';
import type {
  GetServerSidePropsContext,
  GetServerSideProps,
  InferGetServerSidePropsType,
} from 'next';
import { GetCommand, GetCommandInput } from '@aws-sdk/lib-dynamodb';
import { useDispatch } from '../../../lib/redux/store';
import { addToCart } from '../../../lib/redux/slices/cartSlice';

export default ({
  product,
}: InferGetServerSidePropsType<typeof getServerSideProps>) => {
  const dispath = useDispatch();

  return (
    <Layout>
      <div className='p-1rem'>
        <div className='grid grid-cols-1 grid-rows-2 md:grid-cols-2 md:grid-rows-1'>
          <div className='relative w-full h-full aspect-[168/227]'>
            <Image
              alt='description'
              src={product.imgUrl}
              fill
              className='absolute flex -z-10 bg-[rgba(0,0,0,0.03)]'
            />
          </div>
          <div className='md:p-1rem'>
            <div className='flex flex-wrap text-xs'>
              <div className='flex flex-col pt-1rem'>
                <h2 className='font-bold uppercase'>{product.name}</h2>
                <span>${product.price}.00</span>
              </div>
              <div className='w-full my-1rem'>
                <button
                  onClick={() => dispath(addToCart(product))}
                  className='bg-b h-[2.4rem] font-xl font-semibold border-2 border-transparent text-white rounded-xs w-full'
                >
                  Add to cart
                </button>
              </div>
              <div className='w-full text-center py-1rem'>
                <span className=''>{product.desc}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export const getServerSideProps: GetServerSideProps = async (
  context: GetServerSidePropsContext
) => {
  const pk = context.query?.pk;
  console.log(pk);
  const response = await fetch(
    'https://c4z5zswbfk.execute-api.us-east-1.amazonaws.com/products/product' +
      new URLSearchParams({
        pk: `${pk}`,
      }),
    {
      method: 'GET',
    }
  );

  const data = await response.json();

  return { props: { product: data.Item } };
};
