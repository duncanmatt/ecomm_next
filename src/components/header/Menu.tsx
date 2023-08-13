import Link from 'next/link';
import CaretRightIcon from '../icons/CaretRightIcon';
import ProfileIcon from '../icons/ProfileIcon';

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
      <ul className='block relative transition-all'>
        {links.map((link) => (
          <li key={link.id} className='pb-2rem'>
            <Link
              onClick={fn}
              className='flex flex-1 flex-row justify-between items-center text-base hover:underline font-medium'
              href={{
                pathname: `/products/category/${link.target}`,
                query: { categoryId: link.id },
              }}
            >
              <span className='uppercase'>{link.target}</span>
              <span className='flex'>
                <CaretRightIcon />
              </span>
            </Link>
          </li>
        ))}
      </ul>
      <div className='my-3rem'>
        <div>
          <Link className='flex flex-row gap-3 items-center' href='/Profile'>
            <span>
              <ProfileIcon />
            </span>
            <span className='font-light text-base'>Account</span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Menu;
