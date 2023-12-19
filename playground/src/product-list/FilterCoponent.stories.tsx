import type { Story, StoryDefault } from "@ladle/react";
import React from "react";

import { FilterComponent, type FilterGroupType } from "@namviet-fe/core-ui";
import "@namviet-fe/core-ui/dist/style.css";
import { TranslationDecorators } from "../decorators/TranslationDecorators";

export default {
  title: "@nv-fe/core-ui/product-list/Filter-Component",
  decorators: [...TranslationDecorators],
} satisfies StoryDefault<typeof FilterComponent>;

const filterGroupItems: FilterGroupType = {
  sortItems: [
    "Khuyến mãi tốt nhất",
    "Giá tăng dần",
    "Giá giảm dần",
    "Sản phẩm bán chạy nhất",
  ],
  filterItems: [
    {
      filterType: "Loại bếp",
      filterOptions: [
        "Bếp hồng ngoại",
        "Bếp từ 3 vùng nấu",
        "Bếp từ 3 vùng nấu trở lên",
        "Bếp từ đôi",
        "Bếp từ đơn",
      ],
    },
    {
      filterType: "Loại lò vi sóng",
      filterOptions: [
        "Bàn nướng điện",
        "Lò hấp nướng",
        "Lò nướng",
        "Lò vi sóng cơ",
        "Lò vi sóng điện tử",
        "Lò vi sóng, nướng kết hợp",
        "Máy nướng bánh mì",
        "Vỉ nướng",
      ],
    },
  ],
};

export const Default: Story = () => (
  <div
    style={{
      height: "80vh",
      padding: "20px",
    }}
    className="w-full bg-gray-100"
  >
    <FilterComponent filterGroupItems={filterGroupItems} />
  </div>
);
