import type { Story, StoryDefault } from "@ladle/react";
import { type DropdownButtonProps,DropdownButton } from "@namviet-fe/core-ui";
import { EnIcon, ViIcon } from "@namviet-fe/core-ui";
import React from "react";
import { FaFlagUsa } from "react-icons/fa";
import { GiUsaFlag } from "react-icons/gi";
import "regenerator-runtime/runtime";


export default {
  title: "@nv-fe/core-ui/buttons/Select",
} satisfies StoryDefault<DropdownButtonProps>;

export const Default: Story<DropdownButtonProps> = ({ selected, options }) => (
  <div style={{ float: "right" }}>
    <DropdownButton selected={selected} options={options} />
  </div>
);

Default.defaultProps = {
  selected: "one",
  options: [
    {
      key: "one",
      label: "Option 1",
      icon: <FaFlagUsa />,
    },
    {
      key: "two",
      label: "Option 2",
      icon: <GiUsaFlag />,
    },
  ],
};

Default.argTypes = {};

export const LanguageSelect: Story<DropdownButtonProps> = ({
  selected,
  options,
}) => (
  <div style={{ float: "right" }}>
    <DropdownButton selected={selected} options={options} />
  </div>
);

LanguageSelect.defaultProps = {
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

LanguageSelect.argTypes = {};
