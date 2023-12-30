'use client';

import type { Story, StoryDefault } from '@ladle/react';
import { ContactForm } from '@namviet-fe/core-ui';
import React from 'react';

export default {
  title: '@nv-fe/core-ui/contact/ContactForm',
} satisfies StoryDefault<typeof ContactForm>;

export const Default: Story = () => (
  <div
    style={{
      width: '100%',
    }}
    className='grid grid-cols-12 gap-4'
  >
    <div className='col-span-5 col-span-12 md:col-span-5'></div>
    <div className='col-span-7 col-span-12 md:col-span-7'>
      <ContactForm sitekey='6Leo6C8pAAAAAKHtfDMqa2YZLYf6D1VNVQKcixha' />
    </div>
  </div>
);
