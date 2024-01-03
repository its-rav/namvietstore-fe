import { Carousel } from '@material-tailwind/react';
import { ThemeProvider } from '@material-tailwind/react';
import React from 'react';

export type ImageSliderItemType = {
  url: string;
  name: string;
};

type ImageSliderProps = {
  imageSliderItems: ImageSliderItemType[];
};

const ImageSlider: React.FC<ImageSliderProps> = ({ imageSliderItems }) => {
  return (
    <ThemeProvider>
      <Carousel
        autoplay={true}
        loop={true}
        autoplayDelay={2000}
        className='rounded-xl'
      >
        {imageSliderItems.map((imageSliderItem) => (
          <img
            key={imageSliderItem.name}
            src={imageSliderItem.url}
            alt={imageSliderItem.name}
          />
        ))}
      </Carousel>
    </ThemeProvider>
  );
};

export default ImageSlider;
