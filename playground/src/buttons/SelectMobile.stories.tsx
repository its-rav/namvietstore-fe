import type { Story, StoryDefault } from "@ladle/react";

import React from "react";
import { DropdownButtonMobile } from "@namviet-fe/core-ui";
import { EnIcon, ViIcon, EarthIcon } from "@namviet-fe/core-ui";

import "regenerator-runtime/runtime";
import "@namviet-fe/core-ui/dist/style.css";

export default {
  title: "@nv-fe/core-ui/buttons/SelectMobile",
} satisfies StoryDefault<typeof DropdownButtonMobile>;

const options = [
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
];

export const Default: Story = () => (
  <div style={{ float: "right", padding: "20px" }}>
    <DropdownButtonMobile
      options={options}
      buttonIcon={<EarthIcon />}
      selected="vn"
    />
  </div>
);
