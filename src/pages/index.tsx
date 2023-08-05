import Layout from '@/components/Layout';
import Image from 'next/image';
import { InferGetStaticPropsType } from 'next';
import { GetStaticProps } from 'next';
import Link from 'next/link';
import { FeaturedProduct } from '../../interfaces';

const Home = ({ featured }: InferGetStaticPropsType<typeof getStaticProps>) => {
  return (
    <>
      <Layout>
        <main className='min-h-main relative'>
          <div className=''>
            <div className=''>
              <div>
                {featured?.map((product: FeaturedProduct, index: number) => (
                  <div className='relative flex overflow-hidden' key={index}>
                    <div className='w-full aspect-[0.8/1] max-h-main'>
                      <Link
                        href={{
                          pathname: `/products/product`,
                          query: { productId: product.prodQuery },
                        }}
                        className='h-full'
                      >
                        <picture className='absolute object-center-top bg-gradi w-full h-full'>
                          <Image
                            alt='description'
                            src={product.featImgUrl}
                            placeholder='blur'
                            blurDataURL='https://ecomm-imgs-test.s3.amazonaws.com/ecomm-imgs-test/tile.jpg'
                            fill
                            className='object-cover -z-10'
                          />
                        </picture>
                      </Link>
                    </div>
                    <div className='right-0 flex left-0 absolute bottom-[1.125rem]'>
                      <span className='relative text-center font-bold text-white uppercase'>
                        {product.name}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </main>
      </Layout>
    </>
  );
};

export const getStaticProps: GetStaticProps = async (context) => {
  const res = await fetch(
    'https://c4z5zswbfk.execute-api.us-east-1.amazonaws.com/products/featured',
    {
      method: 'GET',
    }
  );

  const data = await res.json();

  return { props: { featured: data.Items } };
};

export default Home;
