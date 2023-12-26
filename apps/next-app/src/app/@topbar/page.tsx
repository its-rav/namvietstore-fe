'use client';

import { DropdownButton, EnIcon, TopBar, ViIcon } from '@namviet-fe/core-ui';

export default function Footer() {
  return (
    <aside className='fixed w-full'>
      <TopBar
        contact1={{
          name: 'Mr. Duong',
          phoneNumber: '+91 9876543210',
        }}
        contact2={{
          name: 'Mr. Huynh',
          phoneNumber: '+91 9876543210',
        }}
        languageButton={
          <DropdownButton
            selected='vn'
            options={[
              {
                key: 'en',
                label: 'English',
                icon: <EnIcon />,
              },
              {
                key: 'vn',
                label: 'Tiếng Việt',
                icon: <ViIcon />,
              },
            ]}
          />
        }
      />
    </aside>
  );
}
