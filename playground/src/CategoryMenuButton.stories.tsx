import type { Story, StoryDefault } from "@ladle/react";
import React from "react";
import "regenerator-runtime/runtime";
import "@namviet-fe/core-ui/dist/style.css";

import {type CategoryMenu, CategoryUsage } from "@namviet-fe/core-ui";
import { StripsIcon } from "@namviet-fe/core-ui";
import { KeyIcon } from "@namviet-fe/core-ui";
import { CategoryButton, type CategoryMenuButtonProps} from "@namviet-fe/core-ui";
import {type ItemProps, CategoryItem} from "@namviet-fe/core-ui"
export default {
  title: "@nv-fe/core-ui/CategoryMenuButton",
} satisfies StoryDefault<typeof CategoryUsage>;

export const Default: Story<CategoryMenu> = ({
  mainButtonIcon,
    mainButtonTitle,
    items,
}) => (
  <div
    style={{
      display: "block",
      marginLeft: "20px",
      marginRight: "20px",
      marginTop: "40px",
    }}
  >
    <CategoryUsage mainButtonTitle = {mainButtonTitle}
                   mainButtonIcon = {mainButtonIcon}
                   items = {items} />
  </div>
);

export const MenuButton: Story<CategoryMenuButtonProps> = () => (
    <div
        style={{
          display: "block",
          marginLeft: "20px",
          marginRight: "20px",
          marginTop: "40px",
        }}
    >
      <CategoryButton icon = {<StripsIcon />} title = {"Danh Mục Sản Phẩm"}/>
    </div>
);
export const DefaultItemButton: Story<ItemProps> = () => (
    <div
        style={{
          display: "block",
          marginLeft: "20px",
          marginRight: "20px",
          marginTop: "40px",
        }}
    >
      <CategoryItem icon = {<KeyIcon />} children = {"Đầu đốt"}/>
    </div>
);
export const SmallItemButton: Story<ItemProps> = () => (
    <div
        style={{
          display: "block",
          marginLeft: "20px",
          marginRight: "20px",
          marginTop: "40px",
        }}
    >
      <CategoryItem icon = {<KeyIcon />} children = {"Đầu đốt FO"} small={true}/>
    </div>
);

Default.defaultProps = {
  mainButtonTitle: "DANH MỤC SẢN PHẨM",
  mainButtonIcon: <StripsIcon />,
  items: [
    {
      icon: <KeyIcon />,
      name: "ĐẦU ĐỐT",
      link: "#ĐẦU ĐỐT",
      items: [
        {
          name: "Đầu đốt theo hãng",
          link: "#Đầu đốt theo hãng",
          items: [
            {
              name: "Madas",
              link: "#Madas",
            },
            {
              name: "Blowtherm",
              link: "#Blowtherm",
            },
            {
              name: "Monarc",
              link: "#Monarc",
            },
          ],
        },
        {
          name: "Đầu đốt theo loại nhiên liệu",
          link: "#Đầu đốt theo loại nhiên liệu",
          items: [
            {
              name: "Đầu đốt gas",
              link: "#Đầu đốt gas",
            },
            {
              name: "Đầu đốt DO",
              link: "#Đầu đốt DO",
            },
            {
              name: "Đầu đốt FO",
              link: "#Đầu đốt FO",
            },
          ],
        },
        {
          name: "Đầu đốt theo lĩnh vực",
          link: "#Đầu đốt theo lĩnh vực1",
          items: [
            {
              name: "Bê tông nhựa nóng",
              link: "#Bê tông nhựa nóng1",
            },
            {
              name: "Sản xuất",
              link: "#Sản xuất1",
            },
            {
              name: "Trạm trộn",
              link: "#Trạm trộn1",
            },
          ],
        },
        {
          name: "Đầu đốt theo lĩnh vực",
          link:"#Đầu đốt theo lĩnh vực2",
          items: [
            {
              name: "Bê tông nhựa nóng",
              link: "#Bê tông nhựa nóng2",
            },
            {
              name: "Sản xuất",
              link: "#Sản xuất2",
            },
            {
              name: "Trạm trộn",
              link: "#Trạm trộn2",
            },
          ],
        },
        {
          name: "Đầu đốt theo lĩnh vực",
          link: "#Đầu đốt theo lĩnh vực3",
          items: [
            {
              name: "Bê tông nhựa nóng",
              link: "#Bê tông nhựa nóng3",
            },
            {
              name: "Sản xuất",
              link: "#Sản xuất3",
            },
            {
              name: "Trạm trộn",
              link: "#Trạm trộn3",
            },
          ],
        },
      ],
    },
    {
      icon: <KeyIcon />,
      name: "LAPTOP1",
      link: "#LAPTOP1",
      items: [
        {
          name: "Cơ Khí1",
          link: "#Cơ Khí1",
          items: [
            {
              name: "Bút chì",
              link: "#Bút chì1",
            },
            {
              name: "Bút chì",
              link: "#Bút chì2",
            },
            {
              name: "Bút chì",
              link: "#Bút chì3",
            },
          ],
        },
        {
          name: "Cơ Khí2",
          link:"#Cơ Khí2",
          items: [
            {
              name: "Bút chì2",
              link: "#Bút chì1",
            },
          ],
        },
      ],
    },
    {
      icon: <KeyIcon />,
      name: "LAPTOP2",
      link: "#link_213",
      items: [
        {
          name: "Cơ Khí2",
          link:"#link_asd",
          items: [
            {
              name: "Bút chì",
              link: "#link_2134",
            },
          ],
        },
        {
          name: "Cơ Khí2",
          link: "#link_jdacj",
          items: [
            {
              name: "Bút chì",
              link: "#link_21ndjn",
            },
          ],
        },
      ],
    },
    {
      icon: <KeyIcon />,
      name: "LAPTOP3",
      link: "#link_nmvjof",
      items: [
        {
          name: "Cơ Khí3",
          link: "#link_12324fd",
          items: [
            {
              name: "Bút chì",
              link: "#link_kvjuj912",
            },
          ],
        },
        {
          name: "Cơ Khí3",
          link: "#link_123hcjjmd",
          items: [
            {
              name: "Bút chì",
              link: "#link_bkmkmklamksd",
            },
          ],
        },
      ],
    },
  ],
};
