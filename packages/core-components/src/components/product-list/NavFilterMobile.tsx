import React, { useState } from 'react';

import {
  CaretDownIcon,
  FunnelIcon,
  ListBulletIcon,
  Square2x2Icon,
} from '@/icons';

import { FilterItemType } from './FilterItem';

export type FilterGroupType = {
  sortItems: FilterItemType;
  filterItems: FilterItemType[];
};

type NavFilterMobileProps = {
  sortTitle: string;
  filterTitle: string;
  onClickOpenSort?: (isOpenSort: boolean) => void;
  onChangePageLayout?: (isList: boolean) => void;
  onClickOpenFilter?: (isOpenSort: boolean) => void;
};

const NavFilterMobile: React.FC<NavFilterMobileProps> = ({
  sortTitle,
  filterTitle,
  onClickOpenSort,
  onChangePageLayout,
  onClickOpenFilter,
}) => {
  const [isListLayout, setListLayout] = useState(false);
  const [isOpenSort, setIsOpenSort] = useState(false);

  const changeOpenSort = () => {
    setIsOpenSort(!isOpenSort);
    onClickOpenSort?.(!isOpenSort);
  };
  const changePageLayout = () => {
    setListLayout(!isListLayout);
    onChangePageLayout?.(!isListLayout);
  };

  return (
    <div className='flex justify-between py-5 font-medium text-sm/4 border-b'>
      <button className='flex items-center px-3' onClick={changeOpenSort}>
        <p className='pr-4'>{sortTitle}</p>
        <CaretDownIcon className='w-[10px] h-[6px]' />
      </button>
      <div className='flex divide-x'>
        <button className='px-3' onClick={changePageLayout}>
          {isListLayout ? (
            <ListBulletIcon className='w-5 h-5' />
          ) : (
            <Square2x2Icon className='w-5 h-5' />
          )}
        </button>
        <button
          className='flex items-center px-3'
          onClick={() => onClickOpenFilter?.(true)}
        >
          <p className='pr-5'>{filterTitle}</p>
          <FunnelIcon className='w-5 h-5' />
        </button>
      </div>
    </div>
  );
};
export default NavFilterMobile;
