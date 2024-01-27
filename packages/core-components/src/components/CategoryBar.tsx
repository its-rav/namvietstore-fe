import React from 'react';

import { type CategoryMenuItemType } from '@/components/CategoryMenu';
import CategoryMenu from '@/components/CategoryMenu';

export type categoryBarItemType = {
  name: string;
  url: string;
};

type CategoryBarProps = {
  categoryButtonIcon?: React.ReactNode;
  categoryButtonText?: string;
  categoryBarItems?: categoryBarItemType[];
  categoryMenuItems?: CategoryMenuItemType[];
  onCategoryBarItemClick?: (url: string) => void;
  onCategorySubMenuItemClick?: (url: string) => void;
};

const CategoryBar: React.FC<CategoryBarProps> = ({
  categoryButtonIcon,
  categoryButtonText,
  categoryBarItems,
  categoryMenuItems,
  onCategoryBarItemClick,
  onCategorySubMenuItemClick,
}) => {
  return (
    <div className='w-full flex justify-between items-center'>
      <CategoryMenu
        buttonIcon={categoryButtonIcon}
        buttonText={categoryButtonText}
        categoryMenuItems={categoryMenuItems}
        onCategorySubMenuItemClick={onCategorySubMenuItemClick}
      />
      <div className='flex gap-x-7 font-primary text-lg leading-6 font-normal text-gray-500 hover:cursor-pointer whitespace-nowrap'>
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
