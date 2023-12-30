import React, { useState } from 'react';

import { FilterItemType } from './FilterItem';
import { CaretDownIcon } from '@/icons';

type SortMobileProps = {
  sortItems: FilterItemType;
  onClickApplySort?: (sortData: string[]) => void;
};

const SortMobile: React.FC<SortMobileProps> = ({
  sortItems,
  onClickApplySort,
}) => {
  const formatSortValue = (filterType: string, optionId: string) => {
    return `${filterType}=${optionId}`;
  };
  const [isOpenSort, setIsOpenSort] = useState(false);

  const checkSort = () => {
    setIsOpenSort(!isOpenSort);
  };
  const onChangeSort = (sortParams: string[]) => {
    onClickApplySort?.(sortParams);
    setIsOpenSort(false);
  };
  return (
    <>
      <button className='flex items-center px-3' onClick={checkSort}>
        <p className='pr-4'>{sortItems.title}</p>
        <CaretDownIcon className='w-4 h-4' />
      </button>
      {sortItems && isOpenSort ? (
        <div className='absolute w-screen'>
          <ul className='bg-white divide-y text-sm font-normal w-full z-0 absolute opacity-100 top-0 transition-all ease-in duration-500'>
            {sortItems.filterOptions.map((item) => {
              return item.selected ? (
                <li key={item.optionId} className='px-3 py-5 text-blue-600'>
                  <p>{item.optionName}</p>
                </li>
              ) : (
                <li
                  key={item.optionId}
                  className='px-3 py-5 hover:bg-gray-200 cursor-pointer'
                  onClick={() => {
                    onChangeSort([
                      formatSortValue(sortItems.filterType, item.optionId),
                    ]);
                  }}
                >
                  <p>{item.optionName}</p>
                </li>
              );
            })}
          </ul>
        </div>
      ) : (
        <></>
      )}
    </>
  );
};
export default SortMobile;
