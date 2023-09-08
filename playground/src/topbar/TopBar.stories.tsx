import React from "react";
import type { Story, StoryDefault } from "@ladle/react";
import "regenerator-runtime/runtime";
import "@namviet-fe/core-ui/dist/style.css";
import { type TopBarProps, TopBar } from "@namviet-fe/core-ui";
import { ContactIcon } from "@namviet-fe/core-ui";
import { DropdownButton, type DropdownButtonProps } from "@namviet-fe/core-ui";
import { EnIcon, ViIcon } from "@namviet-fe/core-ui";
export default {
  title: "@nv-fe/core-ui/topbar/TopBar",
} satisfies StoryDefault<typeof TopBar>;

export let Default: Story<DropdownButtonProps>;
Default = ({ selected, options }) => (
  <TopBar
      className={"TopBar"}
      topBarItems={[
          {
              nameContact: "Ms. Huynh",
              phoneNumber: "+91 9876543210",

          },
          {
              nameContact: "Mr. Duong",
              phoneNumber: "+91 9876543210",

          },
      ]}
      phoneIcon={<ContactIcon />}
      languageButton={<DropdownButton selected={selected} options={options} />}
  />
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
