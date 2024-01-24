'use client';
import {
  type SideBarMobileItemProps,
  CloseIcon,
  DropDownIcon,
  MobileHeader,
  SideBarMobile,
} from '@namviet-fe/core-ui';
import { useRouter } from 'next/navigation';
import { useRef, useState } from 'react';

const mobileSideBarItems: SideBarMobileItemProps[] = [
  {
    title: 'Trang chủ',
    url: '/',
  },
  {
    title: 'Giới thiệu',
    url: '/about',
  },
  {
    title: 'Danh sách sản phẩm',
    url: '/products',
    subItems: [
      {
        title: 'Đầu đốt',
        url: '/#',
        subItems: [
          {
            title: 'Đầu đốt theo hãng',
            url: '/#',
            subItems: [
              {
                title: 'Madas',
                url: '/#',
              },
              {
                title: 'Blowtherm',
                url: '/#',
              },
            ],
          },
        ],
      },
      {
        title: 'Đầu đốt',
        url: '/#',
      },
    ],
  },
  {
    title: 'Liên hệ',
    url: '/contact',
  },
];

const MobileHeaderWrapper = () => {
  const [sideBarOpen, setSideBarOpen] = useState(false);

  const ref = useRef<HTMLInputElement>(null);

  const router = useRouter();

  const handleToggleSidebar = () => {
    setSideBarOpen(!sideBarOpen);
  };

  const handleClosedBtnClick = () => {
    setSideBarOpen(!sideBarOpen);
  };

  const handleOnSideBarItemClick = (url: string) => {
    setSideBarOpen(!sideBarOpen);
    router.push(url);
  };

  //TODO: implement search
  const handleSearchButtonClicked = () => {
    ref.current?.focus();
  };

  return (
    <div>
      <MobileHeader
        placeholder='Tìm kiếm sản phẩm'
        toggleSideBar={handleToggleSidebar}
        onClick={handleSearchButtonClicked}
        ref={ref}
      />
      <div
        className={`fixed top-0 w-screen h-full z-50 transform ${
          sideBarOpen ? 'translate-x-0' : '-translate-x-full'
        } transition-transform duration-300 ease-in-out`}
      >
        <SideBarMobile
          closeButtonIcon={<CloseIcon />}
          sideBarItems={mobileSideBarItems}
          onCloseBtnClick={handleClosedBtnClick}
          onSideBarItemClick={handleOnSideBarItemClick}
          dropDownIcon={<DropDownIcon />}
        />
      </div>
    </div>
  );
};

export default MobileHeaderWrapper;
