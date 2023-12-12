import React from 'react';

export type ContactFormType = {};

type ContactFormProps = {
  contactForm?: ContactFormType;
};

const ContactForm: React.FC<ContactFormProps> = ({ contactForm }) => {
  return (
    <div
      className='px-5 py-7 font-primary leading-6 font-normal md:w-3/5 sm:w-full'
      style={{ backgroundColor: '#F3F3F3' }}
    >
      <h2 className='font-bold text-xl'>Liên hệ</h2>
      <p>Các trường hợp bắt buộc được đánh dấu *</p>
    </div>
  );
};

export default ContactForm;
