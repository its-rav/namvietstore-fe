import React from 'react';

type LanguageSelectButtonMobileProps = {
  buttonIcon: React.ReactNode;
  rightIcon: React.ReactNode;
  onClick?: () => void;
};

const LanguageSelectButtonMobile: React.FC<LanguageSelectButtonMobileProps> = ({
  onClick,
  buttonIcon,
  rightIcon,
}) => {
  return (
    <div className='flex items-center justify-center h-9 w-24'>
      <button
        className='flex items-center justify-evenly bg-gray-100 active:bg-gray-200 w-11/12 h-5/6 rounded-lg pl-4'
        onClick={onClick}
      >
        <div className='w-8'>{buttonIcon}</div>
        <div className='h-full w-1 bg-white'></div>
        <div className='w-6 h-6'>{rightIcon}</div>
      </button>
    </div>
  );
};

export default LanguageSelectButtonMobile;
