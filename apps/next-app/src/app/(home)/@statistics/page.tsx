'use server';

import { StatisticSection } from '@namviet-fe/core-ui';

export const getStatisticItems = async () => {
  const res = await Promise.resolve([
    {
      title: 'mặt hàng',
      statistic: 500,
    },
    {
      title: 'khách hàng hài lòng',
      statistic: 100,
    },
    {
      title: 'dự án thành công',
      statistic: 200,
    },
    {
      title: 'thành lập doanh nghiệp',
      statistic: 2010,
    },
  ]);

  return res;
};

export default async function Statistics() {
  const statisticItems = await getStatisticItems();
  return (
    <>
      <StatisticSection statisticItems={statisticItems} />
    </>
  );
}
