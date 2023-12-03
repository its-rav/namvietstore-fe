import React, { PropsWithChildren } from 'react';

import './section-wrapper.css';
export type SectionWrapperProps = PropsWithChildren<{
  background?: string;
  isFullWidth?: boolean;
  py: 'small' | 'medium' | 'large';
}>;

export default function SectionWrapper({
  isFullWidth = false,
  background,
  children,
  py = 'medium',
}: SectionWrapperProps) {
  return (
    <section
      className={`section-wrapper full-width 
      py-10
      ${py === 'small' && 'py-1'}
      ${py === 'medium' && 'py-5'}
      ${py === 'large' && 'py-10'}
      
      `}
      style={{ background }}
    >
      <div
        className={`section-wrapper 
          ${isFullWidth ? 'w-full' : 'max-w-7xl mx-auto'}
        `}
      >
        {children}
      </div>
    </section>
  );
}
