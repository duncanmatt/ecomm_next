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
      <span className='bg-white rounded-circle absolute z-10 top-3 right-4'>
        <button
          className='relative -translate-y-[1px] flex items-center justify-center h-[1.875rem] w-[1.875rem] z-5'
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
            blurDataURL='ttps://ecomm-imgs-test.s3.amazonaws.com/ecomm-imgs-test/tile.jpg'
            fill
            className='flex'
          />
        </div>
        <div className='px-3 pb-2 z-[4]'>
          <div className='flex w-full'>
            <div className='flex flex-col w-full'>
              <div className=''>
                <h5 className='text-lg font-medium tracking-wide'>
                  {product.name}
                </h5>
              </div>
              <div className='flex flex-row justify-between items-center w-full'>
                <span className='font-light text-base'>
                  {formatAmountForDisplay(Number(product.price), 'usd')}
                </span>
                <span className='font text-xs uppercase tracking-tight'>
                  sold out
                </span>
              </div>
            </div>
          </div>
        </div>
      </Link>
    </li>
  );
};

export default ProductCard;