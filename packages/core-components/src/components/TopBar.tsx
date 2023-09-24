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
            'flex justify-center items-center'
          }
      >
        {topBarItems.map((item, index) => (
            <div
                className={
                    'font-Roboto text-white font-medium ' +
                    'px-4 text-sm lg:text-lg ' +
                    'hover:drop-shadow-2xl ' +
                    ((index == 0)?'border-r-2 border-white border-opacity-50':'')
                }
                key={index}
            >
              <a href=''>
              <span className={'hidden md:inline'}>
                {item.phoneNumber + ' - '}
              </span>
                {item.nameContact}
              </a>
            </div>
        ))}
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
