import React, { useState } from 'react';

import CategoryBoard from '@/components/category/CategoryBoard';
import CategoryButton from '@/components/category/CategoryButton';
import CategoryItem from '@/components/category/CategoryItem';
import {
  CategoryMenu,
  CategorySubMenu,
} from '@/components/category/CategoryProps';

const CategoryUsage: React.FC<CategoryMenu> = ({
  mainButtonIcon,
  mainButtonTitle,
  items,
}) => {
  const [isShow, setShow] = useState(false);
  const [subItems, setSubItems] = useState<CategorySubMenu[]>([]);
  const handleMouseEnter = () => {
    setShow(true);
  };
  const handleMouseLeave = () => {
    setShow(false);
    setSubItems([]);
  };
  const handleCLick = () => {
    setShow(!isShow);
    setSubItems([]);
  };
  return (
    <div>
      <CategoryButton
        title={mainButtonTitle}
        icon={mainButtonIcon}
        handleClick={handleCLick}
        handleMouseEnter={handleMouseEnter}
      />
      {isShow && (
        <div
          className={`flex flex-row relative z-10`}
          onMouseLeave={handleMouseLeave}
        >
          <div className='absolute left-0 top-0'>
            {items.map((data) => {
              return (
                <div key={data.link + data.name}>
                  <CategoryItem
                    icon={data.icon}
                    link={data.link}
                    children={data.name}
                    isSmall={false}
                    handleMouseEnter={() => {
                      setSubItems(data.items);
                    }}
                  />
                </div>
              );
            })}
          </div>
          {subItems.length > 0 && (
            <div className='absolute md:left-52 lg:left-56 top-0 w-4/6'>
              <CategoryBoard items={subItems} />
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default CategoryUsage;
