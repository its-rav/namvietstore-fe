import React from 'react';

import CategoryItem from '@/components/category/CategoryItem';
import { CategoryMenuItem } from '@/components/category/CategoryProps';

const CategoryBoard: React.FC<CategoryMenuItem> = ({ items }) => {
  const boardSize = {
    minHeight: '15rem',
    maxHeight: ' max-content',
  };
  return (
    <div
      className={'left-auto min-h-60 max-h-full w-full bg-white drop-shadow-xl'}
    >
      <div className='grid grid-cols-4 gap-4 p-4' style={boardSize}>
        {items.map((data) => {
          return (
            <div key={data.link + Math.random()}>
              <CategoryItem
                children={data.name}
                link={data.link}
                small={true}
                boldTitle={true}
              />
              {data.items?.map((subdata) => {
                return (
                  <div key={subdata.link + Math.random()}>
                    <CategoryItem
                      children={subdata.name}
                      link={subdata.link}
                      small={true}
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
