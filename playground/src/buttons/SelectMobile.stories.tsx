import type { Story, StoryDefault } from "@ladle/react";
import { LanguageSelectButtonMobile } from "@namviet-fe/core-ui";
import { EarthIcon,ViIcon } from "@namviet-fe/core-ui";
import React from "react";
import "regenerator-runtime/runtime";


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
