import type { Story, StoryDefault } from '@ladle/react';
import { type FilterItemType, ListSortMobile } from '@namviet-fe/core-ui';
import React from 'react';

import '@namviet-fe/core-ui/dist/style.css';

export default {
  title: '@nv-fe/core-ui/product-list/ListSortMobile',
} satisfies StoryDefault<typeof ListSortMobile>;

const sortItems: FilterItemType = {
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
};

const onClickSortAndFilter = (sortId: string[]) => {
  console.log('sortId', sortId);
};

export const Default: Story = () => (
  <div className='w-full bg-gray-100 h-screen'>
    <div className='bg-white'>
      <ListSortMobile
        isOpenSort={true}
        sortItems={sortItems}
        onClickApplySortFilter={onClickSortAndFilter}
      />
    </div>
  </div>
);
