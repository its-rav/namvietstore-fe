'use server';

import { ContactMap, ContactTable, MapIcon } from '@namviet-fe/core-ui';
import Image from 'next/image';

import { getFooter } from './utils';

export default async function Footer() {
  const footer = await getFooter();

  const { contact, stamp, map } = footer;
  return (
    <footer className='py-5 bg-secondary w-full'>
      <div className='flex max-w-7xl mx-auto items-center'>
        <ContactTable
          contactTableItem={contact}
          stamp={
            <Image src={stamp.src} alt={stamp.alt} width={200} height={200} />
          }
        />
        <div className='flex h-full w-4/5 border-l border-slate-500 ml-12 pl-12'>
          <div className='w-full'>
            <ContactMap
              contactMapItem={{
                srcMap: map.srcMap,
              }}
              // TODO: deal with mapping icon
              mapIcon={<MapIcon />}
              mapTitle='Bản đồ'
            />
          </div>
        </div>
      </div>
    </footer>
  );
}
