import type { Story, StoryDefault } from "@ladle/react";
import React from "react";

import { ContactForm } from "@namviet-fe/core-ui";
import "@namviet-fe/core-ui/dist/style.css";
import { TranslationDecorators } from "./decorators/TranslationDecorators";

export default {
  title: "@nv-fe/core-ui/ContactForm",
  decorators: [...TranslationDecorators],
} satisfies StoryDefault<typeof ContactForm>;

export const Default: Story = () => (
  <div className="" style={{ padding: "20px" }}>
    <ContactForm />
  </div>
);
