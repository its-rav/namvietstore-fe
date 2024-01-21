import React from 'react';

export type ArticleType = {
  title: string;
  image: string;
  content: string;
  date: string;
};

export type ArticleProps = {
  article: ArticleType;
};

const Article: React.FC<ArticleProps> = ({ article }) => {
  return (
    <div className='flex h-[105px] w-[400px]'>
      <img className='mr-3' src={article.image} alt={article.title} />
      <div className='w-full'>
        <p className='text-md text-[15px] font-bold'>{article.title}</p>
        <p className='text-[11px]'>{article.date}</p>
        <p className='text-[13px] line-clamp-3 '>{article.content}</p>
      </div>
    </div>
  );
};

export default Article;
