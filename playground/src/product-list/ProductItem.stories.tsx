'use clients';
import type { Story, StoryDefault } from '@ladle/react';
import { type ProductItemType,ProductItem } from '@namviet-fe/core-ui';
import React from 'react';

import '@namviet-fe/core-ui/dist/style.css';

export default {
  title: '@nv-fe/core-ui/product-list/ProductItem',
} satisfies StoryDefault<typeof ProductItem>;

const productItems: ProductItemType[] = [
  {
    productId: '101',
    productName: 'Dầu đốt 1',
    previewImage:
      'https://hips.hearstapps.com/hmg-prod/images/dog-puppy-on-garden-royalty-free-image-1586966191.jpg?crop=0.752xw:1.00xh;0.175xw,0&resize=1200:*',
    description:
      'Chuyên cung cấp các đầu đốt djnfkjsfbkja asdjasdjk ajshdjkashdkj ashdkjahsd ajshdkjasdkj ạhdkjahsd',
    specifications: 'Công suất: 50-5500kw',
  },
  {
    productId: '102',
    productName: 'Dầu đốt 2',
    previewImage:
      'https://hips.hearstapps.com/hmg-prod/images/dog-puppy-on-garden-royalty-free-image-1586966191.jpg?crop=0.752xw:1.00xh;0.175xw,0&resize=1200:*',
    description: 'Chuyên cung cấp các đầu đốt',
    specifications: 'Công suất: 50-5500kw',
  },
  {
    productId: '103',
    productName: 'Dầu đốt 3',
    previewImage:
      'https://hips.hearstapps.com/hmg-prod/images/dog-puppy-on-garden-royalty-free-image-1586966191.jpg?crop=0.752xw:1.00xh;0.175xw,0&resize=1200:*',
    description: 'Chuyên cung cấp các đầu đốt',
    specifications: 'Công suất: 50-5500kw',
  },
  {
    productId: '104',
    productName: 'Dầu đốt 4',
    previewImage:
      'https://hips.hearstapps.com/hmg-prod/images/dog-puppy-on-garden-royalty-free-image-1586966191.jpg?crop=0.752xw:1.00xh;0.175xw,0&resize=1200:*',
    description: 'Chuyên cung cấp các đầu đốt',
    specifications: 'Công suất: 50-5500kw',
  },
  {
    productId: '105',
    productName: 'Dầu đốt 4',
    previewImage:
      'https://hips.hearstapps.com/hmg-prod/images/dog-puppy-on-garden-royalty-free-image-1586966191.jpg?crop=0.752xw:1.00xh;0.175xw,0&resize=1200:*',
    description: 'Chuyên cung cấp các đầu đốt',
    specifications: 'Công suất: 50-5500kw',
  },
];

const onClick = (productId: string) => {
  console.log('productId', productId);
};

export const Default: Story = () => {
  return (
    <>
      <div
        style={{
          width: '100%',
          backgroundColor: '#F3F3F3',
          padding: '20px',
        }}
        className='grid grid-cols-4 gap-3'
      >
        {productItems.map((item) => {
          return (
            <div key={item.productId} className='col-span-1'>
              <ProductItem productItem={item} onClick={onClick} />
            </div>
          );
        })}
        <div className='col-span-3'>
          <ProductItem
            productItem={{
              productId: '106',
              productName: 'Dầu đốt 4',
              previewImage:
                'https://hips.hearstapps.com/hmg-prod/images/dog-puppy-on-garden-royalty-free-image-1586966191.jpg?crop=0.752xw:1.00xh;0.175xw,0&resize=1200:*',
              description: 'Chuyên cung cấp các đầu đốt',
              specifications: 'Công suất: 50-5500kw',
            }}
            classItem='flex flex-row'
            classImg='basis-2/5'
            classContent='basis-3/5'
            onClick={onClick}
          />
        </div>
      </div>
    </>
  );
};
