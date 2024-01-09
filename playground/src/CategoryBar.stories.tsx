import type { Story, StoryDefault } from '@ladle/react';
import {
  type categoryBarItemType,
  type CategoryMenuItemType,
  CategoryBar,
} from '@namviet-fe/core-ui';
import { HamburgerIcon, KeyIcon } from '@namviet-fe/core-ui';
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

const categoryMenuItems: CategoryMenuItemType[] = [
  {
    id: 'item 1',
    icon: <KeyIcon />,
    label: 'Đầu đốt',
  },
  {
    id: 'item 2',
    icon: <KeyIcon />,
    label: 'Đầu đốt',
  },
  {
    id: 'item 3',
    icon: <KeyIcon />,
    label: 'Đầu đốt',
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
    categoryMenuItems={categoryMenuItems}
    onCategoryBarItemClick={handleCategoryBarItemsClicked}
  />
);
