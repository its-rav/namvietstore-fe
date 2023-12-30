import classNames from 'classnames';
import React from 'react';

export type ProductItemType = {
  productId: string;
  productName?: string;
  previewImage?: string;
  description?: string;
  specifications?: string;
};

type ProductItemProps = {
  productItem: ProductItemType;
  classItem?: string;
  classImg?: string;
  classContent?: string;
  onClick?: (id: string) => void;
};

const ProductItem: React.FC<ProductItemProps> = ({
  productItem,
  classItem = 'flex flex-col',
  classImg = 'basis-full object-contain',
  classContent = 'basis-full',
  onClick,
}) => {
  return (
    <>
      <div
        id={`product-item-${productItem.productId}`}
        className={classNames(
          classItem,
          `gap-4 font-primary p-[10px] md:p-6 cursor-pointer bg-white hover:drop-shadow-md`
        )}
        onClick={() => {
          onClick?.(productItem.productId);
        }}
      >
        <div className={classNames(classImg, `rounder flex justify-center`)}>
          <img src={productItem.previewImage} alt={productItem.productName} />
        </div>
        <div className={classNames(classContent, `flex flex-col gap-3`)}>
          <h2 className='line-clamp-1 text-base/5 md:text-lg/6 font-bold'>
            {productItem.productName}
          </h2>
          <p className='line-clamp-2 font-normal text-sm/4 md:text-base/5'>
            {productItem.description}
          </p>
          {/* #575757 Onyx color not found */}
          <p className='line-clamp-1 font-normal text-xs/3 md:text-sm/4 text-[#575757]'>
            {productItem.specifications}
          </p>
        </div>
      </div>
    </>
  );
};

export default ProductItem;
