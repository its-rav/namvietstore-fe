import React from 'react';

import Button from '@/components/buttons/Button';

import { useI18nContext } from '@/i18n/i18n-react';
import { WhitePlusIcon } from '@/icons';

type PostCardProps = {
  className?: string;
  previewImage?: string;
  title?: string;
  description?: string;
  onClick?: () => void;
};

const PostCard: React.FC<PostCardProps> = ({
  className,
  previewImage,
  title,
  description,
  onClick,
}) => {
  const { LL: t } = useI18nContext();
  return (
    <div
      className={`flex flex-col md:w-80 sm:w-60 font-primary gap-3 ${className}`}
    >
      <img
        src={previewImage}
        alt={title}
        className='rounded-t-md object-cover md:h-52 sm:h-36 md:text-base sm:text-sm bg-gray-200'
      />
      <div className='w-full'>
        <h2 className='md:text-lg sm:text-base font-bold'>{title}</h2>
        <p className='h-16 line-clamp-3 md:text-base sm:text-sm md:leading-snug sm:leading-normal font-normal'>
          {description}
        </p>
      </div>
      <Button
        children={`${t.postCard.readMore()}`}
        rightIcon={<WhitePlusIcon />}
        onClick={onClick}
      />
    </div>
  );
};

export default PostCard;
