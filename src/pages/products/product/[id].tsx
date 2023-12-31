import Layout from '@/components/Layout';
import Image from 'next/image';
import type {
  GetServerSidePropsContext,
  GetServerSideProps,
  InferGetServerSidePropsType,
} from 'next';
import { formatAmountForDisplay } from '../../../../utils/stripe-helpers';
import Controls from '@/components/products/Controls';
import NotFound from '@/components/NotFound';

const ProductPage = ({
  product,
}: InferGetServerSidePropsType<typeof getServerSideProps>) => {
  if (!product) {
    return <NotFound />;
  }
  return (
    <>
      <div className='h-full'>
        <div className='grid grid-cols-1 grid-rows-2 md:grid-cols-2'>
          <div className='relative w-full h-full'>
            <Image
              src='https://ecomm-imgs-test.s3.amazonaws.com/ecomm-imgs-test/tile.jpg'
              alt='background'
              fill
            />
            <div className='mt-[60px]'>
              <div className='relative aspect-[5/6] h-full w-full'>
                <Image
                  alt='description'
                  src={product.imgUrl}
                  fill
                  placeholder='blur'
                  blurDataURL='data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw=='
                />
              </div>
            </div>
          </div>
          <div className='md:my-auto'>
            <div className='w-full px-1rem py-1'>
              <Controls product={product} />
            </div>
            <div>
              <div className='text-center py-1rem'>
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
    </>
  );
};

ProductPage.getLayout = function getLayout(page: React.ReactElement) {
  return <Layout>{page}</Layout>;
};

export default ProductPage;

export const getServerSideProps: GetServerSideProps = async (
  context: GetServerSidePropsContext
) => {
  const id = context.params?.id;

  const res = await fetch(
    (process.env.API_URL + `/api/products/product/?id=${id}`) as string,
    {
      method: 'GET',
    }
  );

  const data = await res.json();

  if (data && !data.Item) {
    return { props: { product: null } };
  }

  return { props: { product: data.Item } };
};
