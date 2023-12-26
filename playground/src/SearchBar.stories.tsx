import type { Story, StoryDefault } from '@ladle/react';
import { SearchBar } from '@namviet-fe/core-ui';
import React from 'react';
import 'regenerator-runtime/runtime';

export default {
  title: '@nv-fe/core-ui/SearchBar',
} satisfies StoryDefault<typeof SearchBar>;

const onQueryChange = (e: React.ChangeEvent<HTMLInputElement>) => {
  console.log(e.target.value);
};

const onClick = () => {
  window.alert('Redirect to search results');
};

export const Default: Story = () => (
  <SearchBar
    placeholder='Search all products...'
    onQueryChange={onQueryChange}
    onClick={onClick}
  />
);
