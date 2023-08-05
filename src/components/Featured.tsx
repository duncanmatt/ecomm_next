import React from 'react';
import { CarouselProduct, FeaturedProduct } from '../../interfaces';
import Link from 'next/link';
import Image from 'next/image';
import ShirtCarousel from './ShirtCarousel';

type Featured = {
  featured: Array<FeaturedProduct>;
  shirts: Array<CarouselProduct>;
};

const Featured = ({ featured, shirts }: Featured) => {
  return (
    <div>
      <ShirtCarousel shirts={shirts} />
      <div className='text-center py-8'>
        <h4 className='text-2xl font-semibold tracking-wider'>
          THE BLACK SHEEP
        </h4>
        <p className='text-base font-light tracking-tight'>
          fashionably comfortable streetwear
        </p>
      </div>
      <div className='relative overflow-hidden max-md:min-h-main'>
        <div className='w-full aspect-[0.8/1] '>
          <Link
            href={{
              pathname: `/products/product`,
              query: { productId: featured[0].prodQuery },
            }}
            className='h-full'
          >
            <picture className='absolute object-center-top bg-gradi w-full h-full'>
              <Image
                alt='description'
                src={featured[0].featImgUrl}
                placeholder='blur'
                blurDataURL='https://ecomm-imgs-test.s3.amazonaws.com/ecomm-imgs-test/tile.jpg'
                fill
                className='object-cover -z-10'
              />
            </picture>
          </Link>
        </div>
        <div className='right-0 text-center left-0 absolute bottom-20'>
          <div className='relative w-full h-full flex flex-col'>
            <span className='text-xl font-bold text-white uppercase'>
              Angel Hoodie
            </span>
            <span className='my-3'>
              <button className='bg-g border-2 font-medium text-lg rounded-xs h-[2.95rem] px-1rem border-transparent'>
                Shop Sweatshirts
              </button>
            </span>
          </div>
        </div>
      </div>
      <div></div>
    </div>
  );
};

export default Featured;
