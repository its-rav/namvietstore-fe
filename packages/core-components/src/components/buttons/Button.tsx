import * as React from 'react';
import { ImSpinner2 } from 'react-icons/im';

import clsxm from '@/lib/clsxm';

export type ButtonProps = React.PropsWithChildren<{
  loading?: boolean;
  backgroundColor?: 'primary' | 'secondary';
  disabled?: boolean;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
  onClick?: () => void;
  size?: 'sm' | 'md' | 'lg' | 'fit-content';
}> &
  React.ComponentPropsWithRef<'button'>;

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      children,
      disabled: buttonDisabled,
      loading,
      leftIcon,
      rightIcon,
      backgroundColor,
      size = 'fit-content',
      onClick,
      ...rest
    },
    ref
  ) => {
    const disabled = loading || buttonDisabled;

    return (
      <button
        ref={ref}
        type='button'
        disabled={disabled}
        className={clsxm(
          'flex items-center rounded-xs disabled:cursor-not-allowed',
          size === 'sm' && 'px-3 py-3 w-32',
          size === 'md' && 'px-6 py-4 w-36',
          size === 'lg' && 'px-7 py-5 w-40',
          size === 'fit-content' && 'px-3 py-3 w-fit',
          loading && 'relative opacity-1 disabled:cursor-wait',
          backgroundColor === 'secondary'
            ? 'bg-secondary hover:bg-secondary-800 active:bg-secondary-700'
            : 'bg-primary hover:bg-primary-800 active:bg-primary-700'
        )}
        onClick={onClick}
        {...rest}
      >
        {loading && (
          <div
            className={`absolute left-0 top-0 w-full h-full z-10 bg-white bg-opacity-75 flex items-center justify-center`}
          >
            <ImSpinner2 className='animate-spin' />
          </div>
        )}

        {leftIcon && (
          <div className='md:w-5 md:h-5 sm:w-4 sm:h-4 md:mr-4'>{leftIcon}</div>
        )}

        <div className='font-primary text-white sm:text-xs md:text-md text-justify'>
          {children}
        </div>

        {rightIcon && (
          <div className='md:w-5 md:h-5 sm:w-4 sm:h-4 md:ml-4'>{rightIcon}</div>
        )}
      </button>
    );
  }
);

export default Button;
