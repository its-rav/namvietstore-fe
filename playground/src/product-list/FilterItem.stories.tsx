import type { Story, StoryDefault } from '@ladle/react';
import { FilterItem } from '@namviet-fe/core-ui';
import React from 'react';

import '@namviet-fe/core-ui/dist/style.css';
export default {
  title: '@nv-fe/core-ui/product-list/FilterItem',
} satisfies StoryDefault<typeof FilterItem>;

const filterItems = {
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
};

const onClickSort = (sortParams: string[]) => {
  console.log('sortId', sortParams);
};

export const Default: Story = () => (
  <div className='w-full bg-gray-100 h-screen p-[20px]'>
    <div className='w-56 mb-14'>
      <FilterItem filterItems={filterItems} onClickSort={onClickSort} />
    </div>
  </div>
);
