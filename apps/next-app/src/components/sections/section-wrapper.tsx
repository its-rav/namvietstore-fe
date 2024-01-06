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
      className={`section-wrapper full-width flex flex-col items-center
      ${py === 'small' && 'py-6'}
      ${py === 'medium' && 'py-10'}
      ${py === 'large' && 'py-28'}
      ${className}
      `}
      style={{
        background,
        backgroundImage: `url(${backgroundImage?.src})`,
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
      }}
    >
      <div
        className={`section-wrapper flex flex-col items-center
        ${isFullWidth ? 'w-full' : 'w-full max-w-7xl mx-auto'}`}
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
