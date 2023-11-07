import type { Story, StoryDefault } from "@ladle/react";

import React from "react";

import "regenerator-runtime/runtime";
import "@namviet-fe/core-ui/dist/style.css";

import { SearchBarMobile, BlackSearchIcon } from "@namviet-fe/core-ui";

export default {
  title: "@nv-fe/core-ui/SearchBarMobile",
} satisfies StoryDefault<typeof SearchBarMobile>;

export const Default: Story = () => (
  <SearchBarMobile
    searchIcon={<BlackSearchIcon />}
    placeholder="Tìm kiếm sản phẩm"
  />
);
