import React from "react";
import type { Story, StoryDefault } from "@ladle/react";
import "regenerator-runtime/runtime";
import "@namviet-fe/core-ui/dist/style.css";
import { BrandIcon } from "@namviet-fe/core-ui";
import { TopBar, type TopBarProps } from "@namviet-fe/core-ui";
import { ContactIcon } from "@namviet-fe/core-ui";
import { Button, type ButtonProps } from "@namviet-fe/core-ui";
import { DropdownButton, type DropdownButtonProps } from "@namviet-fe/core-ui";
import { FaFlagUsa } from "react-icons/fa";
import { GiUsaFlag } from "react-icons/gi";
import { EnIcon, ViIcon } from "@namviet-fe/core-ui";
import { LanguageSelect } from "../buttons/Select.stories";
export default {
  title: "@nv-fe/core-ui/topbar/TopBar",
} satisfies StoryDefault<typeof TopBar>;

export let Default: Story<DropdownButtonProps>;
Default = ({ selected, options }) => (
  <TopBar
    className="TopBar"
    brandIcon={<BrandIcon />}
    phoneIcon={<ContactIcon />}
    languageButton={<DropdownButton selected={selected} options={options} />}
    linkContact1={""}
    linkContact2={""}
    phoneNumber1={"+91 9876543210"}
    phoneNumber2={"+91 9876543210"}
    nameContact1={"Ms. Huynh"}
    nameContact2={"Mr. Duong"}
  ></TopBar>
);

Default.defaultProps = {
  selected: "vn",
  options: [
    {
      key: "en",
      label: "English",
      icon: <EnIcon />,
    },
    {
      key: "vn",
      label: "Tiếng Việt",
      icon: <ViIcon />,
    },
  ],
};
