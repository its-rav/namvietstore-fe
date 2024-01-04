import React, { useEffect, useState } from 'react';

import { FunnelIcon, XMarkIcon } from '@/icons';

import { FilterItemType } from './FilterItem';

export type FilterGroupType = {
  sortItems: FilterItemType;
  filterItems: FilterItemType[];
};

type FilterMobileProps = {
  filterItems: FilterItemType[];
  filterTitle: string;
  clearFilterTitle: string;
  applyFilterTitle: string;
  onClickApplyFilter?: (filterData: string[]) => void;
};

const FilterMobile: React.FC<FilterMobileProps> = ({
  filterItems,
  filterTitle,
  clearFilterTitle,
  applyFilterTitle,
  onClickApplyFilter,
}) => {
  const formatFilterValue = (filterType: string, optionId: string) => {
    return `${filterType}=${optionId}`;
  };

  const [isOpenFilter, setIsOpenFilter] = useState(false);
  const [filterData, setFilterData] = useState<string[]>(
    filterItems.flatMap((filter) =>
      filter.filterOptions
        .filter((option) => option.selected)
        .map((option) => formatFilterValue(filter.filterType, option.optionId))
    )
  );

  const onChangeFilter = (filterType: string, optionId: string) => {
    const filterValue = formatFilterValue(filterType, optionId);
    if (filterData.includes(filterValue)) {
      setFilterData(filterData.filter((data) => data !== filterValue));
    } else {
      filterData.push(filterValue);
      setFilterData([...filterData]);
    }
  };
  const handleOnClick = (event: React.MouseEvent<HTMLDivElement>) => {
    if ((event.target as HTMLElement).id === 'containerFilter')
      setIsOpenFilter(false);
  };

  useEffect(() => {
    document.body.style.overflow = isOpenFilter ? 'hidden' : 'unset';
  }, [isOpenFilter]);
  return (
    <>
      <button
        className='flex items-center'
        onClick={() => {
          setIsOpenFilter(true);
        }}
      >
        <p className='pr-5'>{filterTitle}</p>
        <FunnelIcon className='w-5 h-5' />
      </button>
      {isOpenFilter ? (
        <div
          id='containerFilter'
          className='fixed z-20 inset-0 bg-black bg-opacity-30 backdrop-blur-sm'
          onClick={handleOnClick}
        >
          <div className='absolute top-0 right-0 grid grid-cols-1 z-10 w-3/4 px-6 divide-y bg-white border-gray-200 content-between'>
            <button
              className='absolute top-7 right-7'
              onClick={() => {
                setIsOpenFilter(false);
              }}
            >
              <XMarkIcon className='w-7 h-7' />
            </button>
            {filterItems ? (
              filterItems.map((filterItem) => {
                return (
                  <div key={filterItem.filterId} className='py-6 grid-cols-1 '>
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
                                    filterItem.filterType,
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
                                  filterItem.filterType,
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
              })
            ) : (
              <></>
            )}
            <div className='grid-cols-1 py-6 text-right'>
              <button
                type='button'
                className='text-blue-700 border border-blue-700 hover:bg-blue-100 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-md px-5 py-2.5 text-center'
                onClick={() => {
                  onClickApplyFilter?.([]);
                  setFilterData([]);
                  setIsOpenFilter(false);
                }}
              >
                {clearFilterTitle}
              </button>
              <button
                type='button'
                className='text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-md px-5 py-2.5 ml-3'
                onClick={() => {
                  onClickApplyFilter?.(filterData);
                  setIsOpenFilter(false);
                }}
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
export default FilterMobile;
