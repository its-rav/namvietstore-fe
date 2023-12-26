import React from 'react';

import { PhoneBox } from '@/icons';

export type TopBarContact = {
  name: string;
  phoneNumber: string;
};

export interface TopBarProps {
  contact1: TopBarContact;
  contact2: TopBarContact;
  languageButton: React.ReactNode;
}

const TopBar: React.FC<TopBarProps> = ({
  contact1,
  contact2,
  languageButton,
}) => {
  return (
    <div
      className={`w-full h-[60px] sm:bg-primary flex flex-row items-center w-screen`}
    >
      <div className={'flex justify-center items-center gap-1'}>
        <div className='basis-8 shrink-0 sm:invisible md:visible md:ms-12 md:ml-2'>
          <PhoneBox />
        </div>
        <div className='ml-3 h-full flex font-Roboto text-white font-medium lg:text-md text-sm gap-2 whitespace-nowrap'>
          <a
            className='hover:drop-shadow-2xl'
            href={`tel:${contact1.phoneNumber}`}
          >
            {contact1.phoneNumber}
          </a>
          <span>-</span>
          <span>{contact1.name}</span>
          {/* vertical divider */}
          <div className='mx-4 w-[1px] bg-white' />
          <a
            className='hover:drop-shadow-2xl'
            href={`tel:${contact1.phoneNumber}`}
          >
            {contact2.phoneNumber}
          </a>
          <span>-</span>
          <span>{contact2.name}</span>
        </div>
      </div>

      <div className={'py-3 ml-auto md:me-12'}>{languageButton}</div>
    </div>
  );
};

export default TopBar;
