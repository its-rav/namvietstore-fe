import React from 'react';

import { Button } from '@/components/buttons';

export type categoryBarItemType = {
  name: string;
  url: string;
};

type CategoryBarProps = {
  categoryButtonIcon?: React.ReactNode;
  categoryButtonText?: string;
  categoryBarItems?: categoryBarItemType[];
  onCategoryBarItemClick?: (url: string) => void;
};

const CategoryBar: React.FC<CategoryBarProps> = ({
  categoryButtonIcon,
  categoryButtonText,
  categoryBarItems,
  onCategoryBarItemClick,
}) => {
  return (
    <div className='w-full flex justify-between items-center'>
      <Button leftIcon={categoryButtonIcon} backgroundColor='secondary'>
        {categoryButtonText}
      </Button>
      <div className='flex gap-x-7 font-primary text-lg leading-6 font-normal  text-gray-500 hover:cursor-pointer'>
        {categoryBarItems?.map((categoryBarItem) => (
          <p
            onClick={() => onCategoryBarItemClick?.(categoryBarItem.url)}
            className='hover:text-gray-700'
            key={categoryBarItem.url}
          >
            {categoryBarItem.name}
          </p>
        ))}
      </div>
    </div>
  );
};

export default CategoryBar;
