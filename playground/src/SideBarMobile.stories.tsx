import type { Story, StoryDefault } from "@ladle/react";

import React from "react";

import "regenerator-runtime/runtime";
import "@namviet-fe/core-ui/dist/style.css";

import {
  SideBarMobile,
  CloseIcon,
  SideBarMobileItemProps,
  DropDownIcon,
} from "@namviet-fe/core-ui";
import { TranslationDecorators } from "./decorators/TranslationDecorators";

export default {
  title: "@nv-fe/core-ui/SideBarMobile",
  decorators: [...TranslationDecorators],
} satisfies StoryDefault<typeof SideBarMobile>;

const items: SideBarMobileItemProps[] = [
  {
    title: "Trang chủ",
    url: "/",
  },
  {
    title: "Giới thiệu",
    url: "/about",
  },
  {
    title: "Danh sách sản phẩm",
    url: "/products",
    subItems: [
      {
        title: "Danh sách sản phẩm",
        url: "/products",
      },
    ],
  },
  {
    title: "Liên hệ",
    url: "/contact",
  },
];

const handleOnClick = () => {
  window.alert("closed");
};

export const Default: Story = () => (
  <SideBarMobile
    closeButtonIcon={<CloseIcon />}
    items={items}
    onClick={handleOnClick}
    dropDownIcon={<DropDownIcon />}
  />
);
