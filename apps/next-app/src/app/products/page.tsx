'use client';

import {
  type FilterGroupType,
  type FilterItemType,
  type PaginationType,
  type ProductItemType,
  Button,
  ButtonChangeLayout,
  FilterItem,
  FilterMobile,
  PagingGridComponent,
  PagingListComponent,
  SortMobile,
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

  const onClickSort = (searchData: string[]) => {
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

  const onClickFilter = (searchData: string[]) => {
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
        const [key] = search.split('=');
        params.delete(key);
      });
      searchData.forEach((search) => {
        const [key, value] = search.split('=');
        if (params.has(key)) {
          params.set(key, params.get(key) + ',' + value);
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
  // dummy data
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
          selected: searchParams.get('sort') === '12',
        },
        {
          optionId: '13',
          optionName: 'Giá tăng dần',
          selected: searchParams.get('sort') === '13',
        },
        {
          optionId: '14',
          optionName: 'Giá giảm dần',
          selected: searchParams.get('sort') === '14',
        },
        {
          optionId: '15',
          optionName: 'Sản phẩm bán chạy nhất',
          selected: searchParams.get('sort') === '15',
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
            selected: searchParams.get('typea')?.split('%2C').includes('101'),
          },
          {
            optionId: '102',
            optionName: 'Bếp từ 3 vùng nấu trở lên',
            selected: searchParams.get('typea')?.split('%2C').includes('102'),
          },
          {
            optionId: '103',
            optionName: 'Bếp từ đôi',
            selected: searchParams.get('typea')?.split('%2C').includes('103'),
          },
          {
            optionId: '104',
            optionName: 'Bếp từ đơn',
            selected: searchParams.get('typea')?.split('%2C').includes('104'),
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
            selected: searchParams.get('typeb')?.split('%2C').includes('201'),
          },
          {
            optionId: '202',
            optionName: 'Bếp từ 3 vùng nấu trở lên',
            selected: searchParams.get('typeb')?.split('%2C').includes('202'),
          },
          {
            optionId: '203',
            optionName: 'Bếp từ đôi',
            selected: searchParams.get('typeb')?.split('%2C').includes('203'),
          },
          {
            optionId: '204',
            optionName: 'Bếp từ đơn',
            selected: searchParams.get('typeb')?.split('%2C').includes('204'),
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
    <>
      <Button
        onClick={() => {
          router.push('/');
        }}
      >
        Homepage
      </Button>
      <div className='bg-neutral-100'>
        <div className='max-w-7xl mx-auto w-full'>
          <div className='bg-white md:!bg-neutral-100 grid grid-cols-12 mb-1 mt-2'>
            <div className='col-span-12 md:col-span-3 md:!gap-x-7'></div>
            <div className='col-span-12 md:col-span-9 px-[5px] md:px-0 py-[10px] md:!py-[30px] flex items-center font-primary'>
              {/*#0F0F0F Onyx color not found*/}
              {/* md:text-primary doesn't work */}
              <span className='text-[#0F0F0F] md:text-primary text-base md:text-2xl font-semibold md:font-bold mr-[5px]'>
                {title.toUpperCase()}
              </span>
              {/*#575757 Onyx color not found*/}
              <span className='text-[#575757] md:text-black text-[11px] md:text-base font-normal'>{`(${quantity} sản phẩm)`}</span>
            </div>
          </div>
          <div className='grid grid-cols-12 gap-3 md:!gap-x-7'>
            <div className='col-span-12 md:!col-span-3'>
              <div className='hidden md:block'>
                {filterData.sortItems ? (
                  <div key={filterData.sortItems.filterId} className='mb-12'>
                    <FilterItem
                      filterItems={filterData.sortItems}
                      onClickSort={onClickSort}
                    ></FilterItem>
                  </div>
                ) : (
                  <></>
                )}
                {filterData.filterItems.map((item: FilterItemType) => {
                  return (
                    <div key={item.filterId} className='mb-12'>
                      <FilterItem
                        filterItems={item}
                        onClickSort={onClickFilter}
                      ></FilterItem>
                    </div>
                  );
                })}
              </div>
              <div className='bg-white flex md:hidden justify-between py-5 font-medium text-sm/4 border-b'>
                <SortMobile
                  sortItems={filterData.sortItems}
                  onClickApplySort={onClickSort}
                />
                <div className='flex divide-x'>
                  <div className='px-3'>
                    <ButtonChangeLayout
                      onChangePageLayout={onChangePageLayout}
                    />
                  </div>
                  <div className='px-3'>
                    <FilterMobile
                      filterItems={filterData.filterItems}
                      filterTitle='Bộ Lọc'
                      clearFilterTitle='Xóa bộ lọc'
                      applyFilterTitle='Áp dụng bộ lọc'
                      onClickApplyFilter={onClickFilter}
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className='col-span-12 md:!col-span-9'>
              {showLayoutList ? (
                <PagingListComponent
                  productItems={productItems}
                  paginationPage={paginationPage}
                  previousLabel={'Trước'}
                  nextLabel={'Sau'}
                  onClickItem={onClickItem}
                  handlePageClick={handlePageClick}
                />
              ) : (
                <PagingGridComponent
                  productItems={productItems}
                  paginationPage={paginationPage}
                  previousLabel={'Trước'}
                  nextLabel={'Sau'}
                  onClickItem={onClickItem}
                  handlePageClick={handlePageClick}
                />
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
