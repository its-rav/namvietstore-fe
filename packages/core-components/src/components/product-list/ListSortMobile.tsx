import React from 'react';

import { FilterItemType } from './FilterItem';

type ListSortMobileProps = {
  isOpenSort: boolean;
  sortItems: FilterItemType;
  onClickApplySortFilter?: (filterData: string[]) => void;
};

const ListSortMobile: React.FC<ListSortMobileProps> = ({
  isOpenSort,
  sortItems,
  onClickApplySortFilter,
}) => {
  const formatFilterValue = (filterType: string, optionId: string) => {
    return `${filterType}=${optionId}`;
  };

  const onChangeSort = (sortParams: string[]) => {
    onClickApplySortFilter?.(sortParams);
  };

  return (
    <>
      {sortItems && isOpenSort ? (
        <div className='relative'>
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
                      formatFilterValue(sortItems.filterType, item.optionId),
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
export default ListSortMobile;
