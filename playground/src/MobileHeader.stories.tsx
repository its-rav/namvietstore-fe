import type { Story, StoryDefault } from '@ladle/react';
import { MobileHeader } from '@namviet-fe/core-ui';
import React from 'react';
import 'regenerator-runtime/runtime';

export default {
  title: '@nv-fe/core-ui/MobileHeader',
} satisfies StoryDefault<typeof MobileHeader>;

const onClick = () => {
  window.alert('Redirect');
};

const toggleSideBar = () => {
  window.alert('toggleSideBar');
};

export const Default: Story = () => (
  <MobileHeader
    placeholder='Tìm kiếm sản phẩm'
    toggleSideBar={toggleSideBar}
    onClick={onClick}
  />
);
