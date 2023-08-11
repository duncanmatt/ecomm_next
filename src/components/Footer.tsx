import TrashCanIcon from './icons/TrashCanIcon';

const mediaIcons = [
  {
    name: 'ICON',
    icon: <TrashCanIcon />,
    url: '',
  },
  {
    name: 'ICON',
    icon: <TrashCanIcon />,
    url: '',
  },
  {
    name: 'ICON',
    icon: <TrashCanIcon />,
    url: '',
  },
  {
    name: 'ICON',
    icon: <TrashCanIcon />,
    url: '',
  },
  {
    name: 'ICON',
    icon: <TrashCanIcon />,
    url: '',
  },
];

export default () => {
  return (
    <div className='px-1rem py-2rem'>
      <div className='flex flex-col'>
        <div className='flex flex-wrap w-full justify-between'>
          <h4 className='text-lg font-semibold tracking-wide text-center '>
            the black sheep
          </h4>
          <p>fashionably comfortable streetwear</p>
        </div>
        <div>
          <ul className='flex flex-wrap justify-center gap-1 pt-1rem'>
            {mediaIcons.map((icon, index) => (
              <li className='bg-[#f2f2f2] rounded-circle' key={index}>
                <span className='flex items-center justify-center shrink h-[1.875rem] w-[1.875rem]'>
                  {icon.icon}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};
