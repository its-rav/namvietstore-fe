'use client';

import { Button } from '@namviet-fe/core-ui';
import { useRouter } from 'next/navigation';

import FeaturesListSection from '@/components/featureList/FeatureList';
import IntroSection from '@/components/intro';
import ProductsListSection from '@/components/productsList';
import SectionWrapper from '@/components/sections/section-wrapper';
import IntroImageSection from '@/components/intro/imagePanel';
import { IntroPanelCard } from '@namviet-fe/core-ui';

export default function Home() {
  const router = useRouter();
  return (
    <div>
      {/* < CategoryButton
        onClick={() => {}}
      /> */}
      <Button
        onClick={() => {
          router.push('/products?page=1&total=20');
        }}
      >
        Product Page
      </Button>
      <Button

        onClick={() => {
          router.push('/contact');
        }}
      >
        Contact Page
      </Button>
      <SectionWrapper background='transparent' py='large'>
        <FeaturesListSection />
        <IntroSection />
        <IntroImageSection />
        <div className=''>
          <IntroPanelCard 
            icon='https://thietbinhietnv.com/storage/app/uploads/public/5df/64d/31d/5df64d31d51d8117549829.jpg'
            title='Gia tri cot loi'
            description='Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.'
          />
          <IntroPanelCard 
            
            />
          <IntroPanelCard 
            
            />
        </div>
      </SectionWrapper>

      <SectionWrapper background='transparent' py='large'>
        <ProductsListSection />
      </SectionWrapper>
    </div>
  );
}
