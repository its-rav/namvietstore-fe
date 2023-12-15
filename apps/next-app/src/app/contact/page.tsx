'use client';
import { ContactForm, Contact, ContactMap } from '@namviet-fe/core-ui';

export default function ContactPage() {
  return (
    <section className='max-w-7xl mx-auto'>
      <div className=' text-lg sm:text-xl text-center py-6 mb-7'>
        <p className='hidden mr-3 sm:inline font-medium'>Liên hệ</p>
        <p className='inline font-bold' style={{ color: '#850000' }}>
          Công ty TNHH Thiết bị nhiệt Nam Việt
        </p>
      </div>
      <div className='grid grid-cols-12 gap-4 mb-14'>
        <div className='col-span-12 sm:col-span-5'>
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
        <div
          className='col-span-12 sm:col-span-7'
          style={{ backgroundColor: '#F3F3F3' }}
        >
          <ContactForm />
        </div>
      </div>
      <div className='pb-32 hidden sm:block'>
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
