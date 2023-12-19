import React from 'react';
import FilterMobile, { FilterGroupType } from './FilterMobile';
import FilterItem from './FilterItem';

type FilterProps = {
  filterGroupItems: FilterGroupType;
};

const FilterComponent: React.FC<FilterProps> = ({ filterGroupItems }) => {
  return (
    <div>
      <div className='hidden md:block'>
        {filterGroupItems.filterItems.map((item, index) => {
          return (
            <div key={index} className='mb-12'>
              <FilterItem filterItems={item}></FilterItem>
            </div>
          );
        })}
      </div>
      <div className='block md:hidden'>
        <FilterMobile filterMobileItems={filterGroupItems} />
      </div>
    </div>
  );
};

export default FilterComponent;
