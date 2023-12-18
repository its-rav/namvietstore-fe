import React, { useState } from 'react';

export type FilterItemType = {
  filterType: string;
  filterOptions: string[];
};
type FilterProps = {
  filterItem: FilterItemType;
};

const FilterItem: React.FC<FilterProps> = ({ filterItem }) => {
  const [isOpen, setIsOpen] = useState(false);
  return filterItem?.filterType && filterItem?.filterOptions ? (
    <div className='font-primary'>
      {/* Web view  */}
      <div className='hidden md:block text-lg/5 font-light'>
        <p className='font-semibold' style={{ color: '#850000' }}>
          {filterItem.filterType}
        </p>
        <button
          id='dropdownButton'
          data-dropdown-toggle='dropdown'
          data-dropdown-delay='500'
          className='w-full p-4 rounded-md border-solid flex justify-around items-center mt-4 hover:bg-gray-200'
          style={{
            color: '#850000',
            borderColor: '#850000',
            borderWidth: '1px',
          }}
          onClick={() => {
            setIsOpen(!isOpen);
          }}
        >
          <p style={{ color: '#353535' }}>Dropdown</p>
          <svg
            className='w-5 h-3'
            aria-hidden='true'
            xmlns='http://www.w3.org/2000/svg'
            fill='none'
            viewBox='0 0 14 8'
          >
            {isOpen ? (
              <path
                stroke='currentColor'
                strokeLinecap='round'
                strokeLinejoin='round'
                strokeWidth={2}
                d='m1 1 5.326 5.7a.909.909 0 0 0 1.348 0L13 1'
              />
            ) : (
              <path
                stroke='currentColor'
                strokeLinecap='round'
                strokeLinejoin='round'
                strokeWidth={2}
                d='M13 7 7.674 1.3a.91.91 0 0 0-1.348 0L1 7'
              />
            )}
          </svg>
        </button>
        {isOpen ? (
          <div id='dropdown' className='z-10 bg-white rounded-md'>
            <ul
              aria-labelledby='dropdownButton'
              className='divide-y divide-[#7D7D7DE5] p-1'
              style={{
                boxShadow: '0 2px 6px 0 rgba(0, 0, 0, 0.15)',
                color: 'rgba(125, 125, 125, 0.9)',
              }}
            >
              {filterItem.filterOptions.map((item, index) => {
                return (
                  <li key={index}>
                    <a href='#' className='block p-4 hover:bg-gray-200'>
                      {item}
                    </a>
                  </li>
                );
              })}
            </ul>
          </div>
        ) : (
          <></>
        )}
      </div>
      {/* Mobile view */}
      <div className='block md:hidden text-sm font-normal'>
        <p className='font-semibold'>{filterItem.filterType}</p>
        <div className='grid grid-cols-2 gap-3 mt-5 text-center'>
          {filterItem.filterOptions.map((item, index) => {
            return (
              <p
                key={index}
                className='rounded-md border-[1px] border-gray-200 border-solid p-3'
              >
                {item}
              </p>
            );
          })}
        </div>
      </div>
    </div>
  ) : (
    <></>
  );
};

export default FilterItem;
