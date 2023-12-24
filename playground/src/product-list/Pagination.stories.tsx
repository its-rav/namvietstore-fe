import type { Story, StoryDefault } from "@ladle/react";
import React from "react";

import { Pagination } from "@namviet-fe/core-ui";
import "@namviet-fe/core-ui/dist/style.css";
import { TranslationDecorators } from "../decorators/TranslationDecorators";

export default {
  title: "@nv-fe/core-ui/product-list/Pagination",
  decorators: [...TranslationDecorators],
} satisfies StoryDefault<typeof Pagination>;

const handlePageClick = (selectedItem: { selected: number }) => {
  console.log(`Page ${selectedItem.selected + 1}`);
};

const onClickPreviousButton = (previousPage: number) => {
  console.log("Page trước", previousPage);
};
const onClickNextButton = (nextPage: number) => {
  console.log("Page sau", nextPage);
};
const onChangePage: React.ChangeEventHandler<HTMLSelectElement> = (event) => {
  console.log("Page", event.target.value);
};

export const Default: Story = () => (
  <div
    style={{
      width: "100%",
      backgroundColor: "#F3F3F3",
      padding: "20px",
    }}
    className=""
  >
    <div style={{ marginBottom: "50px" }}>
      <Pagination
        paginationPage={{ totalPages: 5, currentPage: 4 }}
        handlePageClick={handlePageClick}
        onClickPreviousButton={onClickPreviousButton}
        onClickNextButton={onClickNextButton}
        onChangePage={onChangePage}
      />
    </div>
    <div style={{ marginBottom: "50px" }}>
      <Pagination
        paginationPage={{ totalPages: 2, currentPage: 1 }}
        handlePageClick={handlePageClick}
        onClickPreviousButton={onClickPreviousButton}
        onClickNextButton={onClickNextButton}
        onChangePage={onChangePage}
      />
    </div>
    <div style={{ marginBottom: "50px" }}>
      <Pagination
        paginationPage={{ totalPages: 100, currentPage: 100 }}
        handlePageClick={handlePageClick}
        onClickPreviousButton={onClickPreviousButton}
        onClickNextButton={onClickNextButton}
        onChangePage={onChangePage}
      />
    </div>
  </div>
);
