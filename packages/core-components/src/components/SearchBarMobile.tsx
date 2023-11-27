import React from 'react';

import { BlackSearchIcon } from '../icons';
import { BlackHamburgerIcon } from '../icons';

type SearchBarMobileProps = {
  placeholder: string;
  handleSubmit: () => void;
  toggleSideBar: () => void;
};

const SearchBarMobile: React.FC<SearchBarMobileProps> = ({
  placeholder,
  handleSubmit,
  toggleSideBar,
}) => {
  return (
    <div className='flex border-solid border-2 h-16 shadow-md items-center border-gray-200 px-4 py-4 w-full'>
      <button className='w-11' onClick={toggleSideBar}>
        <BlackHamburgerIcon />
      </button>
      <form
        onSubmit={handleSubmit}
        className='h-full w-full flex font-primary text-sm leading-6 font-medium'
      >
        <input
          type='text'
          className='appearance-none w-full pl-6'
          placeholder={placeholder}
        />
        <button type='submit' className='w-11'>
          <BlackSearchIcon />
        </button>
      </form>
    </div>
  );
};

export default SearchBarMobile;
