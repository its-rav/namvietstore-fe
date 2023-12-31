'use client';
import { MobileHeader, SearchBar } from '@namviet-fe/core-ui';
import Image from 'next/image';

const WebHeader = () => {
  return (
    <div className='w-full h-[185px] border-b-[#e5e5e5] border-b-2 border-solid'>
      <div className='h-full flex flex-row justify-between items-center max-w-7xl mx-auto'>
        <div>
          <Image
            src='https://thietbinhietnv.com/storage/app/uploads/public/5df/64d/31d/5df64d31d51d8117549829.jpg'
            loading='lazy'
            alt='logo'
            width={200}
            height={145}
          />
        </div>
        <SearchBar
          placeholder='Search all products...'
          // eslint-disable-next-line @typescript-eslint/no-empty-function
          onClick={() => {}}
        />
      </div>
    </div>
  );
};

const MobileHeaderWrapper = () => {
  const onClick = () => {
    window.alert('Redirect to search results');
  };

  return (
    <MobileHeader
      placeholder='Tìm kiếm sản phẩm'
      // eslint-disable-next-line @typescript-eslint/no-empty-function
      toggleSideBar={() => {}}
      onClick={onClick}
    />
  );
};

export default async function Header() {
  return (
    <header className='md:mt-[60px]'>
      <div className='hidden md:block w-full'>
        <WebHeader />
      </div>
      <div className='md:hidden block w-full'>
        <MobileHeaderWrapper />
      </div>
    </header>
  );
}
