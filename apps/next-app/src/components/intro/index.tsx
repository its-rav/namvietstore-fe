import { IntroPanel,IntroPanelItemType } from '@namviet-fe/core-ui';

const IntroSection = () => {
  const introPanelItem: IntroPanelItemType = {
    title: 'Công ty TNHH Thiết bị nhiệt Nam Việt',
    establisedTime: 'Thành lập vào tháng 06 năm 2010',
    description:
      'Công ty TNHH Thiết bị nhiệt Nam Việt chuyên cung cấp sản phẩm và dịch vụ trong lĩnh vực thiết bị nhiệt nóng, thiết bị kiểm soát và đo đạc lưu lượng chất lỏng chất khí trong các ngành công nghiệp khu vực Đông Nam Á.',
  };
  return <IntroPanel introPanelItem={introPanelItem} buttonText='Đọc thêm' />;
};

export default IntroSection;
