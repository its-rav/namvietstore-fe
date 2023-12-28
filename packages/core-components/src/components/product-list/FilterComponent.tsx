import React from 'react';

import FilterItem from './FilterItem';
import FilterMobile, { FilterGroupType } from './FilterMobile';

type FilterProps = {
  filterGroupItems: FilterGroupType;
  onClickSortAndFilter: (sortParams: string[]) => void;
  applyFilterTitle: string;
  clearFilterTitle: string;
  filterTitle: string;
  onChangePageLayout: (isList: boolean) => void;
};

const FilterComponent: React.FC<FilterProps> = ({
  filterGroupItems,
  applyFilterTitle,
  clearFilterTitle,
  filterTitle,
  onClickSortAndFilter,
  onChangePageLayout,
}) => {
  return (
    <>
      <div className='hidden md:block'>
        {filterGroupItems.sortItems ? (
          <div key={filterGroupItems.sortItems.filterId} className='mb-12'>
            <FilterItem
              filterItems={filterGroupItems.sortItems}
              onClickSort={onClickSortAndFilter}
            ></FilterItem>
          </div>
        ) : (
          <></>
        )}
        {filterGroupItems.filterItems.map((item) => {
          return (
            <div key={item.filterId} className='mb-12'>
              <FilterItem
                filterItems={item}
                onClickSort={onClickSortAndFilter}
              ></FilterItem>
            </div>
          );
        })}
      </div>
      <div className='block md:hidden'>
        <FilterMobile
          filterMobileItems={filterGroupItems}
          applyFilterTitle={applyFilterTitle}
          clearFilterTitle={clearFilterTitle}
          filterTitle={filterTitle}
          onClickApplySortFilter={onClickSortAndFilter}
          onChangePageLayout={onChangePageLayout}
        />
      </div>
    </>
  );
};

export default FilterComponent;
