import type { StoryDefault } from '@ladle/react';
import {
  type CategoryMenuItemType,
  CategoryMenu,
  HamburgerIcon,
  KeyIcon,
} from '@namviet-fe/core-ui';
import React from 'react';
import 'regenerator-runtime/runtime';
import 'regenerator-runtime/runtime';

import '@namviet-fe/core-ui/dist/style.css';
export default {
  title: '@nv-fe/core-ui/CategoryMenu',
} satisfies StoryDefault<typeof CategoryMenu>;

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

export const Default = () => (
  <CategoryMenu
    buttonIcon={<HamburgerIcon />}
    buttonText='DANH MỤC SẢN PHẨM'
    categoryMenuItems={categoryMenuItems}
  />
);
