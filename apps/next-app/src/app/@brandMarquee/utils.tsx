import { getCmsBaseUrl, getFFUseApi } from '@/api/common/env';
import { fetchPartnersAsync } from '@/api/home-page';

export const getMarqueeItems = async () => {
  const useApi = getFFUseApi();

  if (!useApi) {
    return await Promise.resolve([
      {
        id: 'PH',
        url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/f1/Pornhub-logo.svg/1200px-Pornhub-logo.svg.png',
        alt: 'PH logo',
      },
      {
        id: 'microsoft',
        url: 'https://blogs.microsoft.com/wp-content/uploads/prod/2012/08/8867.Microsoft_5F00_Logo_2D00_for_2D00_screen.jpg',
        alt: 'microsoft logo',
      },
      {
        id: 'google',
        url: 'https://nld.mediacdn.vn/thumb_w/540/2015/new-google-logo-1441170719116.png',
        alt: 'google logo',
      },
      {
        id: 'twitter',
        url: 'https://inrenhat.com/wp-content/uploads/2022/08/logo-Twitter.jpg',
        alt: 'Twitter logo',
      },
      {
        id: 'netflix',
        url: 'data:image/png;base64,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',
        alt: 'Netflix logo',
      },
    ]);
  }

  const cmsBaseUrl = getCmsBaseUrl();

  const res = await fetchPartnersAsync('vi-Vn');

  return res.attributes.Partners.map((item) => ({
    id: item.id.toString(),
    url: cmsBaseUrl + item.logo.data.attributes.url,
    alt: item.name,
  }));
};
