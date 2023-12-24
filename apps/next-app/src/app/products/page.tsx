'use client';

import {
  PaginationType,
  ProductItemType,
  PagingComponent,
  Button,
} from '@namviet-fe/core-ui';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';

export default function ProductsPage() {
  const router = useRouter();
  const [showLayoutList, setShowLayoutList] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    console.log(currentPage);
  }, [currentPage]);
  const onClickItem = (productId: string) => {};

  const handlePageClick = (selectedItem: { selected: number }) => {
    setCurrentPage(selectedItem.selected + 1);
  };

  const onClickPreviousButton = () => {
    setCurrentPage(currentPage - 1);
  };

  const onClickNextButton = () => {
    setCurrentPage(currentPage + 1);
  };

  const onChangePage: React.ChangeEventHandler<HTMLSelectElement> = (event) => {
    setCurrentPage(+event.target.value);
  };

  const title: string = 'Dầu đốt';
  const quantity: number = 16;
  const productItems: ProductItemType[] = [
    {
      productId: '101',
      productName: 'Dầu đốt 1',
      previewImage:
        'https://hips.hearstapps.com/hmg-prod/images/dog-puppy-on-garden-royalty-free-image-1586966191.jpg?crop=0.752xw:1.00xh;0.175xw,0&resize=1200:*',
      description: 'Chuyên cung cấp các đầu đốt',
      specifications: 'Công suất: 50-5500kw',
    },
    {
      productId: '102',
      productName: 'Dầu đốt 2',
      previewImage:
        'https://hips.hearstapps.com/hmg-prod/images/dog-puppy-on-garden-royalty-free-image-1586966191.jpg?crop=0.752xw:1.00xh;0.175xw,0&resize=1200:*',
      description: 'Chuyên cung cấp các đầu đốt',
      specifications: 'Công suất: 50-5500kw',
    },
    {
      productId: '103',
      productName: 'Dầu đốt 3',
      previewImage:
        'https://hips.hearstapps.com/hmg-prod/images/dog-puppy-on-garden-royalty-free-image-1586966191.jpg?crop=0.752xw:1.00xh;0.175xw,0&resize=1200:*',
      description: 'Chuyên cung cấp các đầu đốt',
      specifications: 'Công suất: 50-5500kw',
    },
    {
      productId: '104',
      productName: 'Dầu đốt 4',
      previewImage:
        'https://hips.hearstapps.com/hmg-prod/images/dog-puppy-on-garden-royalty-free-image-1586966191.jpg?crop=0.752xw:1.00xh;0.175xw,0&resize=1200:*',
      description: 'Chuyên cung cấp các đầu đốt',
      specifications: 'Công suất: 50-5500kw',
    },
    {
      productId: '105',
      productName: 'Dầu đốt 4',
      previewImage:
        'https://hips.hearstapps.com/hmg-prod/images/dog-puppy-on-garden-royalty-free-image-1586966191.jpg?crop=0.752xw:1.00xh;0.175xw,0&resize=1200:*',
      description: 'Chuyên cung cấp các đầu đốt',
      specifications: 'Công suất: 50-5500kw',
    },
  ];
  const paginationPage: PaginationType = {
    totalPages: 100,
    currentPage,
  };

  return (
    <div className='bg-[#F5F5F5]'>
      <div className='max-w-7xl mx-auto w-full '>
        <Button
          onClick={() => {
            router.push('/');
          }}
        >
          Homepage
        </Button>
        <div className='grid grid-cols-12'>
          <div className='col-span-12 md:col-span-3'></div>
          <div className='col-span-12 md:col-span-9 px-[5px] md:px-0 py-[10px] md:py-[30px] flex items-center font-[Roboto]'>
            <span className='text-[#0F0F0F] md:text-[#850000] text-base md:text-2xl font-semibold md:font-bold mr-[5px]'>
              {title.toUpperCase()}
            </span>
            <span className='text-[#575757] md:text-[#000000] text-[11px] md:text-base font-normal'>{`(${quantity} sản phẩm)`}</span>
          </div>
          <div className='col-span-12 md:col-span-3'></div>
          <div className='col-span-12 md:col-span-9'>
            <PagingComponent
              productItems={productItems}
              showLayoutList={showLayoutList}
              onClickItem={onClickItem}
              paginationPage={paginationPage}
              handlePageClick={handlePageClick}
              onClickPreviousButton={onClickPreviousButton}
              onClickNextButton={onClickNextButton}
              onChangePage={onChangePage}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
