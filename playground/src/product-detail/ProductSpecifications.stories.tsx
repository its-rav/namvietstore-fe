import type { Story, StoryDefault } from '@ladle/react';
import {
  type ProductSpecificationsItemType,
  type ProductSpecificationsGroupType,
  ProductSpecifications,
} from '@namviet-fe/core-ui';
import React from 'react';

import '@namviet-fe/core-ui/dist/style.css';

export default {
  title: '@nv-fe/core-ui/product-detail/ProductSpecifications',
} satisfies StoryDefault<typeof ProductSpecifications>;

const productSpecificationsItems: ProductSpecificationsItemType[] = [
  { name: 'Thương hiệu', value: 'SAMSUNG' },
  { name: 'Bảo hành', value: '12 tháng' },
];

const productSpecificationsGroups: ProductSpecificationsGroupType[] = [
  {
    nameGroup: 'Thông tin chung',
    listItem: [
      {
        name: 'Nhóm sản xuất',
        value: 'Điện thoại',
      },
      {
        name: 'Tên',
        value: 'Galaxy Z Flip4',
      },
      {
        name: 'Series',
        value: 'Galaxy Z',
      },
    ],
  },
  {
    nameGroup: 'Cấu hình',
    listItem: [
      {
        name: 'Dung lượng (ROM)',
        value: '128GB',
      },
      {
        name: 'Hệ điều hành',
        value: 'Android',
      },
      {
        name: 'RAM',
        value: '8GB',
      },
    ],
  },
  {
    nameGroup: 'Cấu hìnhh',
    listItem: [
      {
        name: 'Dung lượng (ROM)h',
        value: '128GB',
      },
      {
        name: 'Hệ điều hànhh',
        value: 'Android',
      },
      {
        name: 'RAMh',
        value: '8GB',
      },
      {
        name: 'Hệ điều hànhhh',
        value: 'Android',
      },
      {
        name: 'RAMhh',
        value: '8GB',
      },
    ],
  },
];

const onClick = () => {
  console.log('Liên hệ mua hàng');
};

export const Default: Story = () => (
  <div className='grid grid-cols-3' style={{ padding: '20px' }}>
    <div className='col-span-2'></div>
    <div className='col-span-1'>
      <ProductSpecifications
        productSpecificationsItems={productSpecificationsItems}
        productSpecificationsGroups={productSpecificationsGroups}
      />
    </div>
  </div>
);
