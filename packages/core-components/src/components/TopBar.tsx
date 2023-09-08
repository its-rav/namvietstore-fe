import React from 'react';

export interface TopBarItemType {
  nameContact: string;
  phoneNumber: string;
}

export interface TopBarProps {
  className: string;
  topBarItems: TopBarItemType[];
  brandIcon: React.ReactNode;
  phoneIcon: React.ReactNode;
  languageButton: React.ReactNode;
}

const TopBar: React.FC<TopBarProps> = ({
  className,
  topBarItems,
  phoneIcon,
  languageButton,
}) => {
  return (
    <div
      className={`${className} container sm:bg-primary flex flex-row items-center w-screen`}
    >
      <div
        className={'basis-8 shrink-0 sm:invisible md:visible md:ms-12 md:ml-2 '}
      >
        {phoneIcon}
      </div>

      <div
        className={
          'font-Roboto text-slate-200 border-e-2 font-medium ' +
          'sm:visible ' +
          'md:px-4 md:text-sm lg:text-lg ' +
          'hover:text-white ' +
          'hover:drop-shadow-2xl '
        }
      >
        <a href=''>
          <span className={'sm:hidden md:contents'}>
            {topBarItems[0].phoneNumber + ' - '}
          </span>
          {topBarItems[0].nameContact}
        </a>
      </div>

      <div
        className={
          'font-Roboto text-slate-200 font-medium ' +
          'sm:visible ' +
          'md:px-4 md:text-sm lg:text-lg ' +
          'hover:text-white ' +
          'hover:drop-shadow-2xl '
        }
      >
        <a href=''>
          <span className={'sm:hidden md:contents '}>
            {topBarItems[1].phoneNumber + ' - '}
          </span>
          {topBarItems[1].nameContact}
        </a>
      </div>

      <div
        className={
          'LanguageButton sm:scale-[80%] md:scale-[95%] py-3 ml-auto md:me-8'
        }
      >
        {languageButton}
      </div>
    </div>
  );
};

export default TopBar;
