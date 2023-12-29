import React, { useRef, useState } from 'react';
import ImageGallery, { ReactImageGalleryItem } from 'react-image-gallery';

import 'react-image-gallery/styles/css/image-gallery.css';

import { ArrowLongLeftIcon, ArrowLongRightIcon } from '@/icons';

export type ProductImgItemType = {
  src: string;
  alt?: string;
};

type ProductCarouselProps = {
  productImgItems: ProductImgItemType[];
};

const ProductCarousel: React.FC<ProductCarouselProps> = ({
  productImgItems,
}) => {
  const slideShowRef = useRef<any>();
  const [isFullScreen, setIsFullScreen] = useState<boolean>(false);
  if (
    productImgItems &&
    productImgItems.filter((item) => item.src).length > 0
  ) {
    const images: ReactImageGalleryItem[] = productImgItems
      ?.filter((item) => item.src)
      .map((item, index) => {
        return {
          key: `image-${index}`,
          original: `${item.src}`,
          thumbnail: `${item.src}`,
          //#575757 Onyx color not found
          originalClass: `${
            isFullScreen ? 'px-0 md:px-[70px]' : ''
          } border-0 md:border-b-[0.5px] border-[#575757] border-solid pb-[14.5px]`,
          thumbnailClass: '!border-solid mr-[8px] mt-[4.5px] !w-[105px]',
          renderThumbInner: () => {
            return (
              <span className='image-gallery-thumbnail-inner'>
                <img
                  className='image-gallery-thumbnail-image h-[80px] object-cover object-center'
                  src={item.src}
                  alt={item.alt}
                />
              </span>
            );
          },
        };
      });

    return (
      <ImageGallery
        ref={slideShowRef}
        items={images}
        slideOnThumbnailOver={true}
        showIndex={true}
        useBrowserFullscreen={false}
        thumbnailPosition={isFullScreen ? 'right' : 'bottom'}
        showPlayButton={isFullScreen}
        showNav={isFullScreen}
        onClick={() => {
          slideShowRef.current.toggleFullScreen();
        }}
        onScreenChange={() => {
          !isFullScreen ? setIsFullScreen(true) : setIsFullScreen(false);
        }}
        renderLeftNav={(onClick, disabled) => (
          <button
            onClick={onClick}
            disabled={disabled}
            type='button'
            // #4e4e4e not found
            className='image-gallery-icon p-[10px] !bg-[#4e4e4e] -translate-y-1/2 top-1/2 left-0'
            aria-label='Previous Slide'
          >
            <ArrowLongLeftIcon />
          </button>
        )}
        renderRightNav={(onClick, disabled) => (
          <button
            onClick={onClick}
            disabled={disabled}
            type='button'
            // #4e4e4e not found
            className='image-gallery-icon p-[10px] !bg-[#4e4e4e] -translate-y-1/2 top-1/2 right-0'
            aria-label='Next Slide'
          >
            <ArrowLongRightIcon />
          </button>
        )}
      />
    );
  } else {
    return <></>;
  }
};

export default ProductCarousel;
