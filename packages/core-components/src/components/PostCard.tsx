import React from 'react';

type PostCardProps = {
  children?: React.ReactNode;
  className?: string;
  previewImage?: string;
  title?: string;
  description?: string;
};

const PostCard: React.FC<PostCardProps> = ({
  children,
  className,
  previewImage,
  title,
  description,
}) => {
  return (
    <div
      className={`flex flex-col md:w-80 sm:w-60 font-primary gap-3 ${className}`}
    >
      <img
        src={previewImage}
        alt={title}
        className='rounded-t-md md:h-52 sm:h-36 md:text-base sm:text-sm bg-gray-200'
      />
      <div className='w-full'>
        <h2 className='md:text-lg sm:text-base font-bold'>{title}</h2>
        <p className='h-15 line-clamp-3 md:text-base sm:text-sm font-normal'>
          {description}
        </p>
      </div>
      {children}
    </div>
  );
};

export default PostCard;
