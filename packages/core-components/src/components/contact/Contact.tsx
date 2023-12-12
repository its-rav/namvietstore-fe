import React from 'react';

import { useI18nContext } from '@/i18n/i18n-react';
import {
  AddressIcon,
  EmailIcon,
  FaxCodeIcon,
  FaxIcon,
  PhoneIcon,
  WebsiteIcon,
} from '@/icons';

export type ContactItemType = {
  phones?: string[];
  faxes?: string[];
  addresses?: string[];
  taxCodes?: string[];
  emails?: string[];
  websites?: string[];
};

type ContactProps = {
  contactItem?: ContactItemType;
};

const Contact: React.FC<ContactProps> = ({ contactItem }) => {
  const { LL: t } = useI18nContext();
  return (
    <div className='font-primary leading-normal font-normal text-base md:w-2/5 sm:w-full'>
      <div className='grid grid-cols-12 gap-x-4 gap-y-8'>
        <div className='col-span-5 flex'>
          <div className='w-7'>
            <PhoneIcon />
          </div>
          <div className='ml-4 mt-1'>
            <p>Số điện thoại</p>
          </div>
        </div>
        <div className=' col-span-7 grid-cols-1'>
          {contactItem?.phones ? (
            contactItem.phones.map((phone, index) => {
              return (
                <p className='mt-1 md:font-normal sm:font-bold' key={index}>
                  {phone}
                </p>
              );
            })
          ) : (
            <></>
          )}
        </div>
        <div className='col-span-5 flex'>
          <div className='w-7'>
            <FaxIcon />
          </div>
          <div className='ml-4 mt-1'>
            <p>Fax</p>
          </div>
        </div>
        <div className=' col-span-7 grid-cols-1'>
          {contactItem?.faxes ? (
            contactItem.faxes.map((fax, index) => {
              return (
                <p className='mt-1' key={index}>
                  {fax}
                </p>
              );
            })
          ) : (
            <></>
          )}
        </div>
        <div className='col-span-5 flex'>
          <div className='w-7'>
            <AddressIcon />
          </div>
          <div className='ml-4 mt-1'>
            <p>Địa chỉ</p>
          </div>
        </div>
        <div className=' col-span-7 grid-cols-1'>
          {contactItem?.addresses ? (
            contactItem.addresses.map((address, index) => {
              return (
                <p className='mt-1' key={index}>
                  {address}
                </p>
              );
            })
          ) : (
            <></>
          )}
        </div>
        <div className='col-span-5 flex'>
          <div className='w-7'>
            <FaxCodeIcon />
          </div>
          <div className='ml-4 mt-1'>
            <p>Mã số thuế</p>
          </div>
        </div>
        <div className=' col-span-7 grid-cols-1'>
          {contactItem?.taxCodes ? (
            contactItem.taxCodes.map((taxCode, index) => {
              return (
                <p className='mt-1' key={index}>
                  {taxCode}
                </p>
              );
            })
          ) : (
            <></>
          )}
        </div>
        <div className='col-span-5 flex'>
          <div className='w-7'>
            <EmailIcon />
          </div>
          <div className='ml-4 mt-1'>
            <p>Email</p>
          </div>
        </div>
        <div className=' col-span-7 grid-cols-1 '>
          {contactItem?.emails ? (
            contactItem.emails.map((email, index) => {
              return (
                <p
                  className='mt-1 md:font-medium sm:font-normal md:underline sm:no-underline'
                  key={index}
                >
                  {email}
                </p>
              );
            })
          ) : (
            <></>
          )}
        </div>
        <div className='col-span-5 flex'>
          <div className='w-7'>
            <WebsiteIcon />
          </div>
          <div className='ml-4 mt-1'>
            <p>Website</p>
          </div>
        </div>
        <div className=' col-span-7 grid-cols-1'>
          {contactItem?.websites ? (
            contactItem.websites.map((website, index) => {
              return (
                <p className='mt-1' key={index}>
                  {website}
                </p>
              );
            })
          ) : (
            <></>
          )}
        </div>
      </div>
    </div>
  );
};

export default Contact;
