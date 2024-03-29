import type { Story, StoryDefault } from '@ladle/react';
import { type ProductImgItemType, ProductCarousel } from '@namviet-fe/core-ui';
import React from 'react';

import '@namviet-fe/core-ui/dist/style.css';

export default {
  title: '@nv-fe/core-ui/product-detail/ProductCarousel',
} satisfies StoryDefault<typeof ProductCarousel>;

const productImgItems: ProductImgItemType[] = [
  { src: 'https://picsum.photos/id/1019/1000/600/', alt: 'hình 1' },
  { src: 'https://picsum.photos/id/1008/1000/600/', alt: 'hình 2' },
  { alt: 'hình 3', src: '' },
  { src: 'https://picsum.photos/id/1016/1000/600/' },
  { src: 'https://picsum.photos/id/1019/1000/600/', alt: 'hình 5' },
  { src: 'https://picsum.photos/id/1008/1000/600/', alt: 'hình 6' },
  { alt: 'hình 7', src: '' },
  { src: 'https://picsum.photos/id/1016/1000/600/' },
];

export const Default: Story = () => (
  <div className='grid grid-cols-3' style={{ padding: '20px' }}>
    <div className='col-span-3 md:!col-span-1'>
      <ProductCarousel productImgItems={productImgItems} />
    </div>
    <div className='col-span-3 md:!col-span-2'></div>
  </div>
);
