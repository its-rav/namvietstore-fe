"use client";

import { StatisticSection } from '@namviet-fe/core-ui';

export default function Statistics() {
  return (
    <>
      <StatisticSection
        statisticItems={[
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
        ]}
      />
    </>
  );
}
