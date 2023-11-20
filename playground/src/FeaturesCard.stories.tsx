import type { Story, StoryDefault } from "@ladle/react";

import React from "react";

import "regenerator-runtime/runtime";
import "@namviet-fe/core-ui/dist/style.css";

import {
  FeaturesCard,
  type FeaturesCardItemType,
  ProductIcon,
} from "@namviet-fe/core-ui";
import { TranslationDecorators } from "./decorators/TranslationDecorators";

const featuresCardItem: FeaturesCardItemType = {
  icon: <ProductIcon />,
  title: "Sản phẩm",
  description: "Đội ngũ giàu kinh nghiệm, có chuyên môn",
};

export default {
  title: "@nv-fe/core-ui/FeaturesCard",
  decorators: [...TranslationDecorators],
} satisfies StoryDefault<typeof FeaturesCard>;

export const Default: Story = () => (
  <div
    style={{
      width: "100%",
      padding: "20px",
      backgroundColor: "black",
      display: "flex",
      justifyContent: "center",
    }}
  >
    <FeaturesCard featuresCardItem={featuresCardItem} />
  </div>
);
