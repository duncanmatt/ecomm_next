import Layout from '@/components/Layout';
import Image from 'next/image';
import type {
  GetServerSidePropsContext,
  GetServerSideProps,
  InferGetServerSidePropsType,
} from 'next';
import { useDispatch } from '../../../lib/redux/store';
import { addToCart } from '../../../lib/redux/slices/cartSlice';
import { formatAmountForDisplay } from '../../../utils/stripe-helpers';

export default ({
  product,
}: InferGetServerSidePropsType<typeof getServerSideProps>) => {
  const dispath = useDispatch();

  return (
    <Layout>
      <div className=''>
        <div className='grid grid-cols-1 grid-rows-2 md:grid-cols-2'>
          <div className='relative w-full h-full'>
            <Image
              src='https://ecomm-imgs-test.s3.amazonaws.com/ecomm-imgs-test/tile.jpg'
              alt='background'
              fill
              className='bg-repeat animate-fadeIn'
            />
            <div className='mt-[60px]'>
              <div className='relative aspect-[5/6] h-full w-full'>
                <Image alt='description' src={product.imgUrl} fill />
              </div>
            </div>
          </div>
          <div className='py-1rem md:my-auto'>
            <div className='ps-1rem'>
              <h4 className='text-lg font-semibold uppercase'>
                {product.name}
              </h4>
              <p className='font-light tracking-wide'>{product.desc}</p>
            </div>
            <div className='px-1rem my-3rem'>
              <div className='flex flex-wrap w-full justify-between self-center'>
                <h2 className='font-bold uppercase'>
                  {formatAmountForDisplay(product.price, 'usd')}
                </h2>
                <span>sold out</span>
              </div>
              <div className='py-1rem'>
                <span>Size</span>
              </div>
              <div className='w-full flex self-end py-1rem'>
                <button
                  onClick={() => dispath(addToCart(product))}
                  className='bg-5 h-[2.4rem] font-xl font-semibold border-2 border-transparent text-white rounded-xs w-full'
                >
                  Add to cart
                </button>
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
  const id = context.query?.productId;

  const res = await fetch(
    `https://c4z5zswbfk.execute-api.us-east-1.amazonaws.com/api/products/product/?id=${id}`,
    {
      method: 'GET',
    }
  );

  const data = await res.json();

  return { props: { product: data.Item } };
};
