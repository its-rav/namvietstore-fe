export async function getStatisticItems() {
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
}
