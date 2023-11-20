import type { Story, StoryDefault } from "@ladle/react";

import React from "react";
import { LanguageSelectButtonMobile } from "@namviet-fe/core-ui";
import { ViIcon, EarthIcon } from "@namviet-fe/core-ui";

import "regenerator-runtime/runtime";
import "@namviet-fe/core-ui/dist/style.css";

export default {
  title: "@nv-fe/core-ui/buttons/SelectMobile",
} satisfies StoryDefault<typeof LanguageSelectButtonMobile>;

const handleOnClick = () => {
  alert("clicked");
};

export const Default: Story = () => (
  <LanguageSelectButtonMobile
    rightIcon={<EarthIcon />}
    buttonIcon={<ViIcon />}
    onClick={handleOnClick}
  />
);
