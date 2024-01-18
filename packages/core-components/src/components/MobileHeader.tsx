import React from 'react';

import { BlackSearchIcon } from '../icons';
import { BlackHamburgerIcon } from '../icons';

type MobileHeaderProps = {
  placeholder: string;
  onClick?: () => void;
  toggleSideBar?: () => void;
};

const MobileHeader = React.forwardRef<HTMLInputElement, MobileHeaderProps>(
  ({ placeholder, onClick, toggleSideBar }, ref) => {
    return (
      <div className='flex w-full border-solid border-2 h-16 shadow-md items-center border-gray-200 px-4 py-4 font-primary text-sm leading-6 font-medium'>
        <button className='w-11' onClick={toggleSideBar}>
          <BlackHamburgerIcon />
        </button>
        <input
          type='text'
          className='appearance-none w-full pl-6 h-full'
          placeholder={placeholder}
          ref={ref}
        />
        <button className='w-11' onClick={onClick}>
          <BlackSearchIcon />
        </button>
      </div>
    );
  }
);

export default MobileHeader;
