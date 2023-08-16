import Link from 'next/link';
import CaretRightIcon from '../icons/CaretRightIcon';
// import ProfileIcon from '../icons/ProfileIcon';

const links = [
  {
    id: 1,
    target: 'shirts',
  },
  {
    id: 2,
    target: 'sweatshirts',
  },
  {
    id: 3,
    target: 'outerwear',
  },
];

const Menu = ({ fn }: any) => {
  return (
    <div className='h-[calc(100vh-60px)] bg-faded w-full p-1rem'>
      <ul className='block relative animate-fadeInFast transition-all'>
        {links.map((link) => (
          <li key={link.id} className='pb-1rem'>
            <Link
              onClick={fn}
              className='flex flex-1 flex-row justify-between items-center text-base hover:underline font-medium'
              href={{
                pathname: `/products/category/${link.target}`,
                query: { categoryId: link.id },
              }}
            >
              <span className='capitalize'>{link.target}</span>
              <span className='flex'>
                <CaretRightIcon />
              </span>
            </Link>
          </li>
        ))}
      </ul>
      <div className='my-3rem'>
        <div>
          <Link
            className='flex flex-row gap-1 uppercase items-center hover:underline'
            href='/Profile'
          >
            {/* <span className='p-1 py-3'>
              <ProfileIcon />
            </span> */}
            <span className='text-lg uppercase tracking-tight font-light'>
              Account
            </span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Menu;
