import type { Story, StoryDefault } from "@ladle/react";

import React from "react";

import "regenerator-runtime/runtime";
import "@namviet-fe/core-ui/dist/style.css";

import {
  ServiceCard,
  type ServiceCardItemType,
  ProductIcon,
} from "@namviet-fe/core-ui";

const serviceCardItem: ServiceCardItemType = {
  icon: <ProductIcon />,
  title: "Sản phẩm",
  description: "Đội ngũ giàu kinh nghiệm, có chuyên môn",
};

export default {
  title: "@nv-fe/core-ui/ServiceCard",
} satisfies StoryDefault<typeof ServiceCard>;

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
    <ServiceCard serviceCardItem={serviceCardItem} />{" "}
  </div>
);

export const NoContent: Story = () => (
  <div
    style={{
      width: "100%",
      padding: "20px",
      backgroundColor: "black",
      justifyContent: "center",
      display: "flex",
    }}
  >
    <ServiceCard />
  </div>
);
