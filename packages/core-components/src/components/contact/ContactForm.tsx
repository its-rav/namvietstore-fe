import React, { useRef, useState } from 'react';
import ReCAPTCHA from 'react-google-recaptcha';

import { Button } from '../buttons';

export type InfoContactFormType = {
  [key: string]: string;
  username: string;
  companyName: string;
  phoneNumber: string;
  email: string;
  text: string;
};

type ContactFormProps = {
  submitForm?: (data: InfoContactFormType) => Promise<void>;
  sitekey: string;
};

const ContactForm: React.FC<ContactFormProps> = ({
  submitForm,
  sitekey = '6Leo6C8pAAAAAKHtfDMqa2YZLYf6D1VNVQKcixha',
}) => {
  const [reCapchaToken, setReCapchaToken] = useState<string | null>('');
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
  const onChangeReCapcha = (token: string | null) => {
    setReCapchaToken(token);
  };
  const onExpiredReCapcha = () => {
    setReCapchaToken('');
  };
  const onSubmit = async function (e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    await submitForm?.(infoContactForm.current);
  };
  //#F3F3F3 not found
  return (
    <div className='px-6 py-8 font-primary leading-6 font-normal bg-[#F3F3F3]'>
      <h2 className='font-bold text-xl'>Liên hệ</h2>
      <p>Các trường hợp bắt buộc được đánh dấu *</p>
      <form onSubmit={onSubmit}>
        <div className='grid grid-cols-2 gap-1.5 py-3.5'>
          <input
            type='text'
            name='username'
            id='username'
            placeholder='Họ và tên*'
            className='px-[11px] py-[3px]'
            onChange={onChangeInput}
          />
          <input
            type='text'
            name='companyName'
            id='companyName'
            placeholder='Tên công ty*'
            className='px-[11px] py-[3px]'
            onChange={onChangeInput}
          />
          <input
            type='text'
            name='phoneNumber'
            id='phoneNumber'
            placeholder='ĐT/số điện thoại*'
            className='px-[11px] py-[3px]'
            onChange={onChangeInput}
          />
          <input
            type='email'
            name='email'
            id='email'
            placeholder='Email*'
            className='px-[11px] py-[3px]'
            onChange={onChangeInput}
          />
          <textarea
            name='text'
            id='text'
            className='col-span-2 px-[11px] py-[3px] h-[100px]'
            placeholder='Thông điệp'
            onChange={onChangeInput}
          />
          <ReCAPTCHA
            sitekey={sitekey}
            className='scale-75 origin-top-left'
            onChange={onChangeReCapcha}
            onExpired={onExpiredReCapcha}
          />
        </div>
        <Button
          type='submit'
          disabled={reCapchaToken === null || reCapchaToken.trim() === ''}
        >
          Gửi
        </Button>
      </form>
    </div>
  );
};

export default ContactForm;
