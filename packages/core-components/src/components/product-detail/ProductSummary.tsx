import React from 'react';
import { Button } from '../buttons';

export type ProductSummaryItemType = {
  title?: string;
  brand?: string;
  productId: string;
  details?: string[];
};

type ProductSummaryProps = {
  productSummaryItem: ProductSummaryItemType;
  onClick?: () => void;
};

const ProductSummary: React.FC<ProductSummaryProps> = ({
  productSummaryItem,
  onClick,
}) => {
  return (
    <div className='font-primary'>
      <h2 className='text-[16px] md:text-[24px] font-bold py-[10px]'>
        {productSummaryItem.title}
      </h2>
      <div className='grid grid-cols-5 text-[14px] font-normal text-[#575757] divide-x-[1px] divide-[#575757] py-0 md:py-[10px]'>
        <span className='col-span-3 md:col-span-2 mr-[5px]'>
          Thương hiệu: {productSummaryItem.brand}
        </span>
        <span className='col-span-2 md:col-span-3 pl-[7px] md:pl-[26px]'>
          Mã sản phẩm: {productSummaryItem.productId}
        </span>
      </div>
      <p className='mt-10px pl-[13px] mb-[16px] md:mb-[11px] border-l-[3px] border-[#850000] text-[16px] font-medium leading-[20px]'>
        Thông tin chi tiết
      </p>
      <ul className='list-disc text-[16px] font-normal ml-[26px] mb-[16px]'>
        {productSummaryItem.details?.map((detail) => {
          return <li key={detail}>{detail}</li>;
        })}
      </ul>
      <div className='py-[10px]'>
        <Button children='Liên hệ mua hàng' onClick={onClick} />
      </div>
    </div>
  );
};

export default ProductSummary;
