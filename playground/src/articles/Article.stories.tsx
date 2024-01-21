import type { Story, StoryDefault } from '@ladle/react';
import { Article, ArticleList, OutStandingArticle } from '@namviet-fe/core-ui';
import React from 'react';
import 'regenerator-runtime/runtime';

export default {
  title: '@nv-fe/core-ui/Article',
} satisfies StoryDefault<typeof Article>;

const article = {
  title: 'Article title',
  image: 'https://picsum.photos/200',
  content:
    'Nhiều phụ nữ hiện nay vẫn bị đóng khung trong các khuôn mẫu, chuẩn mực về vẻ đẹp và vai trò của nữ giới. Đứng trước thực trạng đó, Unilever nhận thức rõ vai trò, trách nhiệm của mình trong việc xóa bỏ các định kiến và khuôn khổ tiêu cực.',
  date: '2021-09-09',
};

export const Default: Story = () => <Article article={article} />;

export const ListOfArticle: Story = () => (
  <ArticleList articles={[article, article, article]} />
);

export const HighlightArticle: Story = () => (
  <OutStandingArticle article={article} />
);
