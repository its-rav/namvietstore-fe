import React from 'react';
import FilterMobile, { FilterGroupType } from './FilterMobile';
import FilterItem, { OptionType } from './FilterItem';

type FilterProps = {
  filterGroupItems: FilterGroupType;
  sortApplied: OptionType;
  itemIdsSelected: number[];
  onClickSortWeb?: (sortId: number) => void;
  onClickSortMobile?: (sortId: number) => void;
  onClickApplyFilter?: () => void;
  onClickClearFilter?: () => void;
  onClickCheck?: (filterId: number) => void;
};

const FilterComponent: React.FC<FilterProps> = ({
  filterGroupItems,
  sortApplied,
  itemIdsSelected,
  onClickSortWeb,
  onClickSortMobile,
  onClickApplyFilter,
  onClickClearFilter,
  onClickCheck,
}) => {
  return (
    <div>
      <div className='hidden md:block'>
        <div className='mb-12'>
          <FilterItem
            filterItems={{
              filterType: 'Sắp xếp',
              filterOptions: filterGroupItems.sortItems,
            }}
            sortApplied={sortApplied}
          />
        </div>
        {filterGroupItems.filterItems.map((item) => {
          return (
            <div key={item.filterId} className='mb-12'>
              <FilterItem
                filterItems={item}
                sortApplied={sortApplied}
                onClickSort={onClickSortWeb}
              ></FilterItem>
            </div>
          );
        })}
      </div>
      <div className='block md:hidden'>
        <FilterMobile
          filterMobileItems={filterGroupItems}
          sortApplied={sortApplied}
          itemIdsSelected={itemIdsSelected}
          onClickSort={onClickSortMobile}
          onClickApplyFilter={onClickApplyFilter}
          onClickClearFilter={onClickClearFilter}
          onClickCheck={onClickCheck}
        />
      </div>
    </div>
  );
};

export default FilterComponent;
