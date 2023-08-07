import Layout from '@/components/Layout';
import Link from 'next/link';
import Image from 'next/image';

const Home = () => {
  return (
    <>
      <Layout>
        <main className='min-h-main'>
          <div className='h-main relative w-full'>
            <div className='absolute z-10 left-0 right-0 bottom-auto top-[40%] mx-auto'>
              <div className='text-center uppercase p-8 text-white'>
                <h4 className='text-2xl font-d font-semibold tracking-widest'>
                  Summer 2023
                </h4>
                <Link className='z-10' href='/products/collection'>
                  <p className='text-sm font-light tracking-tight underline'>
                    shop collection
                  </p>
                </Link>
              </div>
            </div>
            <div className='h-main w-full'>
              <div className='relative h-full w-full object-cover overflow-hidden'>
                <Image
                  alt='tile'
                  src='https://ecomm-imgs-test.s3.amazonaws.com/ecomm-imgs-test/landing-bg.jpg'
                  fill
                  className='-z-10'
                />
              </div>
            </div>
          </div>
        </main>
      </Layout>
    </>
  );
};

export default Home;
