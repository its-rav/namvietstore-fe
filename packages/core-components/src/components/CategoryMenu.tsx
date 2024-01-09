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
};

export type CategoryMenuItemType = {
  id: string;
  icon: React.ReactNode;
  label: string;
};

const CategorySubMenu: React.FC = () => {
  return <div className='w-full bg-blue-gray-500'>Testtttttttt</div>;
};

const CategoryMenu: React.FC<CategoryMenuProps> = ({
  buttonIcon,
  buttonText,
  buttonBackgroundColor = 'secondary',
  categoryMenuItems,
}) => {
  const handleOnMouseEnter = () => {
    <CategorySubMenu />;
  };

  return (
    <Menu>
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
        {categoryMenuItems?.map((categoryMenuItem) => (
          <div key={categoryMenuItem.id} onMouseEnter={handleOnMouseEnter}>
            <MenuItem className='flex items-start gap-x-3'>
              <i className='block w-6 h-6'>{categoryMenuItem.icon}</i>
              <p className='font-primary text-lg font-normal leading-6 text-black'>
                {categoryMenuItem.label}
              </p>
            </MenuItem>
          </div>
        ))}
      </MenuList>
    </Menu>
  );
};

export default CategoryMenu;
