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
    <div className='flex flex-wrap h-full w-full'>
      {categorySubMenuItem.map((categorySubMenuItem) => (
        <div
          className='flex flex-col items-start gap-y-2 px-2 w-fit'
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
  const [hoveredCategoryId, setHoveredCategoryId] = React.useState<
    string | null
  >(null);

  const handleMenuItemMouseEnter = (categoryId: string) => () => {
    setHoveredCategoryId(categoryId);
  };

  const handleMenuItemMouseLeave = () => {
    setHoveredCategoryId(null);
  };

  return (
    <div className='relative w-full'>
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

        <div>
          <MenuList>
            {categoryMenuItems?.map((categoryMenuItem) => {
              return (
                <div key={categoryMenuItem.id}>
                  <MenuItem
                    className='flex items-start gap-x-3 py-4 w-full'
                    onMouseEnter={handleMenuItemMouseEnter(categoryMenuItem.id)}
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
          {hoveredCategoryId &&
            categoryMenuItems?.find((item) => item.id === hoveredCategoryId)
              ?.subItems && (
              <div
                onMouseEnter={handleMenuItemMouseEnter(hoveredCategoryId)}
                onMouseLeave={handleMenuItemMouseLeave}
                className='absolute left-72 top-14 w-5/6 h-[500px] z-50 border-solid border-2 border-gray-200 rounded-sm px-4 py-4 bg-white'
              >
                <CategorySubMenu
                  categorySubMenuItem={
                    categoryMenuItems.find(
                      (item) => item.id === hoveredCategoryId
                    )?.subItems ?? []
                  }
                  onCategorySubMenuItemClick={onCategorySubMenuItemClick}
                />
              </div>
            )}
        </div>
      </Menu>
    </div>
  );
};
export default CategoryMenu;
