import React, { useState } from 'react';

import { FilterItemType } from './FilterItem';

export type FilterGroupType = {
  sortItems: FilterItemType;
  filterItems: FilterItemType[];
};

type FilterMobileProps = {
  filterMobileItems: FilterGroupType;
  filterTitle: string;
  clearFilterTitle: string;
  applyFilterTitle: string;
  onClickApplySortFilter?: (filterData: string[]) => void;
  onChangePageLayout?: (isList: boolean) => void;
};

const FilterMobile: React.FC<FilterMobileProps> = ({
  filterMobileItems,
  filterTitle,
  clearFilterTitle,
  applyFilterTitle,
  onClickApplySortFilter,
  onChangePageLayout,
}) => {
  const formatFilterValue = (filterType: string, optionId: string) => {
    return `${filterType}=${optionId}`;
  };
  const [isListLayout, setListLayout] = useState(false);
  const [isOpenSort, setIsOpenSort] = useState(false);
  const [isOpenFilter, setIsOpenFilter] = useState(false);
  const [filterData, setFilterData] = useState<string[]>(
    filterMobileItems.filterItems.flatMap((filter) =>
      filter.filterOptions
        .filter((opion) => opion.selected)
        .map((option) => formatFilterValue(filter.filterId, option.optionId))
    )
  );

  const checkSort = () => {
    setIsOpenSort(!isOpenSort);
  };
  const onChangeSort = (sortParams: string[]) => {
    onClickApplySortFilter?.(sortParams);
    setIsOpenSort(false);
  };
  const onChangeFilter = (filterId: string, optionId: string) => {
    const filterValue = formatFilterValue(filterId, optionId);
    if (filterData.includes(filterValue)) {
      setFilterData(filterData.filter((data) => data !== filterValue));
    } else {
      filterData.push(filterValue);
      setFilterData([...filterData]);
    }
  };
  const changePageLayout = () => {
    setListLayout(!isListLayout);
    onChangePageLayout?.(!isListLayout);
  };
  return (
    <div className=''>
      <div className='flex justify-between py-5 font-medium text-sm/4 border-b'>
        <button className='flex items-center px-3' onClick={checkSort}>
          <p className='pr-4'>{filterMobileItems.sortItems.title}</p>
          <svg
            width='10'
            height='6'
            viewBox='0 0 10 6'
            fill='none'
            xmlns='http://www.w3.org/2000/svg'
          >
            <path d='M0 0.5L5 5.5L10 0.5H0Z' fill='#575757' />
          </svg>
        </button>
        <div className='flex divide-x'>
          <button className='px-3' onClick={changePageLayout}>
            <svg
              width='15'
              height='16'
              viewBox='0 0 15 16'
              fill='none'
              xmlns='http://www.w3.org/2000/svg'
            >
              <path
                fillRule='evenodd'
                clipRule='evenodd'
                d='M0 0.5V7.16667H6.66667V0.5H0ZM5 5.5H1.66667V2.16667H5V5.5ZM0 8.83333V15.5H6.66667V8.83333H0ZM5 13.8333H1.66667V10.5H5V13.8333ZM8.33333 0.5V7.16667H15V0.5H8.33333ZM13.3333 5.5H10V2.16667H13.3333V5.5ZM8.33333 8.83333V15.5H15V8.83333H8.33333ZM13.3333 13.8333H10V10.5H13.3333V13.8333Z'
                fill='#575757'
              />
            </svg>
          </button>
          <button
            className='flex items-center px-3'
            onClick={() => {
              setIsOpenFilter(true);
              // setIsOpenSort(false);
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
        </div>
      </div>
      {/* List Sort */}
      {filterMobileItems?.sortItems && isOpenSort ? (
        <div className='relative'>
          <ul className='bg-white divide-y text-sm font-normal w-full z-0 absolute opacity-100 top-0 transition-all ease-in duration-500'>
            {filterMobileItems.sortItems.filterOptions.map((item) => {
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
                      formatFilterValue(
                        filterMobileItems.sortItems.filterType,
                        item.optionId
                      ),
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
      {/* List Filter */}
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
            {filterMobileItems?.filterItems ? (
              <>
                {filterMobileItems.filterItems.map((filterItem) => {
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
    </div>
  );
};
export default FilterMobile;
