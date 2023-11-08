import React from 'react';

type SearchBarProps = {
  handleSubmit: () => void;
  searchIcon: React.ReactNode;
  placeholders: string;
};

const SearchBar: React.FC<SearchBarProps> = ({
  handleSubmit,
  searchIcon,
  placeholders,
}) => {
  return (
    <form
      onSubmit={handleSubmit}
      className='flex border-solid w-96 h-12 border-2 font-primary text-sm leading-6 font-medium border-gray-200 '
    >
      <input
        type='text'
        className='appearance-none w-full pl-6'
        placeholder={placeholders}
      />
      <button type='submit' className='h-full w-12 bg-primary'>
        <i>{searchIcon}</i>
      </button>
    </form>
  );
};

export default SearchBar;
