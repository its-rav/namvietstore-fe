'use server';

import { Contact, ContactForm, ContactMap } from '@namviet-fe/core-ui';

export default async function ContactPage() {
  return (
    <section className='max-w-7xl mx-auto'>
      <div className='hidden md:block text-2xl/6 text-center py-5 mb-7'>
        <p className='inline font-medium mr-3'>Liên hệ</p>
        <p className='inline font-bold text-primary'>
          Công ty TNHH Thiết bị nhiệt Nam Việt
        </p>
      </div>
      <div className='block md:hidden text-lg/6 text-center py-3'>
        <p className='inline font-medium mr-3 text-secondary'>Công ty TNHH</p>
        <p className='inline font-bold text-primary'>Thiết Bị Nhiệt Nam Việt</p>
      </div>
      <div className='grid grid-cols-12 gap-x-4'>
        <div className='col-span-12 md:col-span-5 px-5 py-4'>
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
          />
        </div>
        <div className='col-span-12 md:col-span-7 px-5 py-4'>
          <ContactForm sitekey='6Leo6C8pAAAAAKHtfDMqa2YZLYf6D1VNVQKcixha' />
        </div>
      </div>
      <div className='pb-32 pt-14 hidden md:block px-5 py-4'>
        <ContactMap
          contactMapItem={{
            srcMap:
              'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7560.800330218261!2d106.6943383706771!3d10.785106391105177!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31752f4b3330bcc7%3A0x4db964d76bf6e18e!2zVGjhuqNvIEPhuqdtIFZpw6puIFPDoGkgR8Oybg!5e0!3m2!1svi!2s!4v1702550513565!5m2!1svi!2s',
          }}
        />
      </div>
    </section>
  );
}
