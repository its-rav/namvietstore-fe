'use server';

import { ShoppingIcon } from '@namviet-fe/core-ui';

import FeaturesListSection from '@/components/featureList/FeatureList';
import ImageSliderComponent from '@/components/imageSlider/ImageSlider';
import IntroSection from '@/components/intro';
import ProductsListSection from '@/components/productsList';
import SectionWrapper from '@/components/sections/section-wrapper';

import mapBackgroundImage from '@/public/map.png';
export default async function Home() {
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

      <SectionWrapper
        py='medium'
        sectionTitle='Sản phẩm và Dịch vụ'
        sectionIcon={<ShoppingIcon />}
      >
        <ProductsListSection />
      </SectionWrapper>
    </>
  );
}
