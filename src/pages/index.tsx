import Layout from '@/components/Layout';
import { InferGetStaticPropsType } from 'next';
import { GetStaticProps } from 'next';
import Link from 'next/link';
import Image from 'next/image';

const Home = () => {
  return (
    <>
      <Layout>
        <main className='min-h-main relative'>
          <div className='h-full'>
            <div className='relative h-main w-full bg-[radial-gradient(ellipse_at_top_left,_var(--tw-gradient-stops))] from-zinc-700 via-zinc-500 to-zinc-300'>
              <Image
                alt='tile'
                src='https://ecomm-imgs-test.s3.amazonaws.com/ecomm-imgs-test/home-mobile.jpg'
                fill
                className='backdrop-blur-6xl'
              />
            </div>
            <div>
              <div className='text-center py-8'>
                <h4 className='text-2xl font-d font-semibold tracking-wider'>
                  THE BLACK SHEEP
                </h4>
                <p className='text-sm font-light tracking-tight'>
                  fashionably comfortable streetwear
                </p>
              </div>
            </div>
          </div>
        </main>
      </Layout>
    </>
  );
};

export default Home;
