// {{baseUrl}}/general-setting?fields=contact&populate=contact,, contact.phoneNumbers&locale=vi-VN

// {
//     "data": {
//         "id": 2,
//         "attributes": {
//             "company": "Công ty TNHH Thiết bị nhiệt Nam Việt",
//             "companyDescription": "Thành lập vào tháng 06 năm 2010, công ty TNHH Thiết bị nhiệt Nam Việt chuyên cung cấp sản phẩm và dịch vụ trong lĩnh vực thiết bị nhiệt nóng, thiết bị kiểm soát và đo đạc lưu lượng chất lỏng chất khí trong các ngành công nghiệp khu vực Đông Nam Á. Khách hàng đến với chúng tôi qua mỗi công trình vì chúng tôi luôn đồng hành với họ, đồng hành với sự phát triển của khách hàng đồng nghĩa với việc chúng tôi lớn mạnh lên và mở rộng các dòng sản phẩm cũng như dịch vụ theo thời gian",
//             "createdAt": "2024-01-05T13:04:59.605Z",
//             "updatedAt": "2024-01-05T13:05:01.561Z",
//             "publishedAt": "2024-01-05T13:05:01.548Z",
//             "locale": "vi-VN",
//             "contact": {
//                 "id": 2,
//                 "address": "Hotel Sunset Boulevard",
//                 "email": "nvs@gmail.com",
//                 "company": "Công ty TNHH Thiết bị nhiệt Nam Việt",
//                 "website": "www.namviet.com",
//                 "fax": "0969615259",
//                 "phoneNumbers": [
//                     {
//                         "id": 3,
//                         "phoneNumber": "+91 9876543210 ",
//                         "phoneOwner": "Mr. Duong"
//                     },
//                     {
//                         "id": 4,
//                         "phoneNumber": "+91 9876543210",
//                         "phoneOwner": "Ms. Huynh"
//                     }
//                 ]
//             }
//         }
//     },
//     "meta": {}
// }

import { getOne } from '../common';
import { MediaType, SingleData } from '../types';

type Features = {
  id: number;
  name: string;
  description: string;
};

type Statistic = {
  id: number;
  title: string;
  value: number;
};

type Partner = {
  id: number;
  name: string;
  website: string;
  logo: MediaType;
};

type HomePageAttributes = {
  Features: Features[];
  statistic: Statistic[];
  Partners: Partner[];
};

const RESOURCE_NAME = '/home-page';

export const fetchFeaturesAsync = async (
  locale: string
): Promise<SingleData<HomePageAttributes>> => {
  const response = await getOne<HomePageAttributes>(RESOURCE_NAME, {
    populate: 'Features',
    locale,
  });

  return response.data;
};

export const fetchPartnersAsync = async (
  locale: string
): Promise<SingleData<HomePageAttributes>> => {
  const response = await getOne<HomePageAttributes>(RESOURCE_NAME, {
    populate: 'Partners.logo',
    locale,
  });

  console.log(response.data.attributes.Partners);

  return response.data;
};
