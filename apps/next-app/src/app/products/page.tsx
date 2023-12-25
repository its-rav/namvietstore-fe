'use client';

import {
  FilterComponent,
  FilterGroupType,
  PaginationType,
  PagingComponent,
  ProductItemType,
} from '@namviet-fe/core-ui';
import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import { useState } from 'react';

export default function ProductsPage() {
  const router = useRouter();
  const [showLayoutList, setShowLayoutList] = useState(false);
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const pageParamName = 'page';
  const totalPageParamName = 'total';
  const sortParamName = 'sort';
  const onClickItem = (productId: string) => {
    router.replace(`${pathname}/${productId}`);
  };

  const handlePageClick = (page: number) => {
    const params = new URLSearchParams(searchParams.toString());
    params.set(pageParamName, page.toString());
    router.replace(`${pathname}?${params.toString()}`);
  };

  const onClickSortAndFilter = (searchData: string[]) => {
    let params = new URLSearchParams();
    if (searchData.length === 0) {
      params.set(pageParamName, searchParams.get(pageParamName) ?? '');
      params.set(
        totalPageParamName,
        searchParams.get(totalPageParamName) ?? ''
      );
      params.set(sortParamName, searchParams.get(sortParamName) ?? '');
    } else {
      params = new URLSearchParams(searchParams.toString());
      searchData.forEach((search) => {
        const [key, value] = search.split('=');
        if (params.has(key)) {
          params.set(key, value);
        } else {
          params.append(key, value);
        }
      });
    }
    router.replace(`${pathname}?${params.toString()}`);
  };

  const onChangePageLayout = (isList: boolean) => {
    setShowLayoutList(isList);
  };
  // dumy data
  const title = 'Dầu đốt';
  const quantity = 16;
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
  const filterData: FilterGroupType = {
    sortItems: {
      filterId: '1',
      filterType: 'sort',
      placeholder: '',
      title: 'Sắp xếp',
      filterOptions: [
        {
          optionId: '12',
          optionName: 'Khuyến mãi tốt nhất',
        },
        {
          optionId: '13',
          optionName: 'Giá tăng dần',
        },
        {
          optionId: '14',
          optionName: 'Giá giảm dần',
        },
        {
          optionId: '15',
          optionName: 'Sản phẩm bán chạy nhất',
        },
      ],
    },
    filterItems: [
      {
        filterId: '1',
        filterType: 'typea',
        placeholder: '',
        title: 'Loại bếp',
        filterOptions: [
          {
            optionId: '101',
            optionName: 'Bếp hồng ngoại',
          },
          {
            optionId: '102',
            optionName: 'Bếp từ 3 vùng nấu trở lên',
          },
          {
            optionId: '103',
            optionName: 'Bếp từ đôi',
          },
          {
            optionId: '104',
            optionName: 'Bếp từ đơn',
          },
        ],
      },
      {
        filterId: '2',
        filterType: 'typeb',
        placeholder: '',
        title: 'Loại bếp 2',
        filterOptions: [
          {
            optionId: '201',
            optionName: 'Bếp hồng ngoại',
          },
          {
            optionId: '202',
            optionName: 'Bếp từ 3 vùng nấu trở lên',
          },
          {
            optionId: '203',
            optionName: 'Bếp từ đôi',
          },
          {
            optionId: '204',
            optionName: 'Bếp từ đơn',
          },
        ],
      },
    ],
  };
  const paginationPage: PaginationType = {
    totalPages: parseInt(searchParams.get(totalPageParamName) ?? '1'),
    currentPage: parseInt(searchParams.get(pageParamName) ?? '1'),
  };

  return (
    <div className='bg-[#F5F5F5]'>
      <div className='max-w-7xl mx-auto w-full '>
        <div className='grid grid-cols-12 gap-3 md:!gap-7'>
          <div className='col-span-12 md:col-span-3'></div>
          <div className='col-span-12 md:col-span-9 px-[5px] md:px-0 py-[10px] md:py-[30px] flex items-center font-[Roboto]'>
            <span className='text-[#0F0F0F] md:text-[#850000] text-base md:text-2xl font-semibold md:font-bold mr-[5px]'>
              {title.toUpperCase()}
            </span>
            <span className='text-[#575757] md:text-[#000000] text-[11px] md:text-base font-normal'>{`(${quantity} sản phẩm)`}</span>
          </div>
          <div className='col-span-12 md:!col-span-3'>
            <FilterComponent
              filterGroupItems={filterData}
              applyFilterTitle={'Áp dụng'}
              clearFilterTitle={'Xóa bộ lọc'}
              filterTitle={'Bộ Lọc'}
              onClickSortAndFilter={onClickSortAndFilter}
              onChangePageLayout={onChangePageLayout}
            />
          </div>
          <div className='col-span-12 md:!col-span-9'>
            <PagingComponent
              productItems={productItems}
              onClickItem={onClickItem}
              paginationPage={paginationPage}
              handlePageClick={handlePageClick}
              classItem={showLayoutList ? 'flex flex-row' : 'flex flex-col'}
              classImg={
                showLayoutList
                  ? 'basis-2/5 object-contain'
                  : 'bais-full object-contain'
              }
              classContent={showLayoutList ? 'basis-3/5' : 'bais-full'}
              classPaging={
                showLayoutList
                  ? 'grid gap-3 grid-cols-1'
                  : 'grid gap-3 grid-cols-2 md:!grid-cols-4'
              }
            />
          </div>
        </div>
      </div>
    </div>
  );
}
