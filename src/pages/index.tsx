import Layout from '@/components/Layout';
import Link from 'next/link';
import Image from 'next/image';
import type { InferGetStaticPropsType, GetStaticProps } from 'next';

type LandingImg = {
  alt: string;
  src: string;
  blurUrl: string;
};

export const getStaticProps: GetStaticProps<{
  landingImg: LandingImg;
}> = async () => {
  const landingImg = {
    src: 'https://ecomm-imgs-test.s3.amazonaws.com/ecomm-imgs-test/landing-bg-2.jpg',
    alt: 'black sheep background',
    blurUrl:
      'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mMM/Q8AAa8BVlfOay4AAAAASUVORK5CYII=',
  };

  return { props: { landingImg } };
};

const Home = ({
  landingImg,
}: InferGetStaticPropsType<typeof getStaticProps>) => {
  return (
    <>
      <main className='h-full'>
        <div className='relative'>
          <div className='absolute z-10 left-0 right-0 bottom-auto top-[50%] mx-auto animate-intro'>
            <div className='text-white'>
              <div className='text-center selection:bg-transparent'>
                <h4 className='text-2xl uppercase font-d font-semibold tracking-wide'>
                  Summer 2023
                </h4>
              </div>
              <div className='flex justify-center my-4'>
                <button className='flex items-center justify-center hover:-translate-y-[1px] rounded-xs'>
                  <Link
                    className='px-4 py-2 text-5 tracking-wide font-medium bg-white rounded-xs'
                    href='/products/collection'
                  >
                    explore collection
                  </Link>
                </button>
              </div>
            </div>
          </div>
          <div className='h-full selection:bg-transparent w-full'>
            <div className='relative h-main aspect-[0.6/1] w-full bg-transparent'>
              <Image
                alt={landingImg.alt}
                src={landingImg.src}
                placeholder='blur'
                blurDataURL={landingImg.blurUrl}
                fill
                sizes='(min-width: 850px) 1218px, 100vw'
                quality={95}
                priority={true}
                className='object-cover bg-cover w-full h-full overflow-hidden'
              />
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

Home.getLayout = function getLayout(page: React.ReactElement) {
  return <Layout>{page}</Layout>;
};

export default Home;
