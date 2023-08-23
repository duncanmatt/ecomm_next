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
      'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mPM/A8AAdcBav6SYsIAAAAASUVORK5CYII=',
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
            <div className='absolute z-10 left-0 right-0 bottom-auto top-[50%] mx-auto animate-intro'>
              <div className='text-white'>
                <div className='text-center'>
                  <h4 className='text-2xl uppercase font-d font-semibold tracking-wide'>
                    Summer 2023
                  </h4>
                </div>
                <div className='flex justify-center'>
                  <span className='flex items-center justify-center'>
                    <Link
                      className='text-md font-extralight tracking-reg underline underline-offset-auto hover:no-underline'
                      href='/products/collection'
                    >
                      explore the collection
                    </Link>
                  </span>
                </div>
              </div>
            </div>
            <div className='h-full w-full'>
              <div className='relative h-main w-full overflow-hidden'>
                <Image
                  alt={landingImg.alt}
                  src={landingImg.src}
                  placeholder='blur'
                  blurDataURL={landingImg.blurUrl}
                  fill
                  sizes='(min-width: 850px) 80vw, 100vw'
                  quality={95}
                  className='-z-10 object-cover bg-clip-padding'
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
