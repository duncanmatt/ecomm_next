import Layout from '@/components/Layout';
import Image from 'next/image';
import type {
  GetServerSidePropsContext,
  GetServerSideProps,
  InferGetServerSidePropsType,
} from 'next';
import { formatAmountForDisplay } from '../../../../utils/stripe-helpers';
import Controls from '@/components/products/Controls';

export default ({
  product,
}: InferGetServerSidePropsType<typeof getServerSideProps>) => {
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
          <div className='md:my-auto'>
            <div className='w-full'>
              <Controls product={product} />
            </div>
            <div>
              <div className='text-center mt-2rem'>
                <h4 className='text-lg font-semibold uppercase'>
                  {product.name}
                </h4>
              </div>
              <div className='flex flex-wrap w-full px-1rem justify-between self-center'>
                <h2 className='font-medium uppercase'>
                  {formatAmountForDisplay(product.price, 'usd')}
                </h2>
                <span>
                  {product.stock === 0 ? (
                    <p className='text-warning'>sold out</p>
                  ) : (
                    <></>
                  )}
                </span>
              </div>
              <div className='p-1rem'>
                <p className='font-light tracking-wide'>{product.desc}</p>
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
  const pid = context.query?.productId;
  const id = context.params?.id;

  const res = await fetch(
    (process.env.API_URL + `/api/products/product/?id=${id}`) as string,
    {
      method: 'GET',
    }
  );

  const data = await res.json();

  return { props: { product: data.Item } };
};
