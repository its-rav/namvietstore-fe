import { MarqueeSection } from '@namviet-fe/core-ui';

import SectionWrapper from '@/components/sections/section-wrapper';

import { getMarqueeItems } from './utils';

export default async function BrandMarquee() {
  const items = await getMarqueeItems();
  return (
    <SectionWrapper background='transparent' py='large' isFullWidth={true}>
      <MarqueeSection marqueeItems={items} autoFill={true} gradient={true} />
    </SectionWrapper>
  );
}
