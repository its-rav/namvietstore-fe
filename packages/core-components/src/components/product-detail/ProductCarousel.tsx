import React from 'react';
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
          originalClass:
            'border-0 md:border-b-[0.5px] border-[#575757] border-solid pb-[14.5px]',
          thumbnailClass:
            '!border-[1px] md:!border-[0.5px] !border[#F2F2F2] md:!border-[#575757] !border-solid mr-[8px] mt-[4.5px] !w-[105px]',
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
          items={images}
          showPlayButton={false}
          showFullscreenButton={false}
          showNav={false}
        />
      </div>
    );
  } else {
    return <></>;
  }
};

export default ProductCarousel;
