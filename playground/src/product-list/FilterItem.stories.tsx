import type { Story, StoryDefault } from "@ladle/react";
import React from "react";

import { FilterItem } from "@namviet-fe/core-ui";
import "@namviet-fe/core-ui/dist/style.css";
import { TranslationDecorators } from "../decorators/TranslationDecorators";

export default {
  title: "@nv-fe/core-ui/product-list/FilterItem",
  decorators: [...TranslationDecorators],
} satisfies StoryDefault<typeof FilterItem>;

const filterItems = {
  filterId: 1,
  filterType: "Loại bếp",
  filterOptions: [
    {
      optionId: 101,
      optionName: "Bếp hồng ngoại",
    },
    {
      optionId: 102,
      optionName: "Bếp từ 3 vùng nấu trở lên",
    },
    {
      optionId: 103,
      optionName: "Bếp từ đôi",
    },
    {
      optionId: 104,
      optionName: "Bếp từ đơn",
    },
  ],
};

const sortApplied = {
  optionId: 104,
  optionName: "Bếp từ đơn",
};

const onClickSort = (sortId: number) => {
  console.log("sortId", sortId);
};

export const Default: Story = () => (
  <div
    style={{
      height: "80vh",
      padding: "20px",
    }}
    className="w-full bg-gray-100"
  >
    <div className="w-56 mb-14">
      <FilterItem
        filterItems={filterItems}
        sortApplied={sortApplied}
        onClickSort={onClickSort}
      />
    </div>
  </div>
);
