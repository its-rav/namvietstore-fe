'use server';

import FeaturesListSection from '@/components/featureList/FeatureList';
import ImageSliderComponent from '@/components/imageSlider/ImageSlider';
import IntroSection from '@/components/intro';
import SectionWrapper from '@/components/sections/section-wrapper';

// const getFeatureProducts = async () => {
//   const useApi = getFFUseApi();
//   if (!useApi) {
//     return await Promise.resolve([
//       {
//         title: 'Dầu đốt',
//         previewImage:
//           'https://hips.hearstapps.com/hmg-prod/images/dog-puppy-on-garden-royalty-free-image-1586966191.jpg?crop=0.752xw:1.00xh;0.175xw,0&resize=1200:*',
//         description:
//           'Chuyên cung cấp các đầu đốt (Blowtherm - Italy, Hofamat - Germany, …) và phụ tùng đầu đốt các loại. Các sản phẩm được sản xuất với công nghệ tiên tiến và được sử dụng rộng rãi trong các ngành công nghiệp.',
//       },
//       {
//         title: 'Dầu đốt',
//         previewImage:
//           'https://hips.hearstapps.com/hmg-prod/images/dog-puppy-on-garden-royalty-free-image-1586966191.jpg?crop=0.752xw:1.00xh;0.175xw,0&resize=1200:*',
//         description:
//           'Chuyên cung cấp các đầu đốt (Blowtherm - Italy, Hofamat - Germany, …) và phụ tùng đầu đốt các loại. Các sản phẩm được sản xuất với công nghệ tiên tiến và được sử dụng rộng rãi trong các ngành công nghiệp.',
//       },
//       {
//         title: 'Dầu đốt',
//         previewImage:
//           'https://hips.hearstapps.com/hmg-prod/images/dog-puppy-on-garden-royalty-free-image-1586966191.jpg?crop=0.752xw:1.00xh;0.175xw,0&resize=1200:*',
//         description:
//           'Chuyên cung cấp các đầu đốt (Blowtherm - Italy, Hofamat - Germany, …) và phụ tùng đầu đốt các loại. Các sản phẩm được sản xuất với công nghệ tiên tiến và được sử dụng rộng rãi trong các ngành công nghiệp.',
//       },
//       {
//         title: 'Dầu đốt',
//         previewImage:
//           'https://hips.hearstapps.com/hmg-prod/images/dog-puppy-on-garden-royalty-free-image-1586966191.jpg?crop=0.752xw:1.00xh;0.175xw,0&resize=1200:*',
//         description:
//           'Chuyên cung cấp các đầu đốt (Blowtherm - Italy, Hofamat - Germany, …) và phụ tùng đầu đốt các loại. Các sản phẩm được sản xuất với công nghệ tiên tiến và được sử dụng rộng rãi trong các ngành công nghiệp.',
//       },
//       {
//         title: 'Dầu đốt',
//         previewImage:
//           'https://hips.hearstapps.com/hmg-prod/images/dog-puppy-on-garden-royalty-free-image-1586966191.jpg?crop=0.752xw:1.00xh;0.175xw,0&resize=1200:*',
//         description:
//           'Chuyên cung cấp các đầu đốt (Blowtherm - Italy, Hofamat - Germany, …) và phụ tùng đầu đốt các loại. Các sản phẩm được sản xuất với công nghệ tiên tiến và được sử dụng rộng rãi trong các ngành công nghiệp.',
//       },
//       {
//         title: 'Dầu đốt',
//         previewImage:
//           'https://hips.hearstapps.com/hmg-prod/images/dog-puppy-on-garden-royalty-free-image-1586966191.jpg?crop=0.752xw:1.00xh;0.175xw,0&resize=1200:*',
//         description:
//           'Chuyên cung cấp các đầu đốt (Blowtherm - Italy, Hofamat - Germany, …) và phụ tùng đầu đốt các loại. Các sản phẩm được sản xuất với công nghệ tiên tiến và được sử dụng rộng rãi trong các ngành công nghiệp.',
//       },
//     ]);
//   }
//   const response = await fetchFeatureProductsAsync('vi-Vn');
//   const items = response.attributes.data.map((item) => ({
//     title: item.attributes.name,
//     previewImage: item.attributes.shortDescription,
//     description: item.attributes.shortDescription,
//   }));
//   return response;
// };
import mapBackgroundImage from '@/public/map.png';
export default async function Home() {
  // const items = await getFeatureProducts();
  return (
    <>
      <ImageSliderComponent />

      <SectionWrapper
        backgroundImage={mapBackgroundImage}
        py='medium'
        background='transparent'
      >
        <div className='w-full h-full mb-32'>
          <FeaturesListSection />
        </div>
        <IntroSection />
      </SectionWrapper>

      {/* <SectionWrapper
        py='medium'
        sectionTitle='Sản phẩm và Dịch vụ'
        sectionIcon={<ShoppingIcon />}
      >
        <ProductsListSection />
      </SectionWrapper> */}
    </>
  );
}
