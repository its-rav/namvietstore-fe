import type { Story, StoryDefault } from '@ladle/react';
import { type ButtonProps, Button } from '@namviet-fe/core-ui';
import { HamburgerIcon, WhitePlusIcon } from '@namviet-fe/core-ui';
import React from 'react';
import 'regenerator-runtime/runtime';
import 'regenerator-runtime/runtime';

import '@namviet-fe/core-ui/dist/style.css';
export default {
  title: '@nv-fe/core-ui/buttons/Button',
} satisfies StoryDefault<typeof Button>;

const args = {
  size: 'fit-content',
  loading: false,
};

const argTypes = {
  size : {
    options: ['fit-content', 'sm', 'md', 'lg'],
    control: { type: "radio" }, // or type: inline-radio
    defaultValue: "fit-content",
  },
};

export const Default: Story<ButtonProps> = ({size, loading}) => (
  <Button rightIcon={<WhitePlusIcon />} size={size} loading={loading} children='Đọc thêm' />
);

Default.args = args

Default.argTypes = argTypes

export const NoIcon: Story<ButtonProps> = () => <Button children='Submit' />;

export const LeftIcon: Story<ButtonProps> = () => (
  <Button leftIcon={<WhitePlusIcon />} children='Đọc thêm' />
);

export const Loading: Story<ButtonProps> = () => (
  <Button children='Đọc thêm' isLoading={true} />
);

export const Disabled: Story<ButtonProps> = () => (
  <Button rightIcon={<WhitePlusIcon />} children='Đọc thêm' disabled={true} />
);

export const CategoryButton: Story<ButtonProps> = (props) => (
  <Button
    leftIcon={<HamburgerIcon />}
    backgroundColor='secondary'
    {...props}
  >
    Danh mục sản phẩm
  </Button>
);

CategoryButton.args = args

CategoryButton.argTypes = argTypes
