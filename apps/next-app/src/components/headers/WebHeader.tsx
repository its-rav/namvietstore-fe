'use client';

import {
  type categoryBarItemType,
  CategoryBar,
  HamburgerIcon,
  SearchBar,
} from '@namviet-fe/core-ui';
import Image from 'next/image';
import { useRouter } from 'next/navigation';

const categoryItems: categoryBarItemType[] = [
  {
    name: 'Trang chủ',
    url: '/',
  },
  {
    name: 'Giới thiệu',
    url: '/introduction',
  },
  {
    name: 'Tin tức',
    url: '/news',
  },
  {
    name: 'Liên hệ',
    url: '/contact',
  },
];

const WebHeader = () => {
  const router = useRouter();

  const handleCategoryBarItemClicked = (url: string) => {
    router.push(url);
  };

  return (
    <div>
      <div className='w-full h-full border-b-slate-200 border-b-2 border-solid'>
        <div className='flex flex-row h-[185px] justify-between items-center max-w-7xl mx-auto'>
          <div>
            <Image
              src='https://thietbinhietnv.com/storage/app/uploads/public/5df/64d/31d/5df64d31d51d8117549829.jpg'
              loading='lazy'
              alt='logo'
              width={200}
              height={145}
            />
          </div>
          <SearchBar placeholder='Search all products...' />
        </div>
      </div>
      <div className='max-w-7xl mx-auto'>
        <CategoryBar
          categoryButtonIcon={<HamburgerIcon />}
          categoryButtonText='DANH MỤC SẢN PHẨM'
          categoryBarItems={categoryItems}
          onCategoryBarItemClick={handleCategoryBarItemClicked}
        />
      </div>
    </div>
  );
};

export default WebHeader;
