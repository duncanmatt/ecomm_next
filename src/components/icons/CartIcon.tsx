import React from 'react';

const CartIcon = () => {
  return (
    <svg
      id='cartIcon'
      width='20'
      height='20'
      viewBox='0 0 20 20'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
      aria-hidden='true'
    >
      <g clipPath='url(#bag_clip0_1064_117707)'>
        <path
          d='M1.58046 19.0137L2.43255 8.01367H17.5777L18.3847 19.0137H1.58046Z'
          strokeWidth='1'
        ></path>
        <path
          d='M6.96875 7.99596V5C6.96875 3.34315 8.3119 2 9.96875 2C11.6256 2 12.9688 3.34315 12.9688 5V7.99596'
          strokeWidth='1'
        ></path>
      </g>
      <defs>
        <clipPath id='bag_clip0_1064_117707'>
          <rect width='20' height='20' fill='#121212'></rect>
        </clipPath>
      </defs>
    </svg>
  );
};

export default CartIcon;
