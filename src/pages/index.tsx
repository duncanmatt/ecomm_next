import Layout from '@/components/Layout';
import { InferGetStaticPropsType } from 'next';
import { GetStaticProps } from 'next';
import Featured from '@/components/Featured';
import ShirtCarousel from '@/components/ShirtCarousel';
import { FeaturedProduct, CarouselProduct } from '../../interfaces';

const Home = ({
  featured,
  shirts,
}: InferGetStaticPropsType<typeof getStaticProps>) => {
  return (
    <>
      <Layout>
        <main className='min-h-main relative'>
          <div className=''>
            <div className=''>
              <Featured featured={featured} shirts={shirts} />
            </div>
          </div>
        </main>
      </Layout>
    </>
  );
};

export const getStaticProps: GetStaticProps = async (context) => {
  const featuredRes = await fetch(
    'https://c4z5zswbfk.execute-api.us-east-1.amazonaws.com/products/featured',
    {
      method: 'GET',
    }
  );

  const shirtsRes = await fetch(
    'https://c4z5zswbfk.execute-api.us-east-1.amazonaws.com/products/category/?id=1',
    {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    }
  );

  const shirts = await shirtsRes.json();
  const featured = await featuredRes.json();

  return { props: { featured: featured.Items, shirts: shirts.Items } };
};

export default Home;
