import clsx from 'clsx';
import { StaticImageData } from 'next/image';
import React, { PropsWithChildren } from 'react';

import './section-wrapper.css';
export type SectionWrapperProps = PropsWithChildren<{
  background?: string;
  backgroundImage?: StaticImageData;
  isFullWidth?: boolean;
  py: 'small' | 'medium' | 'large';
  sectionTitle?: string;
  sectionIcon?: React.ReactNode;
  className?: string;
}>;

export default function SectionWrapper({
  isFullWidth = false,
  background,
  backgroundImage,
  children,
  py = 'medium',
  sectionTitle,
  sectionIcon,
  className,
}: SectionWrapperProps) {
  return (
    <section
      className={clsx(
        py === 'small' && 'md:py-6',
        py === 'medium' && 'md:py-10',
        py === 'large' && 'md:py-28',
        'section-wrapper full-width flex flex-col items-center',
        className
      )}
      style={
        background
          ? {
              background,
              backgroundImage: `url(${backgroundImage?.src})`,
              backgroundSize: 'cover',
              backgroundRepeat: 'no-repeat',
            }
          : {}
      }
    >
      <div
        className={clsx(
          isFullWidth ? 'w-full' : 'w-full max-w-7xl mx-auto',
          'section-wrapper flex flex-col items-center'
        )}
      >
        <div className='flex flex-col items-center'>
          {sectionIcon && <div className='w-14 h-14'>{sectionIcon}</div>}
          {sectionTitle && (
            <h2 className='text-primary text-2xl font-bold'>{sectionTitle}</h2>
          )}
        </div>
        {children}
      </div>
    </section>
  );
}
