import type { Story, StoryDefault } from '@ladle/react';
import { IntroPanelCard } from '@namviet-fe/core-ui';
import { ViIcon } from '@namviet-fe/core-ui';
import React from 'react';
import 'regenerator-runtime/runtime';

export default {
  title: '@nv-fe/core-ui/IntroCard',
} satisfies StoryDefault<typeof IntroPanelCard>;

export const Default: Story = () => (
  <IntroPanelCard
    icon={<ViIcon />}
    title='Giá trị cốt lõi'
    description='Chúng tôi sẽ có trách nhiệm cá nhân với nhau để tăng hiệu suất từng cá nhân trong chúng tôi, cũng như chung trách nhiệm với cácbên liên quan của chúng tôi theo các cam kết trong hợp đồng và các nghĩa vụ pháp lý. Chúng tôi sẽ là một công dân tốt và chịu trách nhiệm của mỗi cá nhân trong cộng đồng nơi chúng tôi hoạt động.'
  />
);

export const ProductIntro: Story = () => (
  <p>Default</p>
);
