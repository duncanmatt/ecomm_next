import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import { CarouselProduct } from '../../interfaces';
import Image from 'next/image';

type Shirts = {
  shirts: Array<CarouselProduct>;
};

const ShirtCarousel = ({ shirts }: Shirts) => {
  return (
    <div>
      <div className='relative h-main w-full'>
        <Image
          alt='tile'
          src='https://ecomm-imgs-test.s3.amazonaws.com/ecomm-imgs-test/tile.jpg'
          fill
          className='-z-10 absolute'
        />
        {shirts ? (
          <div className='absolute top-10 bottom-10 right-10 left-10'>
            <div className='relative w-full h-full'>
              <Swiper
                modules={[Navigation, Pagination, Scrollbar, A11y]}
                className='h-full w-full'
                spaceBetween={50}
                slidesPerView={1}
                navigation
                pagination={{ clickable: true }}
                scrollbar={{ draggable: true }}
                onSlideChange={() => console.log('slide change')}
                onSwiper={(swiper) => console.log(swiper)}
              >
                {shirts.map((shirt: CarouselProduct, index: any) => (
                  <SwiperSlide>
                    <div key={index} className='relative w-full h-full'>
                      <Image alt={shirt.name} src={shirt.imgUrl} fill />
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
          </div>
        ) : (
          <span className='border-t-3 border-b animate-spin h-5 w-5'> v</span>
        )}
      </div>
    </div>
  );
};

export default ShirtCarousel;
