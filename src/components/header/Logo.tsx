import Link from 'next/link';

const Logo = () => {
  return (
    <span>
      <Link className='font-bold tracking-tight text-3xl' href='/'>
        BSW
      </Link>
    </span>
  );
};

export default Logo;
