import type { Story, StoryDefault } from '@ladle/react';
import { Article, ArticleList, OutStandingArticle } from '@namviet-fe/core-ui';
import React from 'react';
import 'regenerator-runtime/runtime';

export default {
  title: '@nv-fe/core-ui/Article',
} satisfies StoryDefault<typeof Article>;

const article = {
  title: 'Những dự án mà chúng tôi đã thực hiện',
  image: 'https://picsum.photos/200',
  content:
    'Chúng tôi luôn được thúc đẩy bởi mục đích mang cuộc sống bền vững trở nên phổ biến.Chúng tôi luôn được thúc đẩy bởi mục đích mang cuộc sống bền vững trở nên phổ biến. \nChúng tôi luôn được thúc đẩy bởi mục đích mang cuộc sống bền vững trở nên phổ biến.Các chương trình trao quyền cho phụ nữ sẽ tiếp tục được lan tỏa, tạo điều kiện và mang lại cơ hội đào tạo khởi nghiệp cho ít nhất 100.000 phụ nữ với sáng kiến, cam kết cắt giảm khí nhà kính trong vận hành và chuỗi giá trị.',
  date: '2021-09-09',
};

export const Default: Story = () => <Article article={article} />;

export const ListOfArticle: Story = () => (
  <ArticleList articles={[article, article, article]} />
);

export const HighlightArticle: Story = () => (
  <OutStandingArticle article={article} />
);
