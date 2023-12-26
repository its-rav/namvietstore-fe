import React, { useState } from 'react';

export type ProductSpecificationsItemType = {
  name?: string;
  value?: string;
};

export type ProductSpecificationsGroupType = {
  nameGroup?: string;
  listItem?: ProductSpecificationsItemType[];
};

type ProductSpecificationsProps = {
  productSpecificationsItems?: ProductSpecificationsItemType[];
  productSpecificationsGroups?: ProductSpecificationsGroupType[];
};

let isEvenLine = true;

const renderRow = (name: string, value: string, isGroupName?: boolean) => {
  return (
    <div
      key={name}
      className={
        isEvenLine
          ? 'grid grid-cols-5 bg-[#F4F4F4]'
          : 'grid grid-cols-5 bg-white'
      }
    >
      <div
        className={
          isGroupName
            ? 'col-span-2 p-4 font-semibold text-[#375159]'
            : 'col-span-2 p-4'
        }
      >
        {name}
      </div>
      <div className='col-span-3 p-4'>{value}</div>
    </div>
  );
};

const ProductSpecifications: React.FC<ProductSpecificationsProps> = ({
  productSpecificationsItems,
  productSpecificationsGroups,
}) => {
  const [isShowPopUp, setIsShowPopUp] = useState<boolean>(false);
  return (
    <div className='font-primary'>
      <div
        className={
          isShowPopUp
            ? 'fixed top-0 right-0 z-10 w-screen h-screen backdrop-brightness-50 backdrop-blur-sm'
            : 'relative pointer-events-none h-[520px] overflow-hidden'
        }
      >
        <div
          className={
            isShowPopUp
              ? 'bg-white w-full md:w-1/2 h-full md:h-5/6 rounded-[10px] overflow-auto px-[20px] py-[10px] absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2'
              : ''
          }
        >
          <h3
            className={`${
              isShowPopUp
                ? 'text-[16px] md:text-[22px] font-bold md:font-semibold'
                : 'text-[16px] md:text-[18px] font-bold md:font-medium'
            } text-center mb-[19px]`}
          >
            Thông số kỹ thuật chính
          </h3>
          {productSpecificationsItems?.map((item) => {
            isEvenLine = !isEvenLine;
            return renderRow(item.name ?? '', item.value ?? '');
          })}
          {productSpecificationsGroups?.map((group) => {
            isEvenLine = !isEvenLine;
            return (
              <div key={group.nameGroup}>
                {renderRow(group.nameGroup ?? '', '', true)}
                {group.listItem?.map((item) => {
                  isEvenLine = !isEvenLine;
                  return renderRow(item.name ?? '', item.value ?? '');
                })}
              </div>
            );
          })}
          <div
            className={
              isShowPopUp
                ? 'absolute top-[15px] md:top-[11px] right-[15px] md:right-[11px] cursor-pointer hover:text-blue-600'
                : 'hidden'
            }
            onClick={() => {
              setIsShowPopUp(false);
            }}
          >
            <svg
              xmlns='http://www.w3.org/2000/svg'
              fill='none'
              viewBox='0 0 24 24'
              strokeWidth='1.5'
              stroke='currentColor'
              className='w-7 h-7'
            >
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                d='M6 18 18 6M6 6l12 12'
              />
            </svg>
          </div>
        </div>
        <div className='absolute bottom-0 left-0 right-0 h-[40px] bg-gradient-to-t from-white'></div>
      </div>
      <div className='flex justify-center py-[40px] hover:text-blue-600'>
        <button
          className='flex items-center gap-[5px]'
          onClick={() => {
            setIsShowPopUp(true);
          }}
        >
          <span className='font-medium'>Xem thêm nội dung</span>
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
              d='m19.5 8.25-7.5 7.5-7.5-7.5'
            />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default ProductSpecifications;
