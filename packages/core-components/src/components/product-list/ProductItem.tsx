import React from 'react';

export type ProductItemType = {
  className?: string;
  productId: string;
  productName?: string;
  previewImage?: string;
  description?: string;
  specifications?: string;
};

type ProductItemProps = {
  productItem: ProductItemType;
  showLayoutList?: boolean;
  onClick?: (id: string) => void;
};

const ProductItem: React.FC<ProductItemProps> = ({
  productItem,
  showLayoutList = false,
  onClick,
}) => {
  return showLayoutList ? (
    <div
      id={productItem.productId}
      className={`grid grid-cols-12 font-primary gap-3 p-[10px] md:p-7 cursor-pointer bg-white hover:drop-shadow-md ${productItem.className}`}
      onClick={() => {
        onClick?.(productItem.productId);
      }}
    >
      <img
        src={productItem.previewImage}
        alt={productItem.productName}
        className='col-span-5 rounder w-full object-cover h-[84px] md:h-[100px]'
      />
      <div className='col-span-7 w-full'>
        <h2 className='line-clamp-1 text-base/5 md:text-lg/6 font-bold'>
          {productItem.productName}
        </h2>
        <p className='h-[32px] md:h-[40px] line-clamp-2 font-normal text-sm/4 md:text-base/5 my-[10px]'>
          {productItem.description}
        </p>
        <p className='line-clamp-1 font-normal text-xs/3 md:text-sm/4 text-[#575757]'>
          {productItem.specifications}
        </p>
      </div>
    </div>
  ) : (
    <div
      id={productItem.productId}
      className={`grid grid-cols-12 font-primary gap-3 p-4 md:p-7 cursor-pointer bg-white hover:drop-shadow-md ${productItem.className}`}
      onClick={() => {
        onClick?.(productItem.productId);
      }}
    >
      <img
        src={productItem.previewImage}
        alt={productItem.productName}
        className='col-span-12 rounder w-full object-cover md:h-52 sm:h-36 h-48'
      />
      <div className='col-span-12 w-full'>
        <h2 className='line-clamp-1 text-base/5 md:text-lg/6 font-bold'>
          {productItem.productName}
        </h2>
        <p className='h-[32px] md:h-[40px] line-clamp-2 font-normal text-sm/4 md:text-base/5 mt-2 mb-3'>
          {productItem.description}
        </p>
        <p className='line-clamp-1 font-normal text-xs/3 md:text-sm/4 text-[#575757]'>
          {productItem.specifications}
        </p>
      </div>
    </div>
  );
};

export default ProductItem;
