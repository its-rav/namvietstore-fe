import type { Story, StoryDefault } from '@ladle/react';
import { type categoryBarItemType, CategoryBar } from '@namviet-fe/core-ui';
import { HamburgerIcon } from '@namviet-fe/core-ui';
import React from 'react';

export default {
  title: '@nv-fe/core-ui/CategoryBar',
} satisfies StoryDefault<typeof CategoryBar>;

const categoryItems: categoryBarItemType[] = [
  {
    name: 'Trang chủ',
    url: '/',
  },
  {
    name: 'Giới thiệu',
    url: '/',
  },
  {
    name: 'Tin tức',
    url: '/',
  },
  {
    name: 'Liên hệ',
    url: '/contact',
  },
];

const handleCategoryBarItemsClicked = () => {
  window.alert('redirect');
};

export const Default: Story = () => (
  <CategoryBar
    categoryButtonIcon={<HamburgerIcon />}
    categoryButtonText='DANH MỤC SẢN PHẨM'
    categoryBarItems={categoryItems}
    onCategoryBarItemClick={handleCategoryBarItemsClicked}
  />
);
