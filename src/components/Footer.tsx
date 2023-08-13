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
    <footer>
      <div className='grid grid-cols-1 grid-rows-2'>
        <div className='flex flex-col'>
          <div className='flex items-bottom flex-wrap sm:p-2 max-sm:py-5 w-full max-sm:text-center h-[4.5rem] border-y-1 border-80  justify-between'>
            <h6 className='max-sm:w-full font-semibold tracking-normal'>
              the black sheep
            </h6>
            <p className='max-sm:w-full text-xs'>
              fashionably comfortable streetwear
            </p>
          </div>
          <div className='flex py-2 flex-wrap items-center justify-between w-full'>
            <span className='font-light text-sm px-1'>Follow us:</span>
            <ul className='flex flex-row gap-1'>
              {mediaIcons.map((icon, index) => (
                <li className='bg-[#f2f2f2] rounded-circle' key={index}>
                  <span className='flex items-center justify-center shrink h-[1.875rem] w-[1.875rem]'>
                    {icon.icon}
                  </span>
                </li>
              ))}
            </ul>
          </div>
          <div className='text-center py-1rem font-light text-xs border-y-1 border-80'>
            2023 Black Sheep World
          </div>
        </div>
      </div>
    </footer>
  );
};
