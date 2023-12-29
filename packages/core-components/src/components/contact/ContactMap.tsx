import React from 'react';

export type ContactMapItemType = {
  srcMap: string;
};

type ContactMapProps = {
  contactMapItem: ContactMapItemType;
};

const ContactMap: React.FC<ContactMapProps> = ({ contactMapItem }) => {
  return contactMapItem?.srcMap ? (
    <iframe
      src={contactMapItem.srcMap}
      width='100%'
      height='333'
      allowFullScreen
      loading='lazy'
      referrerPolicy='no-referrer-when-downgrade'
    />
  ) : (
    <></>
  );
};

export default ContactMap;
