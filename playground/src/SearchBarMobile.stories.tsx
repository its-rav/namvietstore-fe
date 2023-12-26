import type { Story, StoryDefault } from '@ladle/react';
import { SearchBarMobile } from '@namviet-fe/core-ui';
import React from 'react';
import 'regenerator-runtime/runtime';

export default {
  title: '@nv-fe/core-ui/SearchBarMobile',
} satisfies StoryDefault<typeof SearchBarMobile>;

const onClick = () => {
  window.alert('Redirect');
};

const toggleSideBar = () => {
  window.alert('toggleSideBar');
};

export const Default: Story = () => (
  <SearchBarMobile
    placeholder='Tìm kiếm sản phẩm'
    toggleSideBar={toggleSideBar}
    onClick={onClick}
  />
);
