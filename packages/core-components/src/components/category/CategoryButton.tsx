import React from 'react';

export type CategoryMenuButtonProps = {
  handleClick?: () => void;
  handleMouseEnter?: () => void;
  handleMouseLeave?: () => void;
  icon: React.ReactNode;
  title: string;
};
const CategoryButton: React.FC<CategoryMenuButtonProps> = ({
  title,
  icon,
  handleClick,
  handleMouseEnter,
  handleMouseLeave,
}) => {
  return (
    <div className={'sm:invisible md:visible'}>
      <button
        className={
          'flex items-center justify-center gap-2.5 bg-secondary text-white lg:w-56 lg:py-2.5 md:w-52 md:py-2.5 ' +
          'transition ease-in hover:scale-105 hover:-translate-y-1 duration-300 hover:drop-shadow-2xl'
        }
        onClick={handleClick}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <div className={'lg:w-5 md:w-4 '}>{icon}</div>
        <span className={'lg:text-md md:text-md'}>{title}</span>
      </button>
    </div>
  );
};

export default CategoryButton;
