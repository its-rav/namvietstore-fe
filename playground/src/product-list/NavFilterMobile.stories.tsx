import type { Story, StoryDefault } from '@ladle/react';
import { NavFilterMobile } from '@namviet-fe/core-ui';
import React from 'react';

import '@namviet-fe/core-ui/dist/style.css';

export default {
  title: '@nv-fe/core-ui/product-list/NavFilterMobile',
} satisfies StoryDefault<typeof NavFilterMobile>;

const onClickOpenSort = (isOpenSort: boolean) => {
  console.log('isOpenSort', isOpenSort);
};
const onChangePageLayout = (isList: boolean) => {
  console.log('isListLayout', isList);
};
const onClickOpenFilter = (isOpenFilter: boolean) => {
  console.log('isOpenFilter', isOpenFilter);
};

export const Default: Story = () => (
  <div className='w-full bg-gray-100 h-screen'>
    <div className='bg-white'>
      <NavFilterMobile
        sortTitle='Sắp xếp'
        filterTitle='Bộ Lọc'
        onClickOpenSort={onClickOpenSort}
        onChangePageLayout={onChangePageLayout}
        onClickOpenFilter={onClickOpenFilter}
      />
    </div>
  </div>
);
