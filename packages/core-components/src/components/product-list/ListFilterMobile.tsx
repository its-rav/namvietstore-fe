import React, { useState } from 'react';

import { XMarkIcon } from '@/icons';

import { FilterItemType } from './FilterItem';

type ListFilterMobileProps = {
  isOpenFilter: boolean;
  filterItems: FilterItemType[];
  clearFilterTitle: string;
  applyFilterTitle: string;
  onClickApplySortFilter?: (filterData: string[]) => void;
  onClickOpenFilter?: (isOpenSort: boolean) => void;
};

const ListFilterMobile: React.FC<ListFilterMobileProps> = ({
  isOpenFilter,
  filterItems,
  clearFilterTitle,
  applyFilterTitle,
  onClickApplySortFilter,
  onClickOpenFilter,
}) => {
  const formatFilterValue = (filterType: string, optionId: string) => {
    return `${filterType}=${optionId}`;
  };
  const [filterData, setFilterData] = useState<string[]>(
    filterItems.flatMap((filter) =>
      filter.filterOptions
        .filter((option) => option.selected)
        .map((option) => formatFilterValue(filter.filterId, option.optionId))
    )
  );
  const onChangeFilter = (filterId: string, optionId: string) => {
    const filterValue = formatFilterValue(filterId, optionId);
    if (filterData.includes(filterValue)) {
      setFilterData(filterData.filter((data) => data !== filterValue));
    } else {
      filterData.push(filterValue);
      setFilterData([...filterData]);
    }
  };

  return (
    <>
      {isOpenFilter ? (
        <div className='fixed inset-0 bg-black bg-opacity-30 backdrop-blur-sm'>
          <div className='absolute top-0 right-0 grid grid-cols-1 z-10 w-3/4 px-6 divide-y bg-white border-gray-200 content-between'>
            <button
              className='absolute top-7 right-7'
              onClick={() => {
                onClickOpenFilter?.(false);
              }}
            >
              <XMarkIcon />
            </button>
            {filterItems ? (
              <>
                {filterItems.map((filterItem) => {
                  return (
                    <div
                      key={filterItem.filterId}
                      className='py-6 grid-cols-1 '
                    >
                      <div className='text-sm font-normal'>
                        <p className='font-semibold'>{filterItem.filterType}</p>
                        <div className='grid grid-cols-2 gap-3 mt-5 text-center'>
                          {filterItem.filterOptions.map((item) => {
                            return (
                              <button
                                key={item.optionId}
                                style={
                                  filterData.includes(
                                    formatFilterValue(
                                      filterItem.filterId,
                                      item.optionId
                                    )
                                  )
                                    ? {
                                        borderColor:
                                          'rgb(29 78 216 / var(--tw-border-opacity))',
                                      }
                                    : {}
                                }
                                className=' cursor-pointer rounded-md border-[1px] border-gray-200 border-solid p-3'
                                onClick={() => {
                                  onChangeFilter(
                                    filterItem.filterId,
                                    item.optionId
                                  );
                                }}
                              >
                                {item.optionName}
                              </button>
                            );
                          })}
                        </div>
                      </div>
                    </div>
                  );
                })}
              </>
            ) : (
              <></>
            )}
            <div className='grid-cols-1 py-6 text-right'>
              <button
                type='button'
                className='text-blue-700 border border-blue-700 hover:bg-blue-100 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-md px-5 py-2.5 text-center'
                onClick={() => onClickApplySortFilter?.([])}
              >
                {clearFilterTitle}
              </button>
              <button
                type='button'
                className='text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-md px-5 py-2.5 ml-3'
                onClick={() => onClickApplySortFilter?.(filterData)}
              >
                {applyFilterTitle}
              </button>
            </div>
          </div>
        </div>
      ) : (
        <></>
      )}
    </>
  );
};
export default ListFilterMobile;
