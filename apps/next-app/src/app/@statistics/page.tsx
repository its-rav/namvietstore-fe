'use server';

import { StatisticSection } from '@namviet-fe/core-ui';

import SectionWrapper from '@/components/sections/section-wrapper';

import { getStatisticItems } from './utils';

export default async function Statistics() {
  const statisticItems = await getStatisticItems();
  return (
    <SectionWrapper className='bg-primary' py='large'>
      <StatisticSection statisticItems={statisticItems} />
    </SectionWrapper>
  );
}
