import type { Story, StoryDefault } from '@ladle/react';
import {
  type FilterItemType,
  ButtonChangeLayout,
  SortMobile,
} from '@namviet-fe/core-ui';
import React from 'react';

import '@namviet-fe/core-ui/dist/style.css';

export default {
  title: '@nv-fe/core-ui/product-list/SortMobile',
} satisfies StoryDefault<typeof SortMobile>;

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

const onClickSort = (sortId: string[]) => {
  console.log('Sort', sortId);
};

const onChangePageLayout = (isList: boolean) => {
  console.log('isList', isList);
};

export const Default: Story = () => (
  <div
    style={{
      height: '80vh',
    }}
    className='w-full bg-gray-100'
  >
    <div className='flex' style={{ backgroundColor: 'white' }}>
      <SortMobile sortItems={sortItems} onClickApplySort={onClickSort} />
      <ButtonChangeLayout onChangePageLayout={onChangePageLayout} />
    </div>
  </div>
);
