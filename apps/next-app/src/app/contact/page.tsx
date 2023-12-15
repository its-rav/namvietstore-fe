'use client';
import { Button } from '@namviet-fe/core-ui';
import { Contact } from '@namviet-fe/core-ui';

export default function ContactPage() {
  return (
    <div className='max-w-7xl mx-auto'>
      <Contact
        contactItem={{
          phones: ['0969615251', '0969615252'],
          faxes: ['0969615253'],
          addresses: [
            'Phòng 21 Lầu 14, Tháp 1, Lê Lợi, Phường Bến Thành, Quận 1, Saigon Centre, 65 Lê Lợi, Phường Bến Thành, Quận 1, Ho Chi Minh',
          ],
          taxCodes: ['0969615254'],
          emails: ['contact@abc.com'],
          websites: ['www.abc.com'],
        }}
      ></Contact>
    </div>
  );
}
