import React from 'react';

import { useI18nContext } from '@/i18n/i18n-react';
import isNotNull from '@/utils/isNotNull';

export type ContactTableItemType = {
  title?: string;
  subTitle?: string;
  description: string;
  address: string;
  phone: string;
  email: string;
};

type ContactTableProps = {
  contactTableItem: ContactTableItemType;
  stamp?: React.ReactNode;
};

const ContactTable: React.FC<ContactTableProps> = ({
  contactTableItem,
  stamp,
}) => {
  const { LL: t } = useI18nContext();
  return (
    <div className='md:w-96 font-primary leading-normal font-normal md:text-base text-white sm:text-sm sm:w-full'>
      {isNotNull(contactTableItem.subTitle) && (
        <h2 className='md:text-xl font-bold uppercase sm:text-base'>
          {contactTableItem.subTitle}
        </h2>
      )}
      {isNotNull(contactTableItem.title) && (
        <h2 className='md:text-xl font-bold uppercase sm:text-base'>
          {contactTableItem.title}
        </h2>
      )}
      <div className=' flex items-center bg-white w-full h-1 my-4'>
        <div className='bg-primary w-1/5 h-2'></div>
      </div>
      <p className='text-justify'>{contactTableItem.description}</p>
      <h3 className='md:text-lg my-4 sm:text-base'>
        {t.contactTable.contact()}
      </h3>
      <div className=' flex items-center bg-white w-full h-1 my-4'>
        <div className='bg-primary w-1/5 h-2'></div>
      </div>
      <div className='grid grid-cols-6 gap-3 w-11/12'>
        <p className='col-span-2'>{t.contactTable.address()}</p>
        <p className='col-span-4 text-justify'>{contactTableItem.address}</p>
        <p className='col-span-2'>{t.contactTable.tel()}</p>
        <p className='col-span-4 text-justify'>{contactTableItem.phone}</p>
        <p className='col-span-2'>{t.contactTable.email()}</p>
        <p className='col-span-4 text-justify'>{contactTableItem.email}</p>
        <div className='col-span-2 mt-7'></div>
        {stamp && (
          <div className='col-span-4 mt-7 w-52 h-20 object-cover'>{stamp}</div>
        )}
      </div>
    </div>
  );
};

export default ContactTable;
