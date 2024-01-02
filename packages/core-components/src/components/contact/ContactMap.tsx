import React from 'react';

import clsxm from '@/lib/clsxm';

export type ContactMapItemType = {
  srcMap: string;
};

type ContactMapProps = {
  contactMapItem: ContactMapItemType;
  mapTitle?: string;
  mapIcon?: React.ReactNode;
};

const ContactMap: React.FC<ContactMapProps> = ({
  contactMapItem,
  mapTitle,
  mapIcon,
}) => {
  return (
    <div className='flex flex-col'>
      <div className={clsxm('flex gap-x-3', mapTitle && 'mb-6')}>
        {mapIcon && <i className='w-8 h-8'>{mapIcon}</i>}
        {mapTitle && (
          <p className='font-primary text-lg font-normal text-white'>
            {mapTitle}
          </p>
        )}
      </div>
      <div className='h-80'>
        {contactMapItem?.srcMap && (
          <iframe
            src={contactMapItem.srcMap}
            width='100%'
            height='100%'
            allowFullScreen
            loading='lazy'
            referrerPolicy='no-referrer-when-downgrade'
          />
        )}
      </div>
    </div>
  );
};

export default ContactMap;
