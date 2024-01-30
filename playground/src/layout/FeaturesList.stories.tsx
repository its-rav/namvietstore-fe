import type { Story, StoryDefault } from '@ladle/react';
import {
  type FeaturesListItemType,
  FeaturesList,
  HeadphonesIcon,
  KeyIcon,
  ProductIcon,
  UserIcon,
} from '@namviet-fe/core-ui';
import React from 'react';
import 'regenerator-runtime/runtime';

const items: FeaturesListItemType[] = [
  {
    icon: <ProductIcon />,
    title: 'Sản phẩm',
    description: 'Đa dạng và chất lượng',
    id: 1,
  },
  {
    icon: <HeadphonesIcon />,
    title: 'Dịch vụ',
    description: 'Uy tín và tận tâm',
    id: 2,
  },
  {
    icon: <KeyIcon />,
    title: 'Trách nhiệm',
    description: 'Đồng hành và phát triển cùng khách hàng',
    id: 3,
  },
  {
    icon: <UserIcon />,
    title: 'Nhân viên',
    description: 'Đội ngũ giàu kinh nghiệm, có chuyên môn',
    id: 4,
  },
];

export default {
  title: '@nv-fe/core-ui/layout/FeaturesList',
} satisfies StoryDefault<typeof FeaturesList>;

export const Default: Story = () => <FeaturesList items={items} />;
