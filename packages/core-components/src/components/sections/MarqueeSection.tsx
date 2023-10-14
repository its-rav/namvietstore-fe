import React from 'react';
import Marquee from 'react-fast-marquee';

export type MarqueeItemType = {
  id: string;
  url: string;
  alt: string;
};

type MarqueeSectionProps = {
  marqueeItems: MarqueeItemType[];
  direction?: 'left' | 'right' | 'up' | 'down';
  speed?: number;
  autoFill?: boolean;
  pauseOnClick?: boolean;
  pauseOnHover?: boolean;
  gradient?: boolean;
  gradientWidth?: number;
};

const MarqueeSection: React.FC<MarqueeSectionProps> = ({
  marqueeItems,
  direction,
  speed,
  autoFill,
  pauseOnClick,
  pauseOnHover,
  gradient,
  gradientWidth,
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
      {marqueeItems &&
        marqueeItems.map((item) => (
          <div
            className='flex items-center justify-center text-center mx-6 md:w-44 md:h-16 sm:w-28 sm:h-10'
            key={item.id}
          >
            <img
              src={item.url}
              alt={item.alt}
              className='w-full h-full object-cover'
            />
          </div>
        ))}
    </Marquee>
  );
};

export default MarqueeSection;
