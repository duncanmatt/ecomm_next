import Link from 'next/link';

const Empty = () => {
  return (
    <>
      <h3 className='uppercase text-center font-semibold py-1rem'>
        your shopping cart is empty
      </h3>
      <div className='flex flex-col mt-2rem gap-2'>
        <Link
          className='bg-b border-2 border-transparent h-[2.4rem] flex items-center justify-center rounded-xs text-white'
          href='/Login'
        >
          Login
        </Link>
        <Link
          className='border-2 border-b h-[2.4rem] flex items-center justify-center rounded-xs'
          href='/Checkout'
        >
          Create account
        </Link>
        <Link
          className='bg-b border-2 border-transparent h-[2.4rem] flex items-center justify-center rounded-xs text-center text-white'
          href='/'
        >
          Continue shopping
        </Link>
      </div>
    </>
  );
};

export default Empty;
