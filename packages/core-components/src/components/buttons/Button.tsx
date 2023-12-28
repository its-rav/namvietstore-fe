import * as React from 'react';
import { ImSpinner2 } from 'react-icons/im';

import clsxm from '@/lib/clsxm';

export type ButtonProps = {
  isLoading?: boolean;
  backgroundColor?: 'primary' | 'secondary';
  buttonType?: string;
  isUpperCase?: boolean;
  isBold?: boolean;
  disabled?: boolean;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
  onClick?: () => void;
} & React.ComponentPropsWithRef<'button'>;

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      children,
      disabled: buttonDisabled,
      isLoading,
      leftIcon,
      rightIcon,
      backgroundColor,
      isUpperCase,
      isBold,
      buttonType,
      onClick,
      ...rest
    },
    ref
  ) => {
    const disabled = isLoading || buttonDisabled;

    return (
      <button
        ref={ref}
        type='button'
        disabled={disabled}
        className={clsxm(
          'flex items-center rounded-xs w-fit font-primary text-white sm:text-xs md:text-md text-justify disabled:cursor-not-allowed',
          isLoading &&
            'relative text-transparent transition-none hover:text-transparent disabled:cursor-wait',
          buttonType === 'category' ? 'md:px-8 md:py-4' : 'md:px-3 md:py-3',
          backgroundColor === 'secondary'
            ? 'bg-secondary hover:bg-secondary-800 active:bg-secondary-700'
            : 'bg-primary hover:bg-primary-800 active:bg-primary-700',
          isUpperCase && 'uppercase',
          isBold
            ? 'md:font-medium sm:font-normal'
            : 'md:font-normal sm:font-light'
        )}
        onClick={onClick}
        {...rest}
      >
        {isLoading && (
          <div
            className={`absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-white`}
          >
            <ImSpinner2 className='animate-spin' />
          </div>
        )}
        {leftIcon && (
          <div className='md:w-5 md:5 sm:w-4 sm:h-4 md:mr-4'>{leftIcon}</div>
        )}
        <div>{children}</div>
        {rightIcon && (
          <div className='md:w-5 md:h-5 sm:w-4 sm:h-4 md:ml-4'>{rightIcon}</div>
        )}
      </button>
    );
  }
);

export default Button;
