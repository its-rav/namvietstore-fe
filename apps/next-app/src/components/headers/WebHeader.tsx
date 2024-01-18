'use client';
import {
  type categoryBarItemType,
  type CategoryMenuItemType,
  CategoryBar,
  HamburgerIcon,
  KeyIcon,
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

const categoryMenuItems: CategoryMenuItemType[] = [
  {
    id: 'item 1',
    icon: <KeyIcon />,
    label: 'Đầu đốt',
    subItems: [
      {
        key: 'item1-1',
        title: 'Đầu đốt theo hãng',
        items: [
          {
            description: 'Madas',
            url: '/madas',
          },
          {
            description: 'Madas',
            url: '/23',
          },
          {
            description: 'Madas',
            url: '/34',
          },
        ],
      },
      {
        key: 'item1-2',
        title: 'Đầu đốt theo loại nhiên liệu',
        items: [
          {
            description: 'Madas',
            url: '/madas',
          },
          {
            description: 'Madas',
            url: '/25',
          },
          {
            description: 'Madas',
            url: '/36',
          },
        ],
      },
      {
        key: 'item1-3',
        title: 'Đầu đốt theo lĩnh vực',
        items: [
          {
            description: 'Madas',
            url: '/madas',
          },
          {
            description: 'Madas',
            url: '/27',
          },
          {
            description: 'Madas',
            url: '/38',
          },
        ],
      },
      {
        key: 'item1-4',
        title: 'Đầu đốt theo lĩnh vực',
        items: [
          {
            description: 'Madas',
            url: '/madas',
          },
          {
            description: 'Madas',
            url: '/test',
          },
          {
            description: 'Madas',
            url: '/091',
          },
        ],
      },
    ],
  },
  {
    id: 'item 2',
    icon: <KeyIcon />,
    label: 'Đầu đốt',
    subItems: [
      {
        key: 'item2-1',
        title: 'Đầu đốt theo hãng',
        items: [
          {
            description: 'Madas',
            url: '/1',
          },
          {
            description: 'Madas',
            url: '/2',
          },
          {
            description: 'Madas',
            url: '/3',
          },
        ],
      },
      {
        key: 'item2-2',
        title: 'Đầu đốt theo hãng',
        items: [
          {
            description: 'Madas',
            url: '/1',
          },
          {
            description: 'Madas',
            url: '/2',
          },
          {
            description: 'Madas',
            url: '/3',
          },
        ],
      },
      {
        key: 'item2-3',
        title: 'Đầu đốt theo hãng',
        items: [
          {
            description: 'Madas',
            url: '/1',
          },
          {
            description: 'Madas',
            url: '/2',
          },
          {
            description: 'Madas',
            url: '/3',
          },
        ],
      },
    ],
  },
  {
    id: 'item 3',
    icon: <KeyIcon />,
    label: 'Đầu đốt',
    subItems: [
      {
        key: 'item3-1',
        title: 'Đầu đốt theo hãng',
        items: [
          {
            description: 'Madas',
            url: '/1',
          },
          {
            description: 'Madas',
            url: '/2',
          },
          {
            description: 'Madas',
            url: '/3',
          },
        ],
      },
    ],
  },
  {
    id: 'item 4',
    icon: <KeyIcon />,
    label: 'Nồi hơi và nồi nước nóng đốt',
    subItems: [
      {
        key: 'item4-1',
        title: 'Đầu đốt theo hãng',
        items: [
          {
            description: 'Madas',
            url: '/12',
          },
          {
            description: 'Madas',
            url: '/2',
          },
          {
            description: 'Madas',
            url: '/3',
          },
        ],
      },
      {
        key: 'item4-2',
        title: 'Đầu đốt theo hãng',
        items: [
          {
            description: 'Madas',
            url: '/12',
          },
          {
            description: 'Madas',
            url: '/2',
          },
          {
            description: 'Madas',
            url: '/3',
          },
        ],
      },
      {
        key: 'item4-3',
        title: 'Đầu đốt theo hãng',
        items: [
          {
            description: 'Madas',
            url: '/12',
          },
          {
            description: 'Madas',
            url: '/2',
          },
          {
            description: 'Madas',
            url: '/3',
          },
        ],
      },
      {
        key: 'item4-4',
        title: 'Đầu đốt theo linh vuc nghiep vu',
        items: [
          {
            description: 'Madas',
            url: '/12',
          },
          {
            description: 'Madas',
            url: '/2',
          },
          {
            description: 'Madas',
            url: '/3',
          },
        ],
      },
      {
        key: 'item4-5',
        title: 'Đầu đốt theo hãng',
        items: [
          {
            description: 'Madas',
            url: '/12',
          },
          {
            description: 'Madas',
            url: '/2',
          },
          {
            description: 'Madas',
            url: '/3',
          },
        ],
      },
    ],
  },
];

const WebHeader = () => {
  const router = useRouter();

  const handleCategoryBarItemClicked = (url: string) => {
    router.push(url);
  };

  const handleCategorySubMenuItemClicked = (url: string) => {
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
          categoryMenuItems={categoryMenuItems}
          onCategoryBarItemClick={handleCategoryBarItemClicked}
          onCategorySubMenuItemClick={handleCategorySubMenuItemClicked}
        />
      </div>
    </div>
  );
};

export default WebHeader;
