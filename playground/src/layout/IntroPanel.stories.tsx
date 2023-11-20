import type { Story, StoryDefault } from "@ladle/react";
import React from "react";

import "@namviet-fe/core-ui/dist/style.css";

import { type IntroPanelItemType, IntroPanel } from "@namviet-fe/core-ui";
import { TranslationDecorators } from "../decorators/TranslationDecorators";

const introPanelItem: IntroPanelItemType = {
  title: "Công ty TNHH Thiết bị nhiệt Nam Việt",
  establisedTime: "Thành lập vào tháng 06 năm 2010",
  description:
    "Công ty TNHH Thiết bị nhiệt Nam Việt chuyên cung cấp sản phẩm và dịch vụ trong lĩnh vực thiết bị nhiệt nóng, thiết bị kiểm soát và đo đạc lưu lượng chất lỏng chất khí trong các ngành công nghiệp khu vực Đông Nam Á.",
};

export default {
  title: "@nv-fe/core-ui/layout/IntroPanel",
  decorators: [...TranslationDecorators],
} satisfies StoryDefault<typeof IntroPanel>;

export const Default: Story = () => (
  <div style={{ padding: "20px" }}>
    <IntroPanel introPanelItem={introPanelItem} buttonText="Đọc thêm" />
  </div>
);
