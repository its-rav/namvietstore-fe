import React from 'react';
import Article, { ArticleType } from './Article';

type ArticleListProps = {
  articles: Array<ArticleType>;
};

const ArticleList: React.FC<ArticleListProps> = ({
  articles
}) => {
  return (
    <div className='space-y-2 columns-1 md:columns-2'>
      {
        articles.map((article) => {
          return (
            <div >
              <Article
                article={article}
              />
            </div>
          );
          })
      }
    </div>
  );
};

export default ArticleList;
