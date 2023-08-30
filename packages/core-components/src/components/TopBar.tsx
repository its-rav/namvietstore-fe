import React, { ReactNode } from 'react';

export type TopBarProps = {
  mobileMode?: boolean;
  className?: string;
  brandIcon?: ReactNode;
  phoneIcon?: ReactNode;
  languageButton?: ReactNode;
  linkContact1?: string;
  linkContact2?: string;
  phoneNumber1?: string;
  phoneNumber2?: string;
  nameContact1?: string;
  nameContact2?: string;
};

const TopBar: React.FC<TopBarProps> = ({
  className,
  mobileMode = window.innerWidth < 768,
  brandIcon,
  phoneIcon,
  languageButton,
  linkContact1,
  linkContact2,
  phoneNumber1,
  phoneNumber2,
  nameContact1,
  nameContact2,
}) => {
  return (
    <div
      className={`${className} container sm:bg-white md:bg-primary flex flex-row items-center w-screen`}
    >
      {mobileMode && (
        <div className={'ContactIcon basis-8 shrink-0 ' + 'sm:ms-12 sm:ml-2 '}>
          {brandIcon}
        </div>
      )}
      {!mobileMode && (
        <div className={'ContactIcon basis-8 shrink-0 ' + 'sm:ms-12 sm:ml-2 '}>
          {phoneIcon}
        </div>
      )}

      <div
        className={
          'ContactInfo-1 font-Roboto text-slate-200 border-e-2 font-medium ' +
          'sm:invisible md:visible ' +
          'md:px-4 md:text-sm lg:text-lg ' +
          'hover:text-white ' +
          'hover:drop-shadow-2xl '
        }
      >
        <a href={linkContact1}>
          <span className={'sm:hidden md:contents'}>{phoneNumber1} - </span>
          {nameContact1}
        </a>
      </div>

      <div
        className={
          'ContactInfo-2 font-Roboto text-slate-200 font-medium ' +
          'sm:invisible md:visible ' +
          'md:px-4 md:text-sm lg:text-lg ' +
          'hover:text-white ' +
          'hover:drop-shadow-2xl '
        }
      >
        <a href={linkContact2}>
          <span className={'sm:hidden md:contents '}>{phoneNumber2} - </span>
          {nameContact2}
        </a>
      </div>

      <div className={'LanguageButton scale-[95%] py-3  ' + 'ml-auto md:me-8'}>
        {languageButton}
      </div>
    </div>
  );
};

export default TopBar;
