import Layout from '@/components/Layout';
import Link from 'next/link';
import Image from 'next/image';

const Home = () => {
  return (
    <>
      <Layout>
        <main className='h-full'>
          <div className='animate-intro relative'>
            <div className='absolute z-10 left-0 right-0 bottom-auto top-[45%] mx-auto'>
              <div className='text-center p-8 text-white'>
                <h4 className='text-2xl uppercase font-d font-semibold tracking-wider'>
                  Summer 2023
                </h4>
                <Link className='z-10' href='/products/collection'>
                  <p className='text-base font-light tracking-tight underline'>
                    shop the collection
                  </p>
                </Link>
              </div>
            </div>
            <div className='h-main w-full'>
              <div className='relative  h-full w-full object-cover overflow-hidden'>
                <Image
                  alt='tile'
                  src='https://ecomm-imgs-test.s3.amazonaws.com/ecomm-imgs-test/landing-bg-2.jpg'
                  fill
                  quality={100}
                  className='-z-10 bg-repeat'
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
