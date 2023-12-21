'use client';

import { Button } from '@namviet-fe/core-ui';
import { useRouter } from 'next/navigation';

import FeaturesListSection from '@/components/featureList/FeatureList';
import IntroSection from '@/components/intro';
import ProductsListSection from '@/components/productsList';
import SectionWrapper from '@/components/sections/section-wrapper';

export default function Home() {
  const router = useRouter();
  return (
    <>
      <Button
        onClick={() => {
          router.push('/products');
        }}
      >
        Product Page
      </Button>

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
