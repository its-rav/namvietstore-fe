import type { Story, StoryDefault } from '@ladle/react';
import { FilterMobile, type FilterGroupType } from '@namviet-fe/core-ui';
import React from 'react';

import '@namviet-fe/core-ui/dist/style.css';

export default {
  title: '@nv-fe/core-ui/product-list/FilterMobile',
} satisfies StoryDefault<typeof FilterMobile>;

const filterMobileItems: FilterGroupType = {
  sortItems: {
    filterId: '1',
    filterType: 'sort',
    placeholder: '',
    title: 'Sắp xếp',
    filterOptions: [
      {
        optionId: '12',
        optionName: 'Khuyến mãi tốt nhất',
      },
      {
        optionId: '13',
        optionName: 'Giá tăng dần',
      },
      {
        optionId: '14',
        optionName: 'Giá giảm dần',
      },
      {
        optionId: '15',
        optionName: 'Sản phẩm bán chạy nhất',
      },
    ],
  },
  filterItems: [
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
  ],
};

const onClickSort = (sortId: string[]) => {
  console.log('Sort', sortId);
};

export const Default: Story = () => (
  <div
    style={{
      height: '80vh',
    }}
    className='w-full bg-gray-100'
  >
    <div className='' style={{ backgroundColor: 'white' }}>
      <FilterMobile
        filterMobileItems={filterMobileItems}
        filterTitle='Bộ Lọc'
        clearFilterTitle='Xóa bộ lọc'
        applyFilterTitle='Áp dụng bộ lọc'
        onClickApplySortFilter={onClickSort}
      />
    </div>
  </div>
);
