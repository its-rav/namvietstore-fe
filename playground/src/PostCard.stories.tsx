import type { Story, StoryDefault } from '@ladle/react';
import { PostCard } from '@namviet-fe/core-ui';
import React from 'react';
import 'regenerator-runtime/runtime';

export default {
  title: '@nv-fe/core-ui/PostCard',
} satisfies StoryDefault<typeof PostCard>;

export const Default: Story = (args) => (
  <div
    style={{
      width: 'full',
      backgroundColor: 'white',
      padding: '20px',
      display: 'flex',
    }}
  >
    <div style={{ marginLeft: '20px', marginRight: '20px' }}>
      <PostCard
        title='Dầu đốt'
        previewImage='https://hips.hearstapps.com/hmg-prod/images/dog-puppy-on-garden-royalty-free-image-1586966191.jpg?crop=0.752xw:1.00xh;0.175xw,0&resize=1200:*'
        description='Chuyên cung cấp các đầu đốt (Blowtherm - Italy, Hofamat - Germany, …) và phụ tùng đầu đốt các loại. Các sản phẩm được sản xuất với công nghệ tiên tiến và được sử dụng rộng rãi trong các ngành công nghiệp.'
        {...args}
      />
    </div>

    <div style={{ marginLeft: '20px', marginRight: '20px' }}>
      <PostCard
        title='Dầu đốt'
        previewImage='https://hips.hearstapps.com/hmg-prod/images/dog-puppy-on-garden-royalty-free-image-1586966191.jpg?crop=0.752xw:1.00xh;0.175xw,0&resize=1200:*'
        description='Chuyên cung cấp các đầu đốt (Blowtherm.'
        {...args}
      />
    </div>

    <div style={{ marginLeft: '20px', marginRight: '20px' }}>
      <PostCard
        title='Dầu đốt'
        previewImage='https://hips.hearstapps.com/hmg-prod/images/dog-puppy-on-garden-royalty-free-image-1586966191.jpg?crop=0.752xw:1.00xh;0.175xw,0&resize=1200:*'
        description='Chuyên cung cấp các đầu đốt (Blowtherm - Italy, Hofamat - Germany, …) và'
        {...args}
      />
    </div>
  </div>
);
