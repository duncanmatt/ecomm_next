import Layout from '@/components/Layout';
import Image from 'next/image';

export default () => {
  <>
    <Layout>
      <main className='min-h-main relative'>
        <div className='h-full p-1rem'>
          <div className=''>
            {/* <ul>
              {featured?.map((product, index) => (
                <li key={index}>
                  <Image
                    alt='description'
                    src={product.imgUrl}
                    width={400}
                    height={400}
                  />
                </li>
              ))}
            </ul> */}
          </div>
        </div>
      </main>
    </Layout>
  </>;
};
