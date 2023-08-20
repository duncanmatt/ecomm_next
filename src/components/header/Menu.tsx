import Link from 'next/link';
import CaretRightIcon from '../icons/CaretRightIcon';
import ProfileIcon from '../icons/ProfileIcon';
import CloseIcon from '../icons/CloseIcon';

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

type Status = {
  active: boolean;
};

const Menu = ({ active }: Status) => {
  return (
    <div
      style={{
        transform: active ? 'translateX(0)' : 'translateX(-100%)',
      }}
      className='absolute left-0 top-0 overflow-x-hidden h-full bg-faded backdrop-blur-xl'
    >
      <nav className='flex flex-col'>
        <div className='flex items-center'>
          <span className='flex justify-end w-full'>
            <button className='flex stroke-5'>
              <CloseIcon />
            </button>
          </span>
        </div>
        <div>
          <ul className='block h-full'>
            {links.map((link) => (
              <li key={link.id} className='pb-1rem text-5'>
                <Link
                  // onClick={fn}
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
                className='flex flex-row gap-1 uppercase items-center hover:font-base w-full justify-between'
                href='/Profile'
              >
                <span className='text-lg text-5 uppercase tracking-tight font-light'>
                  Account
                </span>
                <span className='stroke-5'>
                  <ProfileIcon />
                </span>
              </Link>
            </div>
          </div>
        </div>
      </nav>
      //{' '}
    </div>
  );
};

export default Menu;
