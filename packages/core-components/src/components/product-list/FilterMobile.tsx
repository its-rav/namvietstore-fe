import React, { useState } from 'react';

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
  onChangePageLayout?: (isList: boolean) => void;
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
      <button
        className='flex items-center px-3'
        onClick={() => {
          setIsOpenFilter(true);
        }}
      >
        <p className='pr-5'>{filterTitle}</p>
        <svg
          width='15'
          height='16'
          viewBox='0 0 15 16'
          fill='none'
          xmlns='http://www.w3.org/2000/svg'
        >
          <path
            d='M0.23436 2.05625C0.328103 2.17812 5.61525 8.92812 5.61525 8.92812V14.5625C5.61525 15.0781 6.0371 15.5 6.56207 15.5H8.44632C8.96191 15.5 9.39313 15.0781 9.39313 14.5625V8.91875C9.39313 8.91875 14.5397 2.3375 14.7834 2.0375C15.0271 1.7375 14.999 1.4375 14.999 1.4375C14.999 0.921875 14.5772 0.5 14.0522 0.5H0.946813C0.374975 0.5 0 0.95 0 1.4375C0 1.625 0.0562463 1.85 0.23436 2.05625Z'
            fill='#575757'
          />
        </svg>
      </button>
      {isOpenFilter ? (
        <div className='fixed inset-0 bg-black bg-opacity-30 backdrop-blur-sm'>
          <div className='absolute top-0 right-0 grid grid-cols-1 z-10 w-3/4 px-6 divide-y bg-white border-gray-200 content-between'>
            <button
              className='absolute top-7 right-7'
              onClick={() => {
                setIsOpenFilter(false);
              }}
            >
              <svg
                className='w-4 h-4'
                aria-hidden='true'
                xmlns='http://www.w3.org/2000/svg'
                fill='none'
                viewBox='0 0 14 14'
              >
                <path
                  stroke='currentColor'
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  strokeWidth='2'
                  d='m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6'
                />
              </svg>
            </button>
            {filterItems ? filterItems.map((filterItem) => {
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
                }) : (
              <></>
            )}
            <div className='grid-cols-1 py-6 text-right'>
              <button
                type='button'
                className='text-blue-700 border border-blue-700 hover:bg-blue-100 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-md px-5 py-2.5 text-center'
                onClick={() => onClickApplyFilter?.([])}
              >
                {clearFilterTitle}
              </button>
              <button
                type='button'
                className='text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-md px-5 py-2.5 ml-3'
                onClick={() => onClickApplyFilter?.(filterData)}
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
