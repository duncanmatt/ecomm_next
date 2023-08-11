import Layout from '@/components/Layout';
import Image from 'next/image';
import type {
  GetServerSidePropsContext,
  GetServerSideProps,
  InferGetServerSidePropsType,
} from 'next';
import { useDispatch } from '../../../lib/redux/store';
import { addToCart } from '../../../lib/redux/slices/cartSlice';

export default ({
  product,
}: InferGetServerSidePropsType<typeof getServerSideProps>) => {
  const dispath = useDispatch();

  return (
    <Layout>
      <div className='p-1rem'>
        <div className='grid grid-cols-1 grid-rows-cart md:grid-cols-2'>
          <div className='relative py-4 w-full h-full aspect-[168/227]'>
            <div className='relative aspect-square h-full w-full p-3rem'>
              <Image alt='description' src={product.imgUrl} fill />
            </div>
          </div>
          <div className='ps-1rem md:m-auto'>
            <div className='flex bg-[#cbcbcb] rounded-reg md:w-[24em] md:h-[12em] lg:w-[30em] lg:h-[16em] flex-wrap text-xs'>
              <div className='flex flex-wrap justify-between w-full p-1rem'>
                <h2 className='font-bold uppercase'>{product.name}</h2>
                <span className=''>sold out</span>
              </div>
              <div className='w-full flex self-end p-1rem'>
                <button
                  onClick={() => dispath(addToCart(product))}
                  className='bg-b h-[2.4rem] font-xl font-semibold border-2 border-transparent text-white rounded-xs w-full'
                >
                  Add to cart
                </button>
              </div>
            </div>
          </div>
          <div className='w-full row-2 text-center py-1rem'>
            <span className=''>{product.desc}</span>
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
