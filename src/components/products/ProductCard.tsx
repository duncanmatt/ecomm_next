import { useDispatch } from '../../../lib/redux/store';
import { addToCart } from '../../../lib/redux/slices/cartSlice';
import { formatAmountForDisplay } from '../../../utils/stripe-helpers';
import { Product } from '../../../interfaces';
import Image from 'next/image';
import Link from 'next/link';
import CartIcon from '@/components/icons/CartIcon';

const ProductCard = (product: Product) => {
  const dispatch = useDispatch();

  return (
    <li className='mb-16 h-[inherit] bg-85 rounded-md relative'>
      <span className='bg-white rounded-circle absolute z-10 max-sm:top-1.5 max-sm:right-2 top-3 right-4'>
        <button
          className='relative stroke-5 -translate-y-[1px] flex items-center justify-center h-[1.875rem] w-[1.875rem] z-5'
          onClick={() => dispatch(addToCart(product))}
        >
          <CartIcon />
        </button>
      </span>
      <Link
        className='z-0 h-full w-full'
        // as='/products/product'
        href={{
          pathname: `/products/product`,
          query: { productId: product.productId },
        }}
      >
        <div className='relative bg-gradi aspect-[0.9/1]'>
          <Image
            alt='description'
            src={product.imgUrl}
            placeholder='blur'
            fill
            blurDataURL='data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw=='
            className='flex animate-fadeIn'
          />
        </div>
        <div className='px-3 pb-2 z-0'>
          <div className='flex w-full'>
            <div className='flex flex-col w-full'>
              <div className=''>
                <h5 className='max-sm:text-sm sm:text-lg font-medium tracking-tight'>
                  {product.name}
                </h5>
              </div>
              <div className='font-light py-1 flex flex-row justify-between items-center w-full'>
                <span className='text-sm max-sm:text-xs'>
                  {formatAmountForDisplay(Number(product.price), 'usd')}
                </span>
                <span className='text-xs tracking-wide'>sold out</span>
              </div>
            </div>
          </div>
        </div>
      </Link>
    </li>
  );
};

export default ProductCard;
