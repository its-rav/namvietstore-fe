import type { Story, StoryDefault } from "@ladle/react";
import React from "react";

import { FilterMobile, type FilterGroupType } from "@namviet-fe/core-ui";
import "@namviet-fe/core-ui/dist/style.css";
import { TranslationDecorators } from "../decorators/TranslationDecorators";

export default {
  title: "@nv-fe/core-ui/product-list/FilterMobile",
  decorators: [...TranslationDecorators],
} satisfies StoryDefault<typeof FilterMobile>;

const filterMobileItems: FilterGroupType = {
  sortItems: [
    {
      optionId: 12,
      optionName: "Khuyến mãi tốt nhất",
    },
    {
      optionId: 13,
      optionName: "Giá tăng dần",
    },
    {
      optionId: 14,
      optionName: "Giá giảm dần",
    },
    {
      optionId: 15,
      optionName: "Sản phẩm bán chạy nhất",
    },
  ],
  filterItems: [
    {
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
    },
    {
      filterId: 2,
      filterType: "Loại bếp",
      filterOptions: [
        {
          optionId: 201,
          optionName: "Bếp hồng ngoại",
        },
        {
          optionId: 202,
          optionName: "Bếp từ 3 vùng nấu trở lên",
        },
        {
          optionId: 203,
          optionName: "Bếp từ đôi",
        },
        {
          optionId: 204,
          optionName: "Bếp từ đơn",
        },
      ],
    },
  ],
};

const sortApplied = {
  optionId: 14,
  optionName: "Giá giảm dần",
};

const itemIdsSelected = [102, 201, 204];

const onClickSort = (sortId: number) => {
  console.log("Sort", sortId);
};

const onClickApplyFilter = () => {
  console.log("Apply");
};

const onClickClearFilter = () => {
  console.log("ClearAll");
};

const onClickCheck = (filterId: number) => {
  console.log("Check", filterId);
};

export const Default: Story = () => (
  <div
    style={{
      height: "80vh",
    }}
    className="w-full bg-gray-100"
  >
    <div className="" style={{ backgroundColor: "white" }}>
      <FilterMobile
        filterMobileItems={filterMobileItems}
        sortApplied={sortApplied}
        itemIdsSelected={itemIdsSelected}
        onClickSort={onClickSort}
        onClickApplyFilter={onClickApplyFilter}
        onClickClearFilter={onClickClearFilter}
        onClickCheck={onClickCheck}
      />
    </div>
  </div>
);
