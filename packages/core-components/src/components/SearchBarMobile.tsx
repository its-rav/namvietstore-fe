import React from 'react';

type SearchBarMobileProps = {
  placeholders: string;
  handleSubmit: (event: React.FormEvent<HTMLFormElement>) => void;
  searchIcon?: React.ReactNode;
};

const SearchBarMobile: React.FC<SearchBarMobileProps> = ({
  placeholders,
  handleSubmit,
  searchIcon,
}) => {
  return (
    <form
      onSubmit={handleSubmit}
      className='flex border-solid h-12 w-96 border-2 font-primary text-sm leading-6 font-medium border-gray-200'
    >
      <input
        type='text'
        className='appearance-none pl-6'
        placeholder={placeholders}
      />
      <button type='submit' className='h-full w-12 bg-primary'>
        <i>{searchIcon}</i>
      </button>
    </form>
  );
};

export default SearchBarMobile;
