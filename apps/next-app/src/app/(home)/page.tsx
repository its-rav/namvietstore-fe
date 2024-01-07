'use client';

import { Button, ShoppingIcon } from '@namviet-fe/core-ui';
import { useRouter } from 'next/navigation';

import FeaturesListSection from '@/components/featureList/FeatureList';
import IntroSection from '@/components/intro';
import ProductsListSection from '@/components/productsList';
import SectionWrapper from '@/components/sections/section-wrapper';

import mapBackgroundImage from '@/public/map.png';
export default function Home() {
  return (
    <>
      <div className='flex absolute top-0 left-0'>
        <Button
          onClick={() => {
            const router = useRouter();
            router.push('/products?page=1&total=20');
          }}
        >
          Product Page
        </Button>
      </div>
      <div className='h-96 bg-gray-300'>Place holder for image slider</div>

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
