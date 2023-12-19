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
  submitForm: (data: InfoContactFormType) => void;
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
    console.log(token);
  };
  const onExpiredReCapcha = () => {
    setReCapchaToken('');
  };
  const onSubmit = function (e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    submitForm(infoContactForm.current);
  };

  return (
    <div
      className='px-6 py-8 font-primary leading-6 font-normal'
      style={{ backgroundColor: '#F3F3F3' }}
    >
      <h2 className='font-bold text-xl'>Liên hệ</h2>
      <p>Các trường hợp bắt buộc được đánh dấu *</p>
      <form onSubmit={onSubmit}>
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
            sitekey={sitekey}
            style={{
              transform: 'scale(0.77)',
              transformOrigin: '0 0',
            }}
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
