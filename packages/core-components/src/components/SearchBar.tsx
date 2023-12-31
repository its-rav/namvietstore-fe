import React from 'react';

import { SearchIcon } from '../icons';

type SearchBarProps = {
  onQueryChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder: string;
  onClick?: () => void;
};

const SearchBar = React.forwardRef<HTMLInputElement, SearchBarProps>(
  ({ placeholder, onQueryChange, onClick }, ref) => {
    return (
      <div className='flex border-solid w-96 h-12 border-2 font-primary text-sm leading-6 font-medium border-gray-200 '>
        <input
          type='text'
          className='appearance-none w-full pl-6'
          placeholder={placeholder}
          onChange={onQueryChange}
          ref={ref}
        />
        <button className='h-full w-12 bg-primary' onClick={onClick}>
          <SearchIcon />
        </button>
      </div>
    );
  }
);

export default SearchBar;
