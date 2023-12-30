import React from 'react';

import { Button } from '../buttons';

export type Item = {
  label: string;
  value: string;
};

export type ProductSummaryItemType = {
  title: string;
  subInfos: Item[];
  infoLabel: string;
  details: string[];
};

type ProductSummaryProps = {
  productSummaryItem: ProductSummaryItemType;
  buttonLabel?: string;
  onClick?: () => void;
};

const ProductSummary: React.FC<ProductSummaryProps> = ({
  productSummaryItem,
  buttonLabel,
  onClick,
}) => {
  return (
    <div className='font-primary'>
      <h2 className='text-md md:text-[24px] font-bold py-[10px]'>
        {productSummaryItem.title}
      </h2>
      {/* #575757 Onyx color not found */}
      <div className='grid grid-cols-6 text-sm font-normal text-[#575757] divide-x-[1px] divide-[#575757] py-0 md:py-[10px]'>
        {productSummaryItem.subInfos.map((subInfo, index) => (
          <span
            className='col-span-3 md:!col-span-2 first:pr-3 last:pl-3'
            key={`subinfo-${index}`}
          >
            {subInfo.label}: {subInfo.value}
          </span>
        ))}
      </div>
      <p className='mt-10px pl-[13px] mb-[16px] md:mb-[11px] border-l-[3px] border-primary text-md font-medium leading-[20px]'>
        {productSummaryItem.infoLabel}
      </p>
      <ul className='list-disc text-md font-normal ml-[26px] mb-[16px]'>
        {productSummaryItem.details.map((detail, index) => {
          return <li key={`detail-${index}`}>{detail}</li>;
        })}
      </ul>
      {buttonLabel ? (
        <div className='py-[10px]'>
          <Button children={buttonLabel} onClick={onClick} />
        </div>
      ) : (
        <></>
      )}
    </div>
  );
};

export default ProductSummary;
