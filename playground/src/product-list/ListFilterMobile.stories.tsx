import type { Story, StoryDefault } from '@ladle/react';
import { type FilterItemType, ListFilterMobile } from '@namviet-fe/core-ui';
import React from 'react';

import '@namviet-fe/core-ui/dist/style.css';

export default {
  title: '@nv-fe/core-ui/product-list/ListFilterMobile',
} satisfies StoryDefault<typeof ListFilterMobile>;

const filterItems: FilterItemType[] = [
  {
    filterId: '1',
    filterType: 'typea',
    placeholder: '',
    title: 'Loại bếp',
    filterOptions: [
      {
        optionId: '101',
        optionName: 'Bếp hồng ngoại',
      },
      {
        optionId: '102',
        optionName: 'Bếp từ 3 vùng nấu trở lên',
      },
      {
        optionId: '103',
        optionName: 'Bếp từ đôi',
      },
      {
        optionId: '104',
        optionName: 'Bếp từ đơn',
      },
    ],
  },
  {
    filterId: '2',
    filterType: 'typeb',
    placeholder: '',
    title: 'Loại bếp 2',
    filterOptions: [
      {
        optionId: '201',
        optionName: 'Bếp hồng ngoại',
      },
      {
        optionId: '202',
        optionName: 'Bếp từ 3 vùng nấu trở lên',
      },
      {
        optionId: '203',
        optionName: 'Bếp từ đôi',
      },
      {
        optionId: '204',
        optionName: 'Bếp từ đơn',
      },
    ],
  },
];

const onClickOpenFilter = (isOpenFilter: boolean) => {
  console.log('isOpenFilter', isOpenFilter);
};
const onClickSortAndFilter = (sortId: string[]) => {
  console.log('sortId', sortId);
};

export const Default: Story = () => (
  <div className='w-full bg-gray-100 h-screen'>
    <div className='bg-white'>
      <ListFilterMobile
        isOpenFilter={false} // false: hidden list filter, true: show list filter
        filterItems={filterItems}
        clearFilterTitle='Xóa bộ lọc'
        applyFilterTitle='Áp dụng bộ lọc'
        onClickApplySortFilter={onClickSortAndFilter}
        onClickOpenFilter={onClickOpenFilter}
      />
    </div>
  </div>
);
