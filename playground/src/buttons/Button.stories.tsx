import type { Story, StoryDefault } from "@ladle/react";
import { WhitePlusIcon } from "@namviet-fe/core-ui";
import { type ButtonProps,Button } from "@namviet-fe/core-ui";
import React from "react";
import "regenerator-runtime/runtime";

import "@namviet-fe/core-ui/dist/style.css";
export default {
  title: "@nv-fe/core-ui/buttons/Button",
} satisfies StoryDefault<typeof Button>;

export const Default: Story<ButtonProps> = () => (
  <Button rightIcon={<WhitePlusIcon />} children="Đọc thêm" />
);

export const NoIcon: Story<ButtonProps> = () => <Button children="Submit" />;

export const LeftIcon: Story<ButtonProps> = () => (
  <Button leftIcon={<WhitePlusIcon />} children="Đọc thêm" />
);

export const Loading: Story<ButtonProps> = () => (
  <Button children="Đọc thêm" isLoading={true} />
);

export const Disabled: Story<ButtonProps> = () => (
  <Button rightIcon={<WhitePlusIcon />} children="Đọc thêm" disabled={true} />
);
