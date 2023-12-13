import React from 'react';
import { Button } from '../buttons';
import ReCAPTCHA from 'react-google-recaptcha';

export type ContactFormType = {};

type ContactFormProps = {
  contactForm?: ContactFormType;
};

const ContactForm: React.FC<ContactFormProps> = ({ contactForm }) => {
  const onChange = () => {};
  return (
    <div
      className='px-6 py-8 font-primary leading-6 font-normal'
      style={{ backgroundColor: '#F3F3F3' }}
    >
      <h2 className='font-bold text-xl'>Liên hệ</h2>
      <p>Các trường hợp bắt buộc được đánh dấu *</p>
      <div className='grid grid-cols-2 gap-1.5 py-3.5'>
        <input
          type='text'
          className=''
          placeholder='Họ và tên*'
          style={{ padding: '3px 11px' }}
        />
        <input
          type='text'
          className=''
          placeholder='Tên công ty*'
          style={{ padding: '3px 11px' }}
        />
        <input
          type='text'
          className=''
          placeholder='ĐT/số điện thoại*'
          style={{ padding: '3px 11px' }}
        />
        <input
          type='email'
          className=''
          placeholder='Email*'
          style={{ padding: '3px 11px' }}
        />
        <textarea
          className='col-span-2'
          placeholder='Thông điệp'
          style={{ padding: '3px 11px', height: '100px' }}
        />
        <ReCAPTCHA
          sitekey='6Leo6C8pAAAAAKHtfDMqa2YZLYf6D1VNVQKcixha'
          onChange={onChange}
          style={{
            transform: 'scale(0.77)',
            transformOrigin: '0 0',
          }}
        />
      </div>
      <Button>Gửi</Button>
    </div>
  );
};

export default ContactForm;
