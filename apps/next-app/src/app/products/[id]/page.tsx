'use client';

import { ProductItemType } from '@namviet-fe/core-ui';
import { ProductItem } from '@namviet-fe/core-ui';
import {
  type ProductImgItemType,
  type ProductSpecificationsGroupType,
  type ProductSummaryItemType,
  Button,
  ProductCarousel,
  ProductContent,
  ProductSpecifications,
  ProductSummary,
} from '@namviet-fe/core-ui';
import { usePathname, useRouter } from 'next/navigation';

const productImgItems: ProductImgItemType[] = [
  { src: 'https://picsum.photos/id/1019/1000/600/', alt: 'hình 1' },
  { src: 'https://picsum.photos/id/1008/1000/600/', alt: 'hình 2' },
  { alt: 'hình 3', src: '' },
  { src: 'https://picsum.photos/id/1016/1000/600/' },
  { src: 'https://picsum.photos/id/1019/1000/600/', alt: 'hình 5' },
  { src: 'https://picsum.photos/id/1008/1000/600/', alt: 'hình 6' },
  { alt: 'hình 7', src: '' },
  { src: 'https://picsum.photos/id/1016/1000/600/' },
];

const product = {
  name: 'Đầu đốt Blowtherm Diesel Burner',
  brand: 'Blowtherm',
  productId: 'MA01',
  details: [
    'Thiết kế nhỏ gọn, dễ thao tác tháo lắp.',
    'Sử dụng trong các lò hơi nhỏ trong dân dụng đến lớn trong công nghiệp.',
    'Chế độ điều khiển và hoạt động linh hoạt : 1 cấp, 2 cấp, 3 cấp và vô cấp.',
    'Công suất đầu đốt tới 6380 kW (tương đương 550 kg/h)',
  ],
};

const productSummaryItem: ProductSummaryItemType = {
  title: product.name,
  subInfos: [
    { label: 'Thương hiệu', value: product.brand },
    { label: 'Mã sản phẩm', value: product.productId },
  ],
  infoLabel: 'Thông tin chi tiết',
  details: product.details,
};

const richText =
  '<div class="font-primary"><p class="text-[16px] md:text-[18px] font-bold md:font-medium text-center mb-[25px]">Mô tả sản phẩm</p><p><b>Blowtherm</b> hân hạnh giới thiệu đầy đủ các dòng đầu đốt, có thể đáp ứng tất cả các nhu cầu nhờ sự đảm bảo tuyệt đối về chất lượng, sử dụng trong các dự án dân dụng từ nhỏ đến lớn, đáp ứng được sự mong đợi ở các công trình công nghiệp nơi mà sự tiên phong về năng lực và độ tin cậy được đòi hỏi gắt gao.</p><br><img src="https://picsum.photos/id/1019/1000/600/" alt="Hình ảnh sản phẩm 1`" /><br><p>Chào mừng bạn đến với trang mô tả sản phẩm XYZ. Đây là một số điểm nổi bật về sản phẩm của chúng tôi:</p><ul><li><strong>Chất liệu:</strong> Chất liệu cao cấp, bền bỉ và an toàn cho sức khỏe.</li><li><strong>Thiết kế:</strong> Thiết kế hiện đại, sang trọng và thân thiện với người dùng.</li><li><strong>Hiệu suất:</strong> Hoạt động mạnh mẽ, hiệu quả và đáng tin cậy.</li><li><strong>Ứng dụng:</strong> Sản phẩm phù hợp cho nhiều ứng dụng, từ công việc hàng ngày đến sự kiện đặc biệt.</li></ul><p>Chúng tôi tự hào giới thiệu sản phẩm XYZ với chất lượng và dịch vụ tốt nhất. Dưới đây là một số hình ảnh mô tả sản phẩm:</p><div></div><p>Đừng ngần ngại liên hệ với chúng tôi nếu bạn cần thêm thông tin hoặc muốn đặt hàng.</p><p><em>Xin cảm ơn bạn đã quan tâm đến sản phẩm của chúng tôi!</em></p></div>';

const productSpecificationsItems: ProductSpecificationsGroupType[] = [
  {
    nameGroup: '',
    listItem: [
      { name: 'Thương hiệu', value: 'SAMSUNG' },
      { name: 'Bảo hành', value: '12 tháng' },
    ],
  },
  {
    nameGroup: 'Thông tin chung',
    listItem: [
      {
        name: 'Nhóm sản xuất',
        value: 'Điện thoại',
      },
      {
        name: 'Tên',
        value: 'Galaxy Z Flip4',
      },
      {
        name: 'Series',
        value: 'Galaxy Z',
      },
    ],
  },
  {
    nameGroup: 'Cấu hình',
    listItem: [
      {
        name: 'Dung lượng (ROM)',
        value: '128GB',
      },
      {
        name: 'Hệ điều hành',
        value: 'Android',
      },
      {
        name: 'RAM',
        value: '8GB',
      },
    ],
  },
  {
    nameGroup: 'Cấu hìnhh',
    listItem: [
      {
        name: 'Dung lượng (ROM)h',
        value: '128GB',
      },
      {
        name: 'Hệ điều hànhh',
        value: 'Android',
      },
      {
        name: 'RAMh',
        value: '8GB',
      },
      {
        name: 'Hệ điều hànhhh',
        value: 'Android',
      },
      {
        name: 'RAMhh',
        value: '8GB',
      },
    ],
  },
];

const productItems: ProductItemType[] = [
  {
    productId: '104',
    productName: 'Dầu đốt 1',
    previewImage:
      'https://hips.hearstapps.com/hmg-prod/images/dog-puppy-on-garden-royalty-free-image-1586966191.jpg?crop=0.752xw:1.00xh;0.175xw,0&resize=1200:*',
    description:
      'Chuyên cung cấp các đầu đốt djnfkjsfbkja asdjasdjk ajshdjkashdkj ashdkjahsd ajshdkjasdkj ạhdkjahsd',
    specifications: 'Công suất: 50-5500kw',
  },
  {
    productId: '105',
    productName: 'Dầu đốt 2',
    previewImage:
      'https://hips.hearstapps.com/hmg-prod/images/dog-puppy-on-garden-royalty-free-image-1586966191.jpg?crop=0.752xw:1.00xh;0.175xw,0&resize=1200:*',
    description: 'Chuyên cung cấp các đầu đốt',
    specifications: 'Công suất: 50-5500kw',
  },
  {
    productId: '106',
    productName: 'Dầu đốt 3',
    previewImage:
      'https://hips.hearstapps.com/hmg-prod/images/dog-puppy-on-garden-royalty-free-image-1586966191.jpg?crop=0.752xw:1.00xh;0.175xw,0&resize=1200:*',
    description: 'Chuyên cung cấp các đầu đốt',
    specifications: 'Công suất: 50-5500kw',
  },
];

export default function Page({ params }: { params: { id: string } }) {
  const router = useRouter();
  const pathname = usePathname();
  const onClick = () => {
    // event lien he mua hang
  };
  const onClickItem = (productId: string) => {
    router.replace(
      `${pathname.substring(0, pathname.length - params.id.length)}${productId}`
    );
  };

  return (
    <div className='max-w-7xl mx-auto'>
      <p>Product: {params.id}</p>
      <Button
        onClick={() => {
          router.push('/products');
        }}
      >
        ProductPage
      </Button>
      {/* //#EDEDED not found */}
      <div className='grid grid-cols-3 gap-0 md:gap-[50px] mt-[30px] mb-[10px] md:mb-[100px] bg-[#EDEDED] md:bg-white'>
        <div className='col-span-3 md:!col-span-1 p-[12px] bg-white'>
          <ProductCarousel productImgItems={productImgItems} />
        </div>
        <div className='col-span-3 md:!col-span-2 p-[12px] bg-white mb-[5px] md:mb-0'>
          <ProductSummary
            productSummaryItem={productSummaryItem}
            buttonLabel={'Liên hệ mua hàng'}
            onClick={onClick}
          />
        </div>
      </div>
      <div className='grid grid-cols-3'>
        <div className='md:!col-span-1 md:!order-last col-span-3 p-[12px] bg-white mb-[5px] md:mb-0'>
          <ProductSpecifications
            title={'Thông số kỹ thuật chính'}
            viewMoreLabel={'Xem thêm nội dung'}
            productSpecificationsGroups={productSpecificationsItems}
          />
        </div>
        <div className='md:!col-span-2 col-span-3 p-[12px] bg-white mb-[5px] md:mb-0'>
          <ProductContent richText={richText} />
        </div>
      </div>
      <div>
        <p className='font-primary font-bold text-[18px] mb-[20px]'>
          Sản phẩm liên quan
        </p>
        <div className='grid grid-cols-3 md:grid-cols-4 gap-[30px] md:gap-[19px]'>
          {productItems.map((item) => {
            return (
              <div key={item.productId} className='col-span-1'>
                <ProductItem productItem={item} onClick={onClickItem} />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
