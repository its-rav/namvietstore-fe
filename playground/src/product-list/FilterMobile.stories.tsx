import type { Story, StoryDefault } from '@ladle/react';
import {
  type FilterItemType,
  ButtonChangeLayout,
  FilterMobile,
} from '@namviet-fe/core-ui';
import React from 'react';

import '@namviet-fe/core-ui/dist/style.css';

export default {
  title: '@nv-fe/core-ui/product-list/FilterMobile',
} satisfies StoryDefault<typeof FilterMobile>;

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

const onChangePageLayout = (isList: boolean) => {
  console.log('isList', isList);
};

const onClickFilter = (filterData: string[]) => {
  console.log('filterData', filterData);
};

export const Default: Story = () => (
  <div
    style={{
      height: '80vh',
    }}
    className='w-full bg-gray-100'
  >
    <div className='flex gap-4' style={{ backgroundColor: 'white' }}>
      <ButtonChangeLayout onChangePageLayout={onChangePageLayout} />
      <FilterMobile
        filterItems={filterItems}
        filterTitle='Bộ Lọc'
        clearFilterTitle='Xóa bộ lọc'
        applyFilterTitle='Áp dụng bộ lọc'
        onClickApplyFilter={onClickFilter}
      />
    </div>
  </div>
);
