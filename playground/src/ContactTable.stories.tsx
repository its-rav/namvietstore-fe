import type { Story, StoryDefault } from '@ladle/react';
import { type ContactTableItemType, ContactTable } from '@namviet-fe/core-ui';
import React from 'react';

export default {
  title: '@nv-fe/core-ui/ContactTable',
} satisfies StoryDefault<typeof ContactTable>;

const contactTableItem: ContactTableItemType = {
  title: 'THIẾT BỊ NHIỆT NAM VIỆT',
  subTitle: 'CÔNG TY TNHH',
  description:
    'Công ty TNHH Thiết bị nhiệt Nam Việt GCNDKKD: 03456789 do Sở Kế hoạch và Đầu tư Thành phố Hồ Chí Minh cấp ngày 16/10/2018 ( Đăng ký thay đổi lần thứ 1 ngày 17/1/2023)',
  address:
    'Phòng 21 Lầu 14, Tháp 1, Toà nhà Saigon Centre, 65 Lê lợi, Phường Bến Nghé, Quận 1, Tp.HCM, Việt Nam',
  phone: '+ 84 7646578696',
  email: 'thaiduong.huynh@gmail.com',
};

export const Default: Story = (args) => (
  <div className='bg-secondary' style={{ padding: '20px' }}>
    <ContactTable
      contactTableItem={contactTableItem}
      stamp={
        <img
          src={
            'http://online.gov.vn/PublicImages/2015/08/27/11/20150827110756-dathongbao.png'
          }
          alt='Bo Cong Thuong Stamp'
        />
      }
      {...args}
    />
  </div>
);
