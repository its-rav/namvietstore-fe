import {
  Menu,
  MenuHandler,
  MenuItem,
  MenuList,
} from '@material-tailwind/react';
import React from 'react';

import Button from '@/components/buttons/Button';

type CategoryMenuProps = {
  buttonIcon?: React.ReactNode;
  buttonText?: string;
  buttonBackgroundColor?: 'primary' | 'secondary';
  categoryMenuItems?: CategoryMenuItemType[];
  onCategorySubMenuItemClick?: (url: string) => void;
};

type CategorySubMenuProps = {
  categorySubMenuItem: CategoryMenuSubItemType[];
  onCategorySubMenuItemClick?: (url: string) => void;
};

type CategoryMenuSubItemType = {
  key: string;
  title: string;
  items: {
    description: string;
    url: string;
  }[];
};

export type CategoryMenuItemType = {
  id: string;
  icon: React.ReactNode;
  label: string;
  subItems?: CategoryMenuSubItemType[];
};

const CategorySubMenu: React.FC<CategorySubMenuProps> = ({
  categorySubMenuItem,
  onCategorySubMenuItemClick,
}) => {
  return (
    <div className='relative -right-72 grid h-full w-full grid-cols-4 grid-flow-row bg-gray-400'>
      {categorySubMenuItem.map((categorySubMenuItem) => (
        <div
          className='flex flex-col items-start gap-y-2 px-2 bg-purple-200'
          key={categorySubMenuItem.key}
        >
          <p className='font-primary text-lg font-bold leading-6 text-black'>
            {categorySubMenuItem.title}
          </p>
          {categorySubMenuItem.items.map((item) => (
            <p
              className='font-primary text-lg font-normal leading-6 text-black hover:underline hover:cursor-pointer'
              key={item.url}
              onClick={() => onCategorySubMenuItemClick?.(item.url)}
            >
              {item.description}
            </p>
          ))}
        </div>
      ))}
    </div>
  );
};

const CategoryMenu: React.FC<CategoryMenuProps> = ({
  buttonIcon,
  buttonText,
  buttonBackgroundColor = 'secondary',
  categoryMenuItems,
  onCategorySubMenuItemClick,
}) => {
  const [hoveredCategoryIndex, setHoveredCategoryIndex] =
    React.useState<number>(-1);

  const handleMenuItemMouseEnter = (index: number) => () => {
    setHoveredCategoryIndex(index);
  };

  const handleMenuItemMouseLeave = () => {
    setHoveredCategoryIndex(-1);
  };

  return (
    <Menu allowHover={true}>
      <MenuHandler>
        <Button
          leftIcon={buttonIcon}
          backgroundColor={buttonBackgroundColor}
          size='lg'
        >
          {buttonText}
        </Button>
      </MenuHandler>
      <div className='absolute'>
        <div>
          <MenuList>
            {categoryMenuItems?.map((categoryMenuItem, index) => {
              return (
                <div key={categoryMenuItem.id}>
                  <MenuItem
                    className='flex items-start gap-x-3 py-4 w-full'
                    onMouseEnter={handleMenuItemMouseEnter(index)}
                  >
                    <i className='block w-6 h-6'>{categoryMenuItem.icon}</i>
                    <p className='font-primary text-lg font-normal leading-6 text-black'>
                      {categoryMenuItem.label}
                    </p>
                  </MenuItem>
                </div>
              );
            })}
          </MenuList>
          {hoveredCategoryIndex !== -1 && (
            <div
              onMouseEnter={handleMenuItemMouseEnter(hoveredCategoryIndex)}
              onMouseLeave={handleMenuItemMouseLeave}
              className='w-full'
            >
              {categoryMenuItems &&
                categoryMenuItems[hoveredCategoryIndex].subItems && (
                  <CategorySubMenu
                    categorySubMenuItem={
                      categoryMenuItems[hoveredCategoryIndex].subItems ?? []
                    }
                    onCategorySubMenuItemClick={onCategorySubMenuItemClick}
                  />
                )}
            </div>
          )}
        </div>
      </div>
    </Menu>
  );
};
export default CategoryMenu;
