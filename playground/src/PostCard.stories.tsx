import type { Story, StoryDefault } from "@ladle/react";
import React from "react";

import "regenerator-runtime/runtime";
import "@namviet-fe/core-ui/dist/style.css";

import { PostCard, WhitePlusIcon, Button } from "@namviet-fe/core-ui";

export default {
  title: "@nv-fe/core-ui/PostCard",
} satisfies StoryDefault<typeof PostCard>;

export const Default: Story = () => (
  <div style={{ width: "full", backgroundColor: "white", padding: "20px" }}>
    <PostCard
      title="Dầu đốt"
      description="Chuyên cung cấp các đầu đốt (Blowtherm - Italy, Hofamat - Germany, …) và phụ tùng đầu đốt các loại. Các sản phẩm được sản xuất với công nghệ tiên tiến và được sử dụng rộng rãi trong các ngành công nghiệp."
    >
      <Button children="Đọc thêm" rightIcon={<WhitePlusIcon />} />
    </PostCard>
  </div>
);
