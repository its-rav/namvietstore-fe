import type { Story, StoryDefault } from "@ladle/react";
import React from "react";

import "regenerator-runtime/runtime";
import "@namviet-fe/core-ui/dist/style.css";

import { MarqueeSection, type MarqueeContentType } from "@namviet-fe/core-ui";

export default {
  title: "@nv-fe/core-ui/layout/MarqueeSection",
} satisfies StoryDefault<typeof MarqueeSection>;

const content: MarqueeContentType[] = [
  {
    id: "logo1",
    url: "logo1",
    alt: "logo1",
  },
  {
    id: "logo2",
    url: "logo2",
    alt: "logo2",
  },
  {
    id: "logo3",
    url: "logo3",
    alt: "logo3",
  },
  {
    id: "logo4",
    url: "logo4",
    alt: "logo4",
  },
  {
    id: "logo5",
    url: "logo5",
    alt: "logo5",
  },
];

export const Default: Story = () => (
  <MarqueeSection
    content={content}
    gradient={true}
    gradientWidth={100}
    autoFill={true}
    speed={80}
  />
);
