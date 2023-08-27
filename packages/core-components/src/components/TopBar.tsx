import React, { ReactNode } from 'react';

export type TopBarProps = {
  className?: string;
  contactIcon?: ReactNode;
  languageButton?: ReactNode;
  linkContact1?: string;
  linkContact2?: string;
};

const TopBar: React.FC<TopBarProps> = ({
  className,
  contactIcon,
  languageButton,
  linkContact1,
  linkContact2,
}) => {
  return (
    <div
      className={`${className} container bg-primary flex flex-row items-center w-screen`}
    >
      <div
        className={
          'ContactIcon basis-8 shrink-0' +
          'visible sm:invisible ' +
          'md:visible  md:ms-12 md:ml-2 '
        }
      >
        {contactIcon}
      </div>
      <div
        className={
          'ContactInfo-1 font-Roboto text-slate-200 border-e-2 font-medium ' +
          'sm:px-4 sm:text-xs' +
          'md:text-sm lg:text-lg ' +
          'hover:text-white ' +
          'hover:drop-shadow-2xl '
        }
      >
        <a href={linkContact1}>
          <span className={'sm:hidden md:contents'}>+91 9876543210 - </span>Mr.
          Duong
        </a>
      </div>
      <div
        className={
          'ContactInfo-2 font-Roboto text-slate-200 font-medium ' +
          'sm:px-4 sm:text-xs' +
          'md:text-sm lg:text-lg ' +
          'hover:text-white ' +
          'hover:drop-shadow-2xl '
        }
      >
        <a href={linkContact2}>
          <span className={'sm:hidden md:contents '}>+91 9876543210 - </span>Ms.
          Huynh
        </a>
      </div>
      <div className={'LanguageButon scale-[95%] py-3  ' + 'ml-auto md:me-8'}>
        {languageButton}
      </div>
    </div>
  );
};

export default TopBar;
