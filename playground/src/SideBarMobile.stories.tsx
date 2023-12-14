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
        title: "Đầu đốt",
        url: "/#",
        subItems: [
          {
            title: "Đầu đốt theo hãng",
            url: "/#",
            subItems: [
              {
                title: "Madas",
                url: "/#",
              },
              {
                title: "Blowtherm",
                url: "/#",
              },
            ],
          },
        ],
      },
      {
        title: "Đầu đốt",
        url: "/#",
      },
    ],
  },
  {
    title: "Liên hệ",
    url: "/contact",
  },
];

const handleClosedBtnClick = () => {
  window.alert("closed");
};

const handleOnSideBarItemClick = () => {
  window.alert("redirect");
};

export const Default: Story = () => (
  <SideBarMobile
    closeButtonIcon={<CloseIcon />}
    sideBarItems={items}
    onCloseBtnClick={handleClosedBtnClick}
    onSideBarItemClick={handleOnSideBarItemClick}
    dropDownIcon={<DropDownIcon />}
  />
);
