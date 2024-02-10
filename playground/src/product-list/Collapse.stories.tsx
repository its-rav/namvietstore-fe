import type { Story, StoryDefault } from '@ladle/react';
import { ProductCollapse } from '@namviet-fe/core-ui';
import React from 'react';

import '@namviet-fe/core-ui/dist/style.css';
export default {
  title: '@nv-fe/core-ui/product-list/Collapse',
} satisfies StoryDefault<typeof ProductCollapse>;

const filterItems = [
  {
    productName: 'Bếp hồng ngoại',
    productImage:
      'https://thietbinhietnv.com/storage/app/uploads/public/5df/64d/31d/5df64d31d51d8117549829.jpg',
    productDescription:
      'Chuyên cung cấp các đầu đốt (Blowtherm – Italy, Hofamat – Germany, …) và phụ tùng đầu đốt các loại. Các sản phẩm được sản xuất với công nghệ tiên tiến và được sử dụng rộng rãi trong các ngành công nghiệp. Chuyên cung cấp các đầu đốt (Blowtherm – Italy, Hofamat – Germany, …) và phụ tùng đầu đốt các loại. Các sản phẩm được sản xuất với công nghệ tiên tiến và được sử dụng rộng rãi trong các ngành công nghiệp.',
  },
  {
    productName: 'Bếp hồng ngoại',
    productImage:
      'https://thietbinhietnv.com/storage/app/uploads/public/5df/64d/31d/5df64d31d51d8117549829.jpg',
    productDescription:
      'Chuyên cung cấp các đầu đốt (Blowtherm – Italy, Hofamat – Germany, …) và phụ tùng đầu đốt các loại. Các sản phẩm được sản xuất với công nghệ tiên tiến và được sử dụng rộng rãi trong các ngành công nghiệp. Chuyên cung cấp các đầu đốt (Blowtherm – Italy, Hofamat – Germany, …) và phụ tùng đầu đốt các loại. Các sản phẩm được sản xuất với công nghệ tiên tiến và được sử dụng rộng rãi trong các ngành công nghiệp.',
  },
  {
    productName: 'Bếp hồng ngoại',
    productImage:
      'https://thietbinhietnv.com/storage/app/uploads/public/5df/64d/31d/5df64d31d51d8117549829.jpg',
    productDescription:
      'Chuyên cung cấp các đầu đốt (Blowtherm – Italy, Hofamat – Germany, …) và phụ tùng đầu đốt các loại. Các sản phẩm được sản xuất với công nghệ tiên tiến và được sử dụng rộng rãi trong các ngành công nghiệp. Chuyên cung cấp các đầu đốt (Blowtherm – Italy, Hofamat – Germany, …) và phụ tùng đầu đốt các loại. Các sản phẩm được sản xuất với công nghệ tiên tiến và được sử dụng rộng rãi trong các ngành công nghiệp.',
  },
  {
    productName: 'Bếp hồng ngoại',
    productImage:
      'https://thietbinhietnv.com/storage/app/uploads/public/5df/64d/31d/5df64d31d51d8117549829.jpg',
    productDescription:
      'Chuyên cung cấp các đầu đốt (Blowtherm – Italy, Hofamat – Germany, …) và phụ tùng đầu đốt các loại. Các sản phẩm được sản xuất với công nghệ tiên tiến và được sử dụng rộng rãi trong các ngành công nghiệp. Chuyên cung cấp các đầu đốt (Blowtherm – Italy, Hofamat – Germany, …) và phụ tùng đầu đốt các loại. Các sản phẩm được sản xuất với công nghệ tiên tiến và được sử dụng rộng rãi trong các ngành công nghiệp.',
  },
];

export const Default: Story = () => <ProductCollapse products={filterItems} />;
