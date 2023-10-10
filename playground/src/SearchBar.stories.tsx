import type { Story, StoryDefault } from "@ladle/react";

import React from "react";

import "regenerator-runtime/runtime";
import "@namviet-fe/core-ui/dist/style.css";

import { SearchBar, SearchIcon } from "@namviet-fe/core-ui";

export default {
  title: "@nv-fe/core-ui/SearchBar",
} satisfies StoryDefault<typeof SearchBar>;

const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
  e.preventDefault();
  window.alert("Redirect");
};

export const Default: Story = () => (
  <div
    style={{
      width: "100%",
      padding: "20px",
      backgroundColor: "white",
      display: "flex",
      justifyContent: "center",
    }}
  >
    <SearchBar
      searchIcon={<SearchIcon />}
      handleSubmit={handleSubmit}
      placeholders="Search all products..."
    />
  </div>
);
