import { IntroPanel, IntroPanelItemType } from '@namviet-fe/core-ui';

import { getFFUseApi } from '@/api/common/env';
import { fetchIntroductionAsync } from '@/api/home-page';

export const getIntroduction = async () => {
  const useApi = getFFUseApi();

  if (!useApi) {
    return await Promise.resolve({
      title: 'Công ty TNHH Thiết bị nhiệt Nam Việt',
      establisedTime: 'Thành lập vào tháng 06 năm 20',
      description:
        'Công ty TNHH Thiết bị nhiệt Nam Việt chuyên cung cấp sản phẩm và dịch vụ trong lĩnh vực thiết bị nhiệt nóng, thiết bị kiểm soát và đo đạc lưu lượng chất lỏng chất khí trong các ngành công nghiệp khu vực Đông Nam Á.',
    });
  }

  const res = await fetchIntroductionAsync('vi-Vn');

  return {
    title: res.attributes.Introduction.Title,
    establisedTime: res.attributes.Introduction.Subtitle,
    description: res.attributes.Introduction.Description,
  };
};

const IntroSection = async () => {
  const introPanelItem: IntroPanelItemType = await getIntroduction();
  return <IntroPanel introPanelItem={introPanelItem} buttonText='Đọc thêm' />;
};

export default IntroSection;
