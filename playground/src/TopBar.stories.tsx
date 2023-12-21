import type { Story, StoryDefault } from "@ladle/react";
import { TopBar } from "@namviet-fe/core-ui";
import { DropdownButton } from "@namviet-fe/core-ui";
import { EnIcon, ViIcon } from "@namviet-fe/core-ui";
import React from "react";
import "regenerator-runtime/runtime";

import "@namviet-fe/core-ui/dist/style.css";

export default {
  title: "@nv-fe/core-ui/TopBar",
} satisfies StoryDefault<typeof TopBar>;

export const Default: Story = () => (
  <TopBar
    contact1={{
      name: "Mr. Duong",
      phoneNumber: "+91 9876543210",
    }}
    contact2={{
      name: "Mr. Huynh",
      phoneNumber: "+91 9876543210",
    }}
    languageButton={
      <DropdownButton
        selected="vn"
        options={[
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
        ]}
      />
    }
  />
);
