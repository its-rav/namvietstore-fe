import React from 'react';

type SearchBarMobileProps = {
  placeholder: string;
  handleSubmit: () => void;
  toggleSideBar: () => void;
  searchIcon?: React.ReactNode;
  sideBarIcon?: React.ReactNode;
};

const SearchBarMobile: React.FC<SearchBarMobileProps> = ({
  placeholder,
  handleSubmit,
  toggleSideBar,
  searchIcon,
  sideBarIcon,
}) => {
  return (
    <div className='flex border-solid border-2 h-16 shadow-md items-center border-gray-200 px-4 py-4 w-full'>
      <button className='w-11' onClick={toggleSideBar}>
        <i>{sideBarIcon}</i>
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
          <i>{searchIcon}</i>
        </button>
      </form>
    </div>
  );
};

export default SearchBarMobile;
