import type { Story, StoryDefault } from '@ladle/react';
import {
  type ProductSummaryItemType,
  ProductSummary,
} from '@namviet-fe/core-ui';
import React from 'react';

import '@namviet-fe/core-ui/dist/style.css';

export default {
  title: '@nv-fe/core-ui/product-detail/ProductSummary',
} satisfies StoryDefault<typeof ProductSummary>;

const product = {
  name: 'Đầu đốt Blowtherm Diesel Burner',
  brand: 'Blowtherm',
  productId: 'MA01',
  details: [
    'Thiết kế nhỏ gọn, dễ thao tác tháo lắp.',
    'Sử dụng trong các lò hơi nhỏ trong dân dụng đến lớn trong công nghiệp.',
    'Chế độ điều khiển và hoạt động linh hoạt : 1 cấp, 2 cấp, 3 cấp và vô cấp.',
    'Công suất đầu đốt tới 6380 kW (tương đương 550 kg/h)',
  ],
};

const productSummaryItem: ProductSummaryItemType = {
  title: product.name,
  subInfos: [
    { label: 'Thương hiệu', value: product.brand },
    { label: 'Mã sản phẩm', value: product.productId },
  ],
  infoLabel: 'Thông tin chi tiết',
  details: product.details,
};

const onClick = () => {
  console.log('Liên hệ mua hàng');
};

export const Default: Story = () => (
  <div className='grid grid-cols-3' style={{ padding: '20px' }}>
    <div className='col-span-3 md:!col-span-1'></div>
    <div className='col-span-3 md:!col-span-2'>
      <ProductSummary
        productSummaryItem={productSummaryItem}
        buttonLabel={'Liên hệ mua hàng'}
        onClick={onClick}
      />
    </div>
  </div>
);
