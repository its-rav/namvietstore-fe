import React, { useRef } from 'react';
import { Button } from '../buttons';
import ReCAPTCHA from 'react-google-recaptcha';

export type ContactFormItemType = {};

type ContactFormProps = {
  contactFormItem?: ContactFormItemType;
};
type InfoContactFormType = {
  [key: string]: string;
  username: string;
  companyName: string;
  phoneNumber: string;
  email: string;
  text: string;
};

const ContactForm: React.FC<ContactFormProps> = ({ contactFormItem }) => {
  const infoContactForm: React.MutableRefObject<InfoContactFormType> = useRef({
    username: '',
    companyName: '',
    phoneNumber: '',
    email: '',
    text: '',
  });
  const onChangeInput = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    infoContactForm.current[name] = value;
  };
  const submitForm = function (e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    console.log('infoContactForm', infoContactForm.current);
  };

  return (
    <div
      className='px-6 py-8 font-primary leading-6 font-normal'
      style={{ backgroundColor: '#F3F3F3' }}
    >
      <h2 className='font-bold text-xl'>Liên hệ</h2>
      <p>Các trường hợp bắt buộc được đánh dấu *</p>
      <form onSubmit={submitForm}>
        <div className='grid grid-cols-2 gap-1.5 py-3.5'>
          <input
            type='text'
            name='username'
            id='username'
            placeholder='Họ và tên*'
            style={{ padding: '3px 11px' }}
            onChange={onChangeInput}
          />
          <input
            type='text'
            name='companyName'
            id='companyName'
            placeholder='Tên công ty*'
            style={{ padding: '3px 11px' }}
            onChange={onChangeInput}
          />
          <input
            type='text'
            name='phoneNumber'
            id='phoneNumber'
            placeholder='ĐT/số điện thoại*'
            style={{ padding: '3px 11px' }}
            onChange={onChangeInput}
          />
          <input
            type='email'
            name='email'
            id='email'
            placeholder='Email*'
            style={{ padding: '3px 11px' }}
            onChange={onChangeInput}
          />
          <textarea
            name='text'
            id='text'
            className='col-span-2'
            placeholder='Thông điệp'
            style={{ padding: '3px 11px', height: '100px' }}
            onChange={onChangeInput}
          />
          <ReCAPTCHA
            sitekey='6Leo6C8pAAAAAKHtfDMqa2YZLYf6D1VNVQKcixha'
            style={{
              transform: 'scale(0.77)',
              transformOrigin: '0 0',
            }}
          />
        </div>
        <Button type='submit'>Gửi</Button>
      </form>
    </div>
  );
};

export default ContactForm;
