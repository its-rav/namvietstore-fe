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
    subItems: [
      {
        title: 'Đầu đốt theo hãng',
        items: [
          {
            description: 'Madas',
            url: '/madas',
          },
          {
            description: 'Madas',
            url: '/2',
          },
          {
            description: 'Madas',
            url: '/3',
          },
        ],
      },
      {
        title: 'Đầu đốt theo loại nhiên liệu',
        items: [
          {
            description: 'Madas',
            url: '/madas',
          },
          {
            description: 'Madas',
            url: '/2',
          },
          {
            description: 'Madas',
            url: '/3',
          },
        ],
      },
      {
        title: 'Đầu đốt theo lĩnh vực',
        items: [
          {
            description: 'Madas',
            url: '/madas',
          },
          {
            description: 'Madas',
            url: '/2',
          },
          {
            description: 'Madas',
            url: '/3',
          },
        ],
      },
    ],
  },
  {
    id: 'item 2',
    icon: <KeyIcon />,
    label: 'Đầu đốt',
    subItems: [
      {
        title: 'Đầu đốt theo hãng',
        items: [
          {
            description: 'Madas',
            url: '/1',
          },
          {
            description: 'Madas',
            url: '/2',
          },
          {
            description: 'Madas',
            url: '/3',
          },
        ],
      },
    ],
  },
  {
    id: 'item 3',
    icon: <KeyIcon />,
    label: 'Đầu đốt',
    subItems: [
      {
        title: 'Đầu đốt theo hãng',
        items: [
          {
            description: 'Madas',
            url: '/1',
          },
          {
            description: 'Madas',
            url: '/2',
          },
          {
            description: 'Madas',
            url: '/3',
          },
        ],
      },
    ],
  },
  {
    id: 'item 4',
    icon: <KeyIcon />,
    label: 'Nồi hơi và nồi nước nóng đốt',
    subItems: [
      {
        title: 'Đầu đốt theo hãng',
        items: [
          {
            description: 'Madas',
            url: '/12',
          },
          {
            description: 'Madas',
            url: '/2',
          },
          {
            description: 'Madas',
            url: '/3',
          },
        ],
      },
    ],
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
