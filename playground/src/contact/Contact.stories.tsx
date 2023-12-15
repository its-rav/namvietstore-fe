import type { Story, StoryDefault } from "@ladle/react";
import React from "react";

import {
  Contact,
  ContactForm,
  type ContactItemType,
} from "@namviet-fe/core-ui";
import "@namviet-fe/core-ui/dist/style.css";
import { TranslationDecorators } from "../decorators/TranslationDecorators";

export default {
  title: "@nv-fe/core-ui/contact/ContactComponent",
  decorators: [...TranslationDecorators],
} satisfies StoryDefault<typeof Contact>;

const contactItem: ContactItemType = {
  phones: ["0969615251", "0969615252"],
  faxes: ["0969615253"],
  addresses: [
    "Phòng 21 Lầu 14, Tháp 1, Lê Lợi, Phường Bến Thành, Quận 1, Saigon Centre, 65 Lê Lợi, Phường Bến Thành, Quận 1, Ho Chi Minh",
  ],
  taxCodes: ["0969615254"],
  emails: ["contact@abc.com"],
  websites: ["www.abc.com"],
};

export const Default: Story = () => (
  <div
    style={{
      width: "100%",
    }}
    className="grid grid-cols-12 gap-4"
  >
    <div className="md:col-span-5 sm:col-span-12">
      <Contact contactItem={contactItem} />
    </div>
    <div
      className="md:col-span-7 sm:col-span-12"
      style={{ backgroundColor: "#F3F3F3" }}
    ></div>
  </div>
);
