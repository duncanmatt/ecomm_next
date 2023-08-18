import Layout from '@/components/Layout';
import Link from 'next/link';
import Image from 'next/image';
import type { InferGetStaticPropsType, GetStaticProps } from 'next';

type LandingImg = {
  alt: string;
  src: string;
};

export const getStaticProps: GetStaticProps<{
  landingImg: LandingImg;
}> = async () => {
  const landingImg = {
    src: 'https://ecomm-imgs-test.s3.amazonaws.com/ecomm-imgs-test/landing-bg-2.jpg',
    alt: 'black sheep background',
  };
  return { props: { landingImg } };
};

const Home = ({
  landingImg,
}: InferGetStaticPropsType<typeof getStaticProps>) => {
  return (
    <>
      <Layout>
        <main className='h-full'>
          <div className='relative'>
            <div className='absolute z-10 left-0 right-0 bottom-auto top-[50%] mx-auto'>
              <div className='text-center text-white'>
                <h4 className='text-2xl uppercase font-d font-semibold tracking-wider'>
                  Summer 2023
                </h4>
                <Link
                  className='text-base font-light tracking-tight underline z-10'
                  href='/products/collection'
                >
                  shop the collection
                </Link>
              </div>
            </div>
            <div className='h-full w-full'>
              <div className='relative h-main w-full object-cover overflow-hidden'>
                <Image
                  alt={landingImg.alt}
                  src={landingImg.src}
                  placeholder='blur'
                  blurDataURL={landingImg.src}
                  fill
                  quality={95}
                  className='-z-10 bg-repeat animate-fadeIn'
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
