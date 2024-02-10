import type { Story, StoryDefault } from '@ladle/react';
import { IntroPanelCard } from '@namviet-fe/core-ui';
import { Target, Gift, Vision } from '@namviet-fe/core-ui';
import React from 'react';
import 'regenerator-runtime/runtime';

export default {
  title: '@nv-fe/core-ui/IntroCard',
} satisfies StoryDefault<typeof IntroPanelCard>;

const cards = [
  {
    icon: <Target />,
    title: 'Giá trị cốt lõi',
    description:
      'Chúng tôi sẽ có trách nhiệm cá nhân với nhau để tăng hiệu suất từng cá nhân trong chúng tôi, cũng như chung trách nhiệm với cácbên liên quan của chúng tôi theo các cam kết trong hợp đồng và các nghĩa vụ pháp lý. Chúng tôi sẽ là một công dân tốt và chịu trách nhiệm của mỗi cá nhân trong cộng đồng nơi chúng tôi hoạt động.',
  },
  {
    icon: <Gift />,
    title: 'Giá trị cốt lõ',
    description:
      'Chúng tôi sẽ có trách nhiệm cá nhân với nhau để tăng hiệu suất từng cá nhân trong chúng tôi, cũng như chung trách nhiệm với cácbên liên quan của chúng tôi theo các cam kết trong hợp đồng và các nghĩa vụ pháp lý. Chúng tôi sẽ là một công dân tốt và chịu trách nhiệm của mỗi cá nhân trong cộng đồng nơi chúng tôi hoạt động.',
  },
  {
    icon: <Vision />,
    title: 'Giá trị cốt lõi',
    description:
      'Chúng tôi sẽ có trách nhiệm cá nhân với nhau để tăng hiệu suất từng cá nhân trong chúng tôi, cũng như chung trách nhiệm với cácbên liên quan của chúng tôi theo các cam kết trong hợp đồng và các nghĩa vụ pháp lý. Chúng tôi sẽ là một công dân tốt và chịu trách nhiệm của mỗi cá nhân trong cộng đồng nơi chúng tôi hoạt động.',
  },
];

export const Default: Story = () => (
  <IntroPanelCard
    icon={<Gift />}
    title='Giá trị cốt lõi'
    description='Chúng tôi sẽ có trách nhiệm cá nhân với nhau để tăng hiệu suất từng cá nhân trong chúng tôi, cũng như chung trách nhiệm với cácbên liên quan của chúng tôi theo các cam kết trong hợp đồng và các nghĩa vụ pháp lý. Chúng tôi sẽ là một công dân tốt và chịu trách nhiệm của mỗi cá nhân trong cộng đồng nơi chúng tôi hoạt động.'
  />
);

export const IntroPanelCardList: Story = () => (
  <div className='flex space-x-4 max-[600px]:snap-x'>
    {cards.map(({icon, title, description}, index) => {
      return (
        <div key={index}>
          <IntroPanelCard
            icon= {icon}
            title={title}
            description={description}
          />
        </div>
      );
    })}
  </div>
);
