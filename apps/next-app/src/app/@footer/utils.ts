import { getCmsBaseUrl, getFFUseApi } from '@/api/common/env';
import { fetchGeneralSettingAsync } from '@/api/general-settings';

export const getFooter = async () => {
  const useApi = getFFUseApi();

  if (!useApi) {
    return await Promise.resolve({
      contact: {
        subTitle: 'Công ty TNHH',
        title: 'Thiết bị nhiệt Nam Việt',
        description:
          'Công ty TNHH Thiết bị nhiệt Nam Việt GCNDKKD: 03456789 do Sở Kế hoạch và Đầu tư Thành phố Hồ Chí Minh cấp ngày 16/10/2018 ( Đăng ký thay đổi lần thứ 1 ngày 17/1/2023)',
        address:
          'Phòng 21 Lầu 14, Tháp 1, Toà nhà Saigon Centre, 65 Lê lợi, Phường Bến Nghé, Quận 1, Tp.HCM, Việt Nam',
        phone: '+ 84 7646578696',
        email: 'thaiduong.huynh@gmail.com',
      },
      stamp: {
        src: 'http://online.gov.vn/PublicImages/2015/08/27/11/20150827110756-dathongbao.png',
        alt: 'Bo Cong Thuong Stamp',
      },
      map: {
        srcMap:
          'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7560.800330218261!2d106.6943383706771!3d10.785106391105177!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31752f4b3330bcc7%3A0x4db964d76bf6e18e!2zVGjhuqNvIEPhuqdtIFZpw6puIFPDoGkgR8Oybg!5e0!3m2!1svi!2s!4v1702550513565!5m2!1svi!2s',
      },
    });
  }

  const cmsBaseUrl = getCmsBaseUrl();

  const res = await fetchGeneralSettingAsync('vi-Vn');

  return {
    contact: {
      subTitle: res.attributes.contact.company,
      // TODO: remove this hardcode
      title: '',
      // TODO: remove this hardcode
      description:
        'Công ty TNHH Thiết bị nhiệt Nam Việt GCNDKKD: 03456789 do Sở Kế hoạch và Đầu tư Thành phố Hồ Chí Minh cấp ngày 16/10/2018 ( Đăng ký thay đổi lần thứ 1 ngày 17/1/2023)',
      address: res.attributes.contact.address,
      phone: res.attributes.contact.phoneNumbers[0].phoneNumber,
      email: res.attributes.contact.email,
    },
    stamp: {
      src: cmsBaseUrl + res.attributes.stamp.data.attributes.url,
      alt: res.attributes.stamp.data.attributes.alternativeText,
    },
    map: {
      // TODO: remove this hardcode
      srcMap:
        'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7560.800330218261!2d106.6943383706771!3d10.785106391105177!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31752f4b3330bcc7%3A0x4db964d76bf6e18e!2zVGjhuqNvIEPhuqdtIFZpw6puIFPDoGkgR8Oybg!5e0!3m2!1svi!2s!4v1702550513565!5m2!1svi!2s',
    },
  };
};
