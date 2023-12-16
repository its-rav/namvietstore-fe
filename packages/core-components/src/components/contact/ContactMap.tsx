import React from 'react';

export type ContactMapItemType = {
  srcMap: string;
};

type ContactMapProps = {
  contactMapItem: ContactMapItemType;
};

const ContactMap: React.FC<ContactMapProps> = ({ contactMapItem }) => {
  return contactMapItem?.srcMap ? (
    <div className=''>
      <iframe
        src={contactMapItem.srcMap}
        width='100%'
        height='333'
        style={{ border: 0 }}
        allowFullScreen
        loading='lazy'
        referrerPolicy='no-referrer-when-downgrade'
      />
    </div>
  ) : (
    <></>
  );
};

export default ContactMap;
