import React from 'react';

export type ContactTableItemType = {
  title: string;
  subTitle: string;
  description: string;
  address: string;
  phone: string;
  email: string;
};

type ContactTableProps = {
  contactTableItem: ContactTableItemType;
};

const ContactTable: React.FC<ContactTableProps> = ({ contactTableItem }) => {
  const isNull = (text: string) => {
    if (text != null && text !== undefined) {
      return true;
    } else {
      return false;
    }
  };

  return (
    <div className='md:w-96 font-primary leading-normal font-normal md:text-base text-white sm:text-sm sm:w-full'>
      <h2 className='md:text-xl font-bold uppercase sm:text-base'>
        {isNull(contactTableItem.subTitle) ? (
          <>
            {contactTableItem.subTitle} <br />
          </>
        ) : (
          ''
        )}
        {isNull(contactTableItem.title) ? contactTableItem.title : ''}
      </h2>
      <div className=' flex items-center bg-white w-full h-1 my-4'>
        <div className='bg-primary w-1/5 h-2'></div>
      </div>
      <p className='text-justify'>{contactTableItem.description}</p>
      <h3 className='md:text-lg my-4 sm:text-base'>Liên hệ</h3>
      <div className=' flex items-center bg-white w-full h-1 my-4'>
        <div className='bg-primary w-1/5 h-2'></div>
      </div>
      <div className='grid grid-cols-6 gap-3 w-11/12'>
        <p className='col-span-2'>Địa chỉ</p>
        <p className='col-span-4 text-justify'>{contactTableItem.address}</p>
        <p className='col-span-2'>Điện thoại</p>
        <a
          className='col-span-4 text-justify'
          href={`tel: ${contactTableItem.phone}`}
        >
          {contactTableItem.phone}
        </a>
        <p className='col-span-2'>Email</p>
        <a
          className='col-span-4 text-justify'
          href={`mailto: ${contactTableItem.email}`}
        >
          {contactTableItem.email}
        </a>
      </div>
    </div>
  );
};

export default ContactTable;
