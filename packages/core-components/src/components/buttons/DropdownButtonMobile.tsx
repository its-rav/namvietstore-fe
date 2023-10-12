import React, { useState } from 'react';

import {
  type DropdownButtonProps,
  Option,
} from '@/components/buttons/DropdownButton';

type DropdownButtonMobileProps = DropdownButtonProps & {
  buttonIcon: React.ReactNode;
};

const DropdownButtonMobile: React.FC<DropdownButtonMobileProps> = ({
  selected,
  options,
  buttonIcon,
}) => {
  const defaultSelectedOption = options.find(
    (option) => option.key === selected
  );

  const [selectedOption, setSelectedOption] = useState<Option>(
    defaultSelectedOption ?? options[0]
  );

  const icon = selectedOption.icon;

  const handleOnClick = () => {
    setSelectedOption(selectedOption === options[0] ? options[1] : options[0]);
  };

  return (
    <div className='flex items-center justify-center h-9 w-24'>
      <button
        className='flex items-center justify-evenly bg-gray-100 active:bg-gray-200 w-11/12 h-5/6 rounded-lg pl-4'
        onClick={handleOnClick}
      >
        <div className='w-8'>{icon}</div>
        <div className='h-full w-1 bg-white'></div>
        <div className='w-6 h-6'>{buttonIcon}</div>
      </button>
    </div>
  );
};

export default DropdownButtonMobile;
