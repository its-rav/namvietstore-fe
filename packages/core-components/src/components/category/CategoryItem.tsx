import React from 'react';

export type ItemProps = {
  icon?: React.ReactNode;
  link?: string;
  children: string;
  boldTitle?: boolean;
  small?: boolean;
  handleClick?: () => void;
  handleMouseEnter?: () => void;
  handleMouseLeave?: () => void;
};

const CategoryItem: React.FC<ItemProps> = ({
  icon,
  link,
  children,
  boldTitle,
  small,
  handleClick,
  handleMouseEnter,
  handleMouseLeave,
}) => {
  return (
    <button
      className={'sm:invisible md:visible'}
      onClick={handleClick}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {!small && (
        <div
          className={
            'flex items-center justify-left gap-2.5 bg-white text-white lg:w-56 lg:py-2.5 md:ps-5 md:w-52 md:py-2.5 ' +
            'mt-1 hover:bg-secondary-50 transition ease-in-out hover:scale-105 hover:font-bold hover:shadow-md'
          }
        >
          <div className={'lg:w-5 md:w-4'}>{icon}</div>
          <a
            href={link}
            className={`text-black md:text-sm ${boldTitle ? 'font-bold' : ''}`}
          >
            {children}
          </a>
        </div>
      )}
      {small && (
        <div
          className={
            'flex items-center justify-left gap-2.5 text-left bg-white text-white max-w-9 px-4 '
          }
        >
          {icon && <div className={'md:w-3'}>{icon}</div>}
          <a
            href={link}
            className={`text-black ${
              boldTitle ? 'font-bold md:text-sm' : 'md:text-xs'
            } hover:font-bold`}
          >
            {children}
          </a>
        </div>
      )}
    </button>
  );
};

export default CategoryItem;
