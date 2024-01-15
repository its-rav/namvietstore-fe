'use server';

import { ContactMap, ContactTable, MapIcon } from '@namviet-fe/core-ui';
import Image from 'next/image';

export default async function Footer() {
  return (
    <footer className='py-5 bg-secondary w-full'>
      <div className='flex max-w-7xl mx-auto items-center'>
        <ContactTable
          contactTableItem={{
            subTitle: 'Công ty TNHH',
            title: 'Thiết bị nhiệt Nam Việt',
            description:
              'Công ty TNHH Thiết bị nhiệt Nam Việt GCNDKKD: 03456789 do Sở Kế hoạch và Đầu tư Thành phố Hồ Chí Minh cấp ngày 16/10/2018 ( Đăng ký thay đổi lần thứ 1 ngày 17/1/2023)',
            address:
              'Phòng 21 Lầu 14, Tháp 1, Toà nhà Saigon Centre, 65 Lê lợi, Phường Bến Nghé, Quận 1, Tp.HCM, Việt Nam',
            phone: '+ 84 7646578696',
            email: 'thaiduong.huynh@gmail.com',
          }}
          stamp={
            <Image
              src={
                'http://online.gov.vn/PublicImages/2015/08/27/11/20150827110756-dathongbao.png'
              }
              alt='Bo Cong Thuong Stamp'
              width={200}
              height={200}
            />
          }
        />
        <div className='flex h-full w-4/5 border-l border-slate-500 ml-12 pl-12'>
          <div className='w-full'>
            <ContactMap
              contactMapItem={{
                srcMap:
                  'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7560.800330218261!2d106.6943383706771!3d10.785106391105177!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31752f4b3330bcc7%3A0x4db964d76bf6e18e!2zVGjhuqNvIEPhuqdtIFZpw6puIFPDoGkgR8Oybg!5e0!3m2!1svi!2s!4v1702550513565!5m2!1svi!2s',
              }}
              mapIcon={<MapIcon />}
              mapTitle='Bản đồ'
            />
          </div>
        </div>
      </div>
    </footer>
  );
}
