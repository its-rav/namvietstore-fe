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
    url: '/1',
  },
  {
    name: 'Giới thiệu',
    url: '/2',
  },
  {
    name: 'Tin tức',
    url: '/33',
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
        key: 'item1-1',
        title: 'Đầu đốt theo hãng',
        items: [
          {
            description: 'Madas',
            url: '/madas',
          },
          {
            description: 'Madas',
            url: '/23',
          },
          {
            description: 'Madas',
            url: '/34',
          },
        ],
      },
      {
        key: 'item1-2',
        title: 'Đầu đốt theo loại nhiên liệu',
        items: [
          {
            description: 'Madas',
            url: '/madas',
          },
          {
            description: 'Madas',
            url: '/25',
          },
          {
            description: 'Madas',
            url: '/36',
          },
        ],
      },
      {
        key: 'item1-3',
        title: 'Đầu đốt theo lĩnh vực',
        items: [
          {
            description: 'Madas',
            url: '/madas',
          },
          {
            description: 'Madas',
            url: '/27',
          },
          {
            description: 'Madas',
            url: '/38',
          },
        ],
      },
      {
        key: 'item1-4',
        title: 'Đầu đốt theo lĩnh vực',
        items: [
          {
            description: 'Madas',
            url: '/madas',
          },
          {
            description: 'Madas',
            url: '/test',
          },
          {
            description: 'Madas',
            url: '/091',
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
        key: 'item2-1',
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
      {
        key: 'item2-2',
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
      {
        key: 'item2-3',
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
        key: 'item3-1',
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
        key: 'item4-1',
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
      {
        key: 'item4-2',
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
      {
        key: 'item4-3',
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
      {
        key: 'item4-4',
        title: 'Đầu đốt theo linh vuc nghiep vu',
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
      {
        key: 'item4-5',
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
