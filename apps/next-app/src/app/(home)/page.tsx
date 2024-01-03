'use client';

import FeaturesListSection from '@/components/featureList/FeatureList';
import ImageSliderComponent from '@/components/imageSlider/ImageSlider';
import IntroSection from '@/components/intro';
import ProductsListSection from '@/components/productsList';
import SectionWrapper from '@/components/sections/section-wrapper';

export default function Home() {
  return (
    <>
      <ImageSliderComponent />
      <SectionWrapper background='transparent' py='large'>
        <FeaturesListSection />
        <IntroSection />
      </SectionWrapper>

      <SectionWrapper background='transparent' py='large'>
        <ProductsListSection />
      </SectionWrapper>
    </>
  );
}
