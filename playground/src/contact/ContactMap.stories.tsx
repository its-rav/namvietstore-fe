import type { Story, StoryDefault } from '@ladle/react';
import { ContactMap, MapIcon } from '@namviet-fe/core-ui';
import React from 'react';

export default {
  title: '@nv-fe/core-ui/contact/ContactMap',
} satisfies StoryDefault<typeof ContactMap>;

export const Default: Story = () => (
  <div
    style={{
      width: '100%',
    }}
  >
    <ContactMap
      contactMapItem={{
        srcMap:
          'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7560.800330218261!2d106.6943383706771!3d10.785106391105177!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31752f4b3330bcc7%3A0x4db964d76bf6e18e!2zVGjhuqNvIEPhuqdtIFZpw6puIFPDoGkgR8Oybg!5e0!3m2!1svi!2s!4v1702550513565!5m2!1svi!2s',
      }}
    />
  </div>
);

export const Footer: Story = () => (
  <div
    style={{
      width: '50%',
      backgroundColor: '#002651',
    }}
  >
    <ContactMap
      contactMapItem={{
        srcMap:
          'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7560.800330218261!2d106.6943383706771!3d10.785106391105177!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31752f4b3330bcc7%3A0x4db964d76bf6e18e!2zVGjhuqNvIEPhuqdtIFZpw6puIFPDoGkgR8Oybg!5e0!3m2!1svi!2s!4v1702550513565!5m2!1svi!2s',
      }}
      mapIcon={<MapIcon />}
      mapTitle='Bản đồ'
    />
  </div>
);
