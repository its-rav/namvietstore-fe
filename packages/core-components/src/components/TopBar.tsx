import React from 'react';

export interface TopBarItemType {
  className: string;
  linkContact1: string;
  linkContact2: string;
  phoneNumber1: string;
  phoneNumber2: string;
  nameContact1: string;
  nameContact2: string;
}

export interface TopBarProps {
  topBarItems: TopBarItemType[];
  brandIcon: React.ReactNode;
  phoneIcon: React.ReactNode;
  languageButton: React.ReactNode;
}

const TopBar: React.FC<TopBarProps> = ({
  topBarItems,
  phoneIcon,
  languageButton,
}) => {
  const itemsProps = topBarItems[0];
  return (
    <div
      className={`${itemsProps.className} container sm:bg-white md:bg-primary flex flex-row items-center w-screen`}
    >
      <div className={'ContactIcon basis-8 shrink-0 ' + 'sm:ms-12 sm:ml-2 '}>
        {phoneIcon}
      </div>

      <div
        className={
          'font-Roboto text-slate-200 border-e-2 font-medium ' +
          'sm:invisible md:visible ' +
          'md:px-4 md:text-sm lg:text-lg ' +
          'hover:text-white ' +
          'hover:drop-shadow-2xl '
        }
      >
        <a href={itemsProps.linkContact1}>
          <span className={'sm:hidden md:contents'}>
            {itemsProps.phoneNumber1} -{' '}
          </span>
          {itemsProps.nameContact1}
        </a>
      </div>

      <div
        className={
          'font-Roboto text-slate-200 font-medium ' +
          'sm:invisible md:visible ' +
          'md:px-4 md:text-sm lg:text-lg ' +
          'hover:text-white ' +
          'hover:drop-shadow-2xl '
        }
      >
        <a href={itemsProps.linkContact2}>
          <span className={'sm:hidden md:contents '}>
            {itemsProps.phoneNumber2} -{' '}
          </span>
          {itemsProps.nameContact2}
        </a>
      </div>

      <div className={'LanguageButton scale-[95%] py-3 ml-auto md:me-8'}>
        {languageButton}
      </div>
    </div>
  );
};

export default TopBar;
