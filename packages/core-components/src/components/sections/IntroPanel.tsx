import React from 'react';

import { Button } from '@/components/buttons';

import { WhitePlusIcon } from '@/icons';

export type IntroPanelItemType = {
  title: string;
  establisedTime: string;
  description: string;
};

type IntroPanelProps = {
  introPanelItem: IntroPanelItemType;
  buttonText: string;
  onClick?: () => void;
};

const IntroPanel: React.FC<IntroPanelProps> = ({
  introPanelItem,
  buttonText,
  onClick,
}) => {
  return (
    <div>
      <h2 className='font-primary md:text-2xl sm:text-xl font-bold text-primary leading-normal'>
        {introPanelItem.title}
      </h2>
      <p className='font-primary md:text-lg sm:text-base font-bold leading-normal my-6 border-l-2 border-primary px-3'>
        {introPanelItem.establisedTime}
      </p>
      <p className='md:w-1/3 sm:w-full font-primary text-base md:text-base sm:text-sm leading-normal text-justify mb-8'>
        {introPanelItem.description}
      </p>
      <Button
        onClick={onClick}
        rightIcon={<WhitePlusIcon />}
        children={buttonText}
        size='sm'
      />
    </div>
  );
};

export default IntroPanel;
