import type { Story, StoryDefault } from "@ladle/react";
import React from "react";

import { ContactForm } from "@namviet-fe/core-ui";
import "@namviet-fe/core-ui/dist/style.css";
import { TranslationDecorators } from "../decorators/TranslationDecorators";

export default {
  title: "@nv-fe/core-ui/contact/ContactForm",
  decorators: [...TranslationDecorators],
} satisfies StoryDefault<typeof ContactForm>;

export const Default: Story = () => (
  <div
    style={{
      width: "100%",
    }}
    className="grid grid-cols-12 gap-4"
  >
    <div className="col-span-5"></div>
    <div className="col-span-7">
      <ContactForm />
    </div>
  </div>
);
