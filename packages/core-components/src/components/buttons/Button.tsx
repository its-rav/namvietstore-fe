import * as React from 'react';
import { ImSpinner2 } from 'react-icons/im';

import clsxm from '@/lib/clsxm';

export type ButtonProps = {
  isLoading?: boolean;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
  onClick?: () => void;
} & React.ComponentPropsWithRef<'button'>;

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      children,
      className,
      disabled: buttonDisabled,
      isLoading,
      leftIcon,
      rightIcon,
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
          'flex items-center justify-evenly rounded-xs font-primary bg-primary hover:bg-primary-700 active:bg-primary-800 sm:font-light text-white sm:text-xs md:text-md md:h-10 md:w-28 sm:h-8 sm:w-20 text-justify md:font-normal disabled:cursor-not-allowed',
          isLoading &&
            'relative text-transparent transition-none hover:text-transparent disabled:cursor-wait',
          className
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
        {leftIcon && <div>{leftIcon}</div>}
        <div>{children}</div>
        {rightIcon && <div>{rightIcon}</div>}
      </button>
    );
  }
);

export default Button;
