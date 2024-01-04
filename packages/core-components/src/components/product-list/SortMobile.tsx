import React, { useState } from 'react';

import { CaretDownIcon } from '@/icons';

import { FilterItemType } from './FilterItem';

type SortMobileProps = {
  sortItems: FilterItemType;
  onClickApplySort?: (sortData: string[]) => void;
  onClickOpenSort?: (isOpen: boolean) => void;
};

const SortMobile: React.FC<SortMobileProps> = ({
  sortItems,
  onClickApplySort,
  onClickOpenSort,
}) => {
  const formatSortValue = (filterType: string, optionId: string) => {
    return `${filterType}=${optionId}`;
  };
  const [isOpenSort, setIsOpenSort] = useState(false);

  const checkSort = () => {
    onClickOpenSort?.(!isOpenSort);
    setIsOpenSort(!isOpenSort);
  };
  const onChangeSort = (sortParams: string[]) => {
    onClickApplySort?.(sortParams);
    setIsOpenSort(false);
  };
  const handleOnClick = (event: React.MouseEvent<HTMLDivElement>) => {
    if ((event.target as HTMLElement).id === 'containerSort') {
      onClickOpenSort?.(!isOpenSort);
      setIsOpenSort(false);
    }
  };
  return (
    <div className='relative'>
      <button className='flex items-center p-3 bg-white' onClick={checkSort}>
        <p className='pr-4'>{sortItems.title}</p>
        <CaretDownIcon className='w-4 h-4' />
      </button>
      {sortItems && isOpenSort ? (
        <div
          id='containerSort'
          className='absolute z-20 top-8 left-0 w-screen mt-[5px] h-screen'
          onClick={handleOnClick}
        >
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
                    onClickOpenSort?.(!isOpenSort);
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
