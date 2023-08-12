import Link from 'next/link';

const Logo = () => {
  return (
    <span>
      <Link className='font-semibold tracking-wide font-5 text-3xl' href='/'>
        BSW
      </Link>
    </span>
  );
};

export default Logo;
