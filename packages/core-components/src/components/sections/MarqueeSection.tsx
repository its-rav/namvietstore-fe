import React from 'react';
import Marquee from 'react-fast-marquee';

export type MarqueeContentType = {
  id: string;
  url: string;
  alt: string;
};

type MarqueeSectionProps = {
  content?: MarqueeContentType[];
  direction?: 'left' | 'right' | 'up' | 'down';
  speed?: number;
  autoFill?: boolean;
  children?: React.ReactNode;
  pauseOnClick?: boolean;
  pauseOnHover?: boolean;
  gradient?: boolean;
  gradientWidth?: number;
};

const MarqueeSection: React.FC<MarqueeSectionProps> = ({
  content,
  direction,
  speed,
  autoFill,
  pauseOnClick,
  pauseOnHover,
  gradient,
  gradientWidth,
  children,
}) => {
  return (
    <Marquee
      direction={direction}
      speed={speed}
      autoFill={autoFill}
      pauseOnClick={pauseOnClick}
      pauseOnHover={pauseOnHover}
      gradient={gradient}
      gradientWidth={gradientWidth}
    >
      {content &&
        content.map((item) => (
          <div
            className='flex items-center justify-center text-center mx-6 md:w-44 md:h-16 sm:w-36 sm:h-12'
            key={item.id}
          >
            <img src={item.url} alt={item.alt} className='w-full h-full' />
          </div>
        ))}
      {children}
    </Marquee>
  );
};

export default MarqueeSection;
