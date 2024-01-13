import { MarqueeSection } from '@namviet-fe/core-ui';

import SectionWrapper from '@/components/sections/section-wrapper';

import { getMarqueeItems } from './utils';

export default async function BrandMarquee() {
  const items = await getMarqueeItems();
  return (
    <SectionWrapper className='bg-primary' py='large'>
      <MarqueeSection marqueeItems={items} autoFill={true} gradient={true} />
    </SectionWrapper>
  );
}
