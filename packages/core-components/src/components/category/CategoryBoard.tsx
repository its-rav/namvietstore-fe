import React from 'react';

import CategoryItem from '@/components/category/CategoryItem';
import { CategorySubMenu } from '@/components/category/CategoryProps';

export type CategoryBoardProps = {
  items: CategorySubMenu[];
};
const CategoryBoard: React.FC<CategoryBoardProps> = ({ items }) => {
  const boardSize = {
    minHeight: '15rem',
    maxHeight: ' max-content',
  };
  return (
    <div
      className={'left-auto min-h-60 max-h-max w-full bg-white drop-shadow-md'}
    >
      <div className='grid grid-cols-4 gap-4 p-4' style={boardSize}>
        {items.map((data) => {
          return (
            <div key={data.link + data.name}>
              <CategoryItem
                children={data.name}
                link={data.link}
                isSmall={true}
                isBold={true}
              />
              {data.items?.map((subdata) => {
                return (
                  <div key={subdata.link + subdata.name}>
                    <CategoryItem
                      children={subdata.name}
                      link={subdata.link}
                      isSmall={true}
                    />
                  </div>
                );
              })}
            </div>
          );
        })}
      </div>
    </div>
  );
};
export default CategoryBoard;
