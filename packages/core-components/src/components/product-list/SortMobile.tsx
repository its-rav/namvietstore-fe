import React, { useState } from 'react';

import { CaretDownIcon } from '@/icons';

import { FilterItemType } from './FilterItem';

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
  const handleOnClick = (event: React.MouseEvent<HTMLDivElement>) => {
    if ((event.target as HTMLElement).id === 'containerSort')
      setIsOpenSort(false);
  };
  return (
    <div
      id='containerSort'
      className={
        isOpenSort
          ? 'fixed z-20 inset-0 bg-black bg-opacity-30 backdrop-blur-sm'
          : 'relative '
      }
      onClick={handleOnClick}
    >
      <button
        className={
          isOpenSort
            ? 'flex items-center p-3 bg-white'
            : 'flex items-center px-3'
        }
        onClick={checkSort}
      >
        <p className='pr-4'>{sortItems.title}</p>
        <CaretDownIcon className='w-4 h-4' />
      </button>
      {sortItems && isOpenSort ? (
        <div className='absolute top-8 w-screen mt-[5px] z-20 inset-0 bg-black bg-opacity-30 backdrop-blur-sm h-fit'>
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
    </div>
  );
};
export default SortMobile;
