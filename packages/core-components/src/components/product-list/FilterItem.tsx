import React, { useState } from 'react';

import { ChevronDownIcon, ChevronUpIcon } from '@/icons';

export type OptionType = {
  optionId: string;
  optionName: string;
  selected?: boolean;
};

export type FilterItemType = {
  placeholder: string;
  title: string;
  filterId: string;
  filterType: string;
  filterOptions: OptionType[];
};
type FilterItemProps = {
  filterItems: FilterItemType;
  onClickSort?: (sortParam: string[]) => void;
};

const FilterItem: React.FC<FilterItemProps> = ({
  filterItems,
  onClickSort,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  return filterItems?.filterType && filterItems?.filterOptions ? (
    <div className='font-primary'>
      <div className='text-lg/5 font-light'>
        <p className='font-semibold text-primary'>{filterItems.title}</p>
        <div className='h-[180px]'>
          <button
            id={`dropdown-button-${filterItems.filterType}`}
            data-dropdown-toggle={`dropdown-${filterItems.filterType}`}
            data-dropdown-delay='500'
            className='w-full p-4 rounded-md border-solid flex justify-between items-center mt-4 hover:bg-gray-200 border-[1px] border-primary text-primary'
            onClick={() => {
              setIsOpen(!isOpen);
            }}
          >
            {/* #353535 color not found */}
            <p className='line-clamp-2 font-normal text-sm/4 text-[#353535]'>
              {filterItems.filterOptions.find((item) => item.selected)
                ?.optionName ?? filterItems.placeholder}
            </p>
            {!isOpen ? <ChevronDownIcon /> : <ChevronUpIcon />}
          </button>
          {isOpen ? (
            <div
              id={`dropdown-${filterItems.filterType}`}
              className='z-10 bg-white rounded-md overflow-y-scroll	h-[125px]'
            >
              <ul
                aria-labelledby={`dropdown-button-${filterItems.filterType}`}
                //#7D7D7DE5 not found
                className='divide-y divide-[#7D7D7DE5] p-1 shadow-[0_2px_6px_0_rgba(0, 0, 0, 0.15)] text-[#7D7D7DE5]'
              >
                {filterItems.filterOptions.map((item) => {
                  return item.selected ? (
                    <li key={item.optionId}>
                      <p className='block p-4 text-primary'>
                        {item.optionName}
                      </p>
                    </li>
                  ) : (
                    <li
                      key={item.optionId}
                      onClick={() => {
                        setIsOpen(false);
                        onClickSort?.([
                          `${filterItems.filterType}=${item.optionId}`,
                        ]);
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
    </div>
  ) : (
    <></>
  );
};

export default FilterItem;
