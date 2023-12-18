import type { Story, StoryDefault } from "@ladle/react";
import React from "react";

import { FilterItem } from "@namviet-fe/core-ui";
import "@namviet-fe/core-ui/dist/style.css";
import { TranslationDecorators } from "../decorators/TranslationDecorators";

export default {
  title: "@nv-fe/core-ui/product-list/Filter-Item",
  decorators: [...TranslationDecorators],
} satisfies StoryDefault<typeof FilterItem>;

export const Default: Story = () => (
  <div
    style={{
      height: "80vh",
      padding: "20px",
    }}
    className="w-full bg-white"
  >
    <div className="md:w-56">
      <div className="mb-14">
        <FilterItem
          filterItem={{
            filterType: "Loại bếp",
            filterOptions: [
              "Bếp hồng ngoại",
              "Bếp từ 3 vùng nấu",
              "Bếp từ 3 vùng nấu trở lên",
              "Bếp từ đôi",
              "Bếp từ đơn",
            ],
          }}
        />
      </div>
      <div>
        <FilterItem
          filterItem={{
            filterType: "Loại lò vi sóng",
            filterOptions: [
              "Bàn nướng điện",
              "Lò hấp nướng",
              "Lò nướng",
              "Lò vi sóng cơ",
              "Lò vi sóng điện tử",
              "Lò vi sóng, nướng ết hợp",
              "Máy nướng bánh mì",
              "Vỉ nướng",
            ],
          }}
        />
      </div>
    </div>
  </div>
);
