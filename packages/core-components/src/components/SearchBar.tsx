import React from 'react';

import { SearchIcon } from '../icons';

type SearchBarProps = {
  handleSubmit: () => void;
  placeholder: string;
};

const SearchBar: React.FC<SearchBarProps> = ({ handleSubmit, placeholder }) => {
  return (
    <form
      onSubmit={handleSubmit}
      className='flex border-solid w-96 h-12 border-2 font-primary text-sm leading-6 font-medium border-gray-200 '
    >
      <input
        type='text'
        className='appearance-none w-full pl-6'
        placeholder={placeholder}
      />
      <button type='submit' className='h-full w-12 bg-primary'>
        <SearchIcon />
      </button>
    </form>
  );
};

export default SearchBar;
