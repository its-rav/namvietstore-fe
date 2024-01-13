import {
  FeaturesList,
  FeaturesListItemType,
  HeadphonesIcon,
  KeyIcon,
  ProductIcon,
  UserIcon,
} from '@namviet-fe/core-ui';

import { getFFUseApi } from '@/api/common/env';
import { fetchFeaturesAsync } from '@/api/home-page';

export const getFeatures = async () => {
  const useApi = getFFUseApi();

  if (!useApi) {
    return await Promise.resolve([
      {
        icon: <ProductIcon />,
        title: 'Sản phẩm',
        description: 'Đa dạng và chất lượng',
        id: 1,
      },
      {
        icon: <HeadphonesIcon />,
        title: 'Dịch vụ',
        description: 'Uy tín và tận tâm',
        id: 2,
      },
      {
        icon: <KeyIcon />,
        title: 'Trách nhiệm',
        description: 'Đồng hành và phát triển cùng khách hàng',
        id: 3,
      },
      {
        icon: <UserIcon />,
        title: 'Nhân viên',
        description: 'Đội ngũ giàu kinh nghiệm, có chuyên môn',
        id: 4,
      },
    ]);
  }

  const res = await fetchFeaturesAsync('vi-Vn');

  // TODO: add icon for api
  const iconMap = [
    <ProductIcon />,
    <HeadphonesIcon />,
    <KeyIcon />,
    <UserIcon />,
  ];

  console.log(res);
  return res.attributes.Features.map((item, index) => ({
    id: item.id.toString(),
    icon: iconMap[index],
    title: item.name,
    description: item.description,
  }));
};

const FeaturesListSection = async () => {
  const items: FeaturesListItemType[] = await getFeatures();

  return <FeaturesList items={items} />;
};

export default FeaturesListSection;
