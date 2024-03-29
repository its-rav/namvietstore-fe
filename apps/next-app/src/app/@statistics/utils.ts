import { getFFUseApi } from '@/api/common/env';
import { fetchStatisticsAsync } from '@/api/home-page';

export const getStatisticItems = async () => {
  const useApi = getFFUseApi();

  if (!useApi) {
    return await Promise.resolve([
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
  }

  const res = await fetchStatisticsAsync('vi-Vn');

  return res.attributes.statistics.map((item) => ({
    title: item.title,
    statistic: item.value,
  }));
};
