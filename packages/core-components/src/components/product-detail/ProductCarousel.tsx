import React, { useRef, useState } from 'react';
import ImageGallery, { ReactImageGalleryItem } from 'react-image-gallery';

import 'react-image-gallery/styles/css/image-gallery.css';

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
      <div className=''>
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
              className='image-gallery-icon image-gallery-left-nav'
              aria-label='Previous Slide'
              style={{ padding: '10px', backgroundColor: '#4e4e4e' }}
            >
              <svg
                xmlns='http://www.w3.org/2000/svg'
                fill='none'
                viewBox='0 0 24 24'
                strokeWidth='1.5'
                stroke='currentColor'
                className='w-6 h-6'
              >
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  d='M6.75 15.75 3 12m0 0 3.75-3.75M3 12h18'
                />
              </svg>
            </button>
          )}
          renderRightNav={(onClick, disabled) => (
            <button
              onClick={onClick}
              disabled={disabled}
              type='button'
              className='image-gallery-icon image-gallery-right-nav'
              aria-label='Next Slide'
              style={{ padding: '10px', backgroundColor: '#4e4e4e' }}
            >
              <svg
                xmlns='http://www.w3.org/2000/svg'
                fill='none'
                viewBox='0 0 24 24'
                strokeWidth='1.5'
                stroke='currentColor'
                className='w-6 h-6'
              >
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  d='M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3'
                />
              </svg>
            </button>
          )}
        />
      </div>
    );
  } else {
    return <></>;
  }
};

export default ProductCarousel;
