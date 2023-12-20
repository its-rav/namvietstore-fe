import React, { useState } from 'react';

export type OptionType = {
  optionId: number;
  optionName: string;
};

export type FilterItemType = {
  filterId?: number;
  filterType: string;
  filterOptions: OptionType[];
};
type FilterItemProps = {
  filterItems: FilterItemType;
  sortApplied: OptionType;
  onClickSort?: (sortId: number) => void;
};

const FilterItem: React.FC<FilterItemProps> = ({
  filterItems,
  sortApplied,
  onClickSort,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  return filterItems?.filterType && filterItems?.filterOptions ? (
    <div className='font-primary'>
      <div className='text-lg/5 font-light'>
        <p className='font-semibold' style={{ color: '#850000' }}>
          {filterItems.filterType}
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
              {filterItems.filterOptions.map((item) => {
                return item.optionId === sortApplied.optionId ? (
                  <li key={item.optionId}>
                    <p className='block p-4' style={{ color: '#850000' }}>
                      {item.optionName}
                    </p>
                  </li>
                ) : (
                  <li
                    key={item.optionId}
                    onClick={() => {
                      onClickSort?.(item.optionId);
                    }}
                  >
                    <p className='block p-4 hover:bg-gray-200 cursor-pointer'>
                      {item.optionName}
                    </p>
                  </li>
                );
              })}
            </ul>
          </div>
        ) : (
          <></>
        )}
      </div>
    </div>
  ) : (
    <></>
  );
};

export default FilterItem;
