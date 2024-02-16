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
  imageSliderItems: ImageSliderItemType[];
  imageSliderAutoPlay?: boolean;
  imageSliderLoop?: boolean;
  imageSliderAutoplayDelay?: number;
  imageSliderHeight?: 'sm' | 'md' | 'lg';
};

const ImageSlider: React.FC<ImageSliderProps> = ({
  imageSliderItems,
  imageSliderAutoPlay = true,
  imageSliderLoop = true,
  imageSliderAutoplayDelay = 5000,
  imageSliderHeight = 'md',
}) => {
  return (
    <ThemeProvider>
      <div
        className={clsxm(
          'w-full',
          imageSliderHeight === 'lg' && 'h-96',
          imageSliderHeight === 'md' && 'h-80',
          imageSliderHeight === 'sm' && 'h-40'
        )}
      >
        <Carousel
          autoplay={imageSliderAutoPlay}
          loop={imageSliderLoop}
          autoplayDelay={imageSliderAutoplayDelay}
          navigation={({ setActiveIndex, activeIndex, length }) => (
            <div className='absolute bottom-4 left-1/2 transform -translate-x-1/2 flex gap-2'>
              {Array.from({ length }).map((_, i) => (
                <span
                  key={i}
                  className={`block h-3 w-3 cursor-pointer rounded-full transition-all ${
                    activeIndex === i ? 'bg-gray-700' : 'bg-gray-100'
                  }`}
                  onClick={() => setActiveIndex(i)}
                />
              ))}
            </div>
          )}
        >
          {imageSliderItems.map((imageSliderItem) => (
            <a key={imageSliderItem.name} href={imageSliderItem.url}>
              <img
                src={imageSliderItem.src}
                alt={imageSliderItem.name}
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
