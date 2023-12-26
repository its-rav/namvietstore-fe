import { PostCard } from '@namviet-fe/core-ui';

const ProductsListSection = () => {
  const items = [
    {
      title: 'Dầu đốt',
      previewImage:
        'https://hips.hearstapps.com/hmg-prod/images/dog-puppy-on-garden-royalty-free-image-1586966191.jpg?crop=0.752xw:1.00xh;0.175xw,0&resize=1200:*',
      description:
        'Chuyên cung cấp các đầu đốt (Blowtherm - Italy, Hofamat - Germany, …) và phụ tùng đầu đốt các loại. Các sản phẩm được sản xuất với công nghệ tiên tiến và được sử dụng rộng rãi trong các ngành công nghiệp.',
    },
    {
      title: 'Dầu đốt',
      previewImage:
        'https://hips.hearstapps.com/hmg-prod/images/dog-puppy-on-garden-royalty-free-image-1586966191.jpg?crop=0.752xw:1.00xh;0.175xw,0&resize=1200:*',
      description:
        'Chuyên cung cấp các đầu đốt (Blowtherm - Italy, Hofamat - Germany, …) và phụ tùng đầu đốt các loại. Các sản phẩm được sản xuất với công nghệ tiên tiến và được sử dụng rộng rãi trong các ngành công nghiệp.',
    },
    {
      title: 'Dầu đốt',
      previewImage:
        'https://hips.hearstapps.com/hmg-prod/images/dog-puppy-on-garden-royalty-free-image-1586966191.jpg?crop=0.752xw:1.00xh;0.175xw,0&resize=1200:*',
      description:
        'Chuyên cung cấp các đầu đốt (Blowtherm - Italy, Hofamat - Germany, …) và phụ tùng đầu đốt các loại. Các sản phẩm được sản xuất với công nghệ tiên tiến và được sử dụng rộng rãi trong các ngành công nghiệp.',
    },
    {
      title: 'Dầu đốt',
      previewImage:
        'https://hips.hearstapps.com/hmg-prod/images/dog-puppy-on-garden-royalty-free-image-1586966191.jpg?crop=0.752xw:1.00xh;0.175xw,0&resize=1200:*',
      description:
        'Chuyên cung cấp các đầu đốt (Blowtherm - Italy, Hofamat - Germany, …) và phụ tùng đầu đốt các loại. Các sản phẩm được sản xuất với công nghệ tiên tiến và được sử dụng rộng rãi trong các ngành công nghiệp.',
    },
    {
      title: 'Dầu đốt',
      previewImage:
        'https://hips.hearstapps.com/hmg-prod/images/dog-puppy-on-garden-royalty-free-image-1586966191.jpg?crop=0.752xw:1.00xh;0.175xw,0&resize=1200:*',
      description:
        'Chuyên cung cấp các đầu đốt (Blowtherm - Italy, Hofamat - Germany, …) và phụ tùng đầu đốt các loại. Các sản phẩm được sản xuất với công nghệ tiên tiến và được sử dụng rộng rãi trong các ngành công nghiệp.',
    },
    {
      title: 'Dầu đốt',
      previewImage:
        'https://hips.hearstapps.com/hmg-prod/images/dog-puppy-on-garden-royalty-free-image-1586966191.jpg?crop=0.752xw:1.00xh;0.175xw,0&resize=1200:*',
      description:
        'Chuyên cung cấp các đầu đốt (Blowtherm - Italy, Hofamat - Germany, …) và phụ tùng đầu đốt các loại. Các sản phẩm được sản xuất với công nghệ tiên tiến và được sử dụng rộng rãi trong các ngành công nghiệp.',
    },
  ];
  return (
    <div className='grid grid-flow-row gap-8 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-3'>
      {items.map(({ title, previewImage, description }, index) => (
        <PostCard
          key={index}
          title={title}
          previewImage={previewImage}
          description={description}
        />
      ))}
    </div>
  );
};

export default ProductsListSection;
