import { Carousel } from '@material-tailwind/react';
import { ThemeProvider } from '@material-tailwind/react';
import React from 'react';

import clsxm from '@/lib/clsxm';

export type ImageSliderItemType = {
  src: string;
  name: string;
  url: string;
};

type ImageSliderProps = {
  items: ImageSliderItemType[];
  autoPlay?: boolean;
  loop?: boolean;
  autoPlayDelay?: number;
  height?: 'sm' | 'md' | 'lg';
};

const ImageSlider: React.FC<ImageSliderProps> = ({
  items,
  autoPlay = true,
  loop = true,
  autoPlayDelay = 5000,
  height = 'md',
}) => {
  return (
    <ThemeProvider>
      <div
        className={clsxm(
          'w-full',
          height === 'lg' && 'h-96',
          height === 'md' && 'h-80',
          height === 'sm' && 'h-40'
        )}
      >
        <Carousel autoplay={autoPlay} loop={loop} autoplayDelay={autoPlayDelay}>
          {items.map((item) => (
            <a key={item.name} href={item.url}>
              <img
                src={item.src}
                alt={item.name}
                className='h-full w-full object-cover'
              />
            </a>
          ))}
        </Carousel>
      </div>
    </ThemeProvider>
  );
};

export default ImageSlider;
