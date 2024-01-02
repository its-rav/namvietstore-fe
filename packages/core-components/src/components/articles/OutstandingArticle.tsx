import React from 'react';

export type OutStandingArticleType = {
  title: string;
  image: string;
  content: string;
  date: string;
};

export type OutStandingArticleProps = {
  article: OutStandingArticleType;
};

const OutStandingArticle: React.FC<OutStandingArticleProps> = ({
  article
}) => {
  return (
    <div className='max-[600px]:collapse'>
      <div className='flex bg-[#FFE1E1] h-[460px]'>
        <div className='flex mx-[80px] space-x-4'>
          <div className='flex justify-center align-center flex-col w-[40%] py-4'>
            <p className='text-md text-[15px] font-bold'>{article.title}</p>
            <p className='text-md text-[13px] '>{article.content}</p>
          </div>
          <div className='flex flex-col justify-center align-center'>
            <img className='w-[650px] h-[400px]' src={article.image} alt={article.title} />
          </div>
        </div>
      </div>  
    </div>
  );
};

export default OutStandingArticle;
