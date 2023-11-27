import type { Story, StoryDefault } from "@ladle/react";

import React from "react";

import "regenerator-runtime/runtime";
import "@namviet-fe/core-ui/dist/style.css";

import { SearchBarMobile } from "@namviet-fe/core-ui";

export default {
  title: "@nv-fe/core-ui/SearchBarMobile",
} satisfies StoryDefault<typeof SearchBarMobile>;

const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
  event.preventDefault();
  window.alert("Submit");
};

const toggleSideBar = () => {
  window.alert("toggleSideBar");
};

export const Default: Story = () => (
  <SearchBarMobile
    placeholder="Tìm kiếm sản phẩm"
    handleSubmit={handleSubmit}
    toggleSideBar={toggleSideBar}
  />
);
