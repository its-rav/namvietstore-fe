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
    <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4'>
      {categorySubMenuItem.map((categorySubMenuItem) => (
        <div
          className='flex flex-col items-start gap-y-2 w-fit'
          key={categorySubMenuItem.title}
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
  const [hoveredCategoryId, setHoveredCategoryId] = React.useState<
    string | null
  >(null);

  const handleMenuItemMouseEnter = (categoryId: string) => {
    console.log('Mouse Enter:', categoryId);
    setHoveredCategoryId(categoryId);
  };

  const handleMenuItemMouseLeave = () => {
    console.log('Mouse Leave');
    setHoveredCategoryId(null);
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
      <MenuList>
        {categoryMenuItems?.map((categoryMenuItem) => {
          return (
            <div
              key={categoryMenuItem.id}
              onMouseEnter={() => handleMenuItemMouseEnter(categoryMenuItem.id)}
              onMouseLeave={handleMenuItemMouseLeave}
            >
              <MenuItem className='flex items-start gap-x-3 py-4 w-full'>
                <i className='block w-6 h-6'>{categoryMenuItem.icon}</i>
                <p className='font-primary text-lg font-normal leading-6 text-black'>
                  {categoryMenuItem.label}
                </p>
              </MenuItem>
              {hoveredCategoryId === categoryMenuItem.id && (
                <div className='w-full font-primary text-lg'>
                  Sample Text on Hover
                </div>
              )}
            </div>
          );
        })}
      </MenuList>
    </Menu>
  );
};
export default CategoryMenu;
