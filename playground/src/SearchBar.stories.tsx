import type { Story, StoryDefault } from "@ladle/react";

import React from "react";

import "regenerator-runtime/runtime";
import "@namviet-fe/core-ui/dist/style.css";

import { SearchBar, SearchIcon } from "@namviet-fe/core-ui";

export default {
  title: "@nv-fe/core-ui/SearchBar",
} satisfies StoryDefault<typeof SearchBar>;

const onQueryChange = (e: React.ChangeEvent<HTMLInputElement>) => {
  console.log(e.target.value);
};

const onClick = () => {
  window.alert("Redirect to search results");
};

export const Default: Story = () => (
  <SearchBar
    placeholder="Search all products..."
    onQueryChange={onQueryChange}
    onClick={onClick}
  />
);
